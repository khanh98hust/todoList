const congviecDb = require('../models/congviec')

module.exports.index = (req, res) =>{
    res.send('day la index')
}

module.exports.themCongViec = async (req, res) =>{
    await congviecDb.create(req.body)
    res.send('them thanh cong')
}

module.exports.laycongviec = async (req, res) =>{
    var congviec = await congviecDb.find()
    res.json(congviec)
}

module.exports.xoa = async (req, res) =>{
    var id = req.params.id
    await congviecDb.findByIdAndDelete(id)
    res.send('xoa thanh cong')
}
