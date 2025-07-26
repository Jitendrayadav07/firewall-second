const Response = require("../classes/Response");
const db = require("../config/db.config");
const {QueryTypes} = require("sequelize");
const CITY_CONSTANTS_STATUS = require('../constants/cityConstants')

//To create City
const createCity = async (req, res) => {
    try{
        let { name } = req.body
        let cityName = await db.cities.findOne({where: {name: name }});
        if (cityName) {
            return res.status(400).send(Response.sendResponse(false, null, CITY_CONSTANTS_STATUS.CITY_ALREADY_EXISTS, 400));
        }
        let city = await db.cities.create({ name: name });
        res.status(201).send(Response.sendResponse(true,city,CITY_CONSTANTS_STATUS.CITY_CREATED,201));
    }catch(err) {
        return res.status(500).send(Response.sendResponse(false,null,CITY_CONSTANTS_STATUS.ERROR_OCCURED,500));
    }
}

// To Get all  City
const getAllCity = async (req, res) => {
    try {
        const city = await db.cities.findAll({order: [['name', 'ASC']] });
        res.status(200).send(Response.sendResponse(true,city,null,200));
    }catch(err){
        return res.status(500).send(Response.sendResponse(false,null,CITY_CONSTANTS_STATUS.ERROR_OCCURED,500));
    }
}
// To Get  City By its id
const getCityById = async (req, res) => {
    try {
        let city = await db.cities.findOne({where: {id: req.params.id}});
        res.status(200).send(Response.sendResponse(true,city,null,200));
    }catch(err){
        return res.status(500).send(Response.sendResponse(false,null,CITY_CONSTANTS_STATUS.ERROR_OCCURED,500));
    }
}

// To Update  City By its id
const updateCity = async (req, res) => {
    try{
        let city = await db.cities.update(req.body, {where: {id : req.body.id}})
        res.status(200).send(Response.sendResponse(true,city,CITY_CONSTANTS_STATUS.CITY_UPDATED,200));
    }catch(err) {
        return res.status(500).send(Response.sendResponse(false,null,CITY_CONSTANTS_STATUS.ERROR_OCCURED,500));
    }
}

// To delete  City By its id cannot delete foreign key
const deleteCity = async (req, res) => {
    try{
        let city = await db.cities.destroy({where: {id : req.params.id}})
        res.status(200).send(Response.sendResponse(true,city,CITY_CONSTANTS_STATUS.CITY_DELETED,200));
    }catch(err) {
        return res.status(500).send(Response.sendResponse(false,null,CITY_CONSTANTS_STATUS.ERROR_OCCURED,500));
    }
}

module.exports = { 
    createCity,
    getAllCity,
    getCityById,
    updateCity,
    deleteCity
}


