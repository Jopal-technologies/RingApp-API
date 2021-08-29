const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
    Id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: true
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
})

console.log(User);
console.log(User === sequelize.models.User);




(async()=>{
    try{ 
        //await sequelize.drop();
        await User.sync({ force: false })
    }catch(e){
        console.log(e);
        console.log('failed');
    }
    
})();

const a = User.build({
    Name: "Alvaro",
    Surname: "Alonso",
    Email: "alvaroarpal@gmail.com",
    Country: "Spain",
    BirthDate: "04/04/1996",
    ConfigId: 1,
})
a.save();

