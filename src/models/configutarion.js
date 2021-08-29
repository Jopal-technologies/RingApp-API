const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('Users', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ConfigId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
})

console.log(User);
console.log(User === sequelize.models.User);