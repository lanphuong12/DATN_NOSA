
//read .env file
require('dotenv').config()
//use sequelize library to connect to database
const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize({
  host:  process.env.DATABASE_SERVER,
  dialect:  process.env.DATABASE_TYPE,
  dialectModulePath: 'sequelize-msnodesqlv8',
  database: process.env.DATABASE,
  userName: process.env.DATABASEBASE_USERNAME,
  password: process.env.DATABASEBASE_PASSWORD,
  define:{
      freezeTableName:true,
      timestamps:false,
      trustedConnection: true
  }
});
//uncomment this if you do not have database yet
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

module.exports.sequelize = sequelize;