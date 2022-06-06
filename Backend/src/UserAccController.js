//require time table models
const timetablesModels = require('../Models/ThoiKhoaBieu').ThoiKhoaBieu
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const Acount = require('../Model').Acount;
const dao = require('../Dao/Connection')
/*function*/
const login = async(req, res) => {
    var account = req.body.id;
    const user = await dao.sequelize.query(
        `Exec studentLogin ${account}`, { raw: true, nest: true }
    )
    return user[1] != 0 ? user[0] : null
}