const express = require("express");
const router = express.Router();
const CityController = require("../controllers/cityController");
const CitySchema = require("../validations/cityValidation.js")
const JoiMiddleWare = require('../middlewares/joi/joiMiddleware.js')

//To create city 
router.post("/create",
JoiMiddleWare(CitySchema.createCity,'body'),CityController.createCity);

router.get("/get-all-city", 
CityController.getAllCity);

/*
@apiParams = {
    id: number
}
*/
router.get("/:id", 
JoiMiddleWare(CitySchema.getCitySchema, 'params'),
CityController.getCityById);

router.put("/update", 
CityController.updateCity);

/*
    @apiParams = {
        id: number
    }
*/

router.delete("/:id", 
JoiMiddleWare(CitySchema.deleteCity, 'params'),
CityController.deleteCity);

module.exports = router;