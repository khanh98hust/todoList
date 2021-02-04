const mongoose = require('mongoose')

const congviecSchema = mongoose.Schema({
    ten : String,
    noidung : String
})

module.exports = mongoose.model('congviec', congviecSchema, 'congviec')