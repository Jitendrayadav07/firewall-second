//models/role.js
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define(
      "city",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: true,
        underscored: true,
      }
    );
    return City;
  };
  