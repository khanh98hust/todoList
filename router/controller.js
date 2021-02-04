const congviecDb = require('../models/congviec')

module.exports.index = (req, res) =>{
    res.send('day la index')
}

module.exports.themCongViec = async (req, res) =>{
    await congviecDb.create(req.body)
    res.send('them thanh cong')
}




