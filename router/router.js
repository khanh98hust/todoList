const { Router } = require('express')
const router = Router()
const controller = require('./controller')

router.get('/', controller.index)
router.post('/add', controller.themCongViec)
router.get('/all', controller.laycongviec)
router.delete('/xoa/:id', controller.xoa)

//get lay du lieu
//post up du lieu
//put update du lieu
//delete xoa
//patch sua ...

module.exports = router