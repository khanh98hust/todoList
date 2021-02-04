const { Router } = require('express')
const router = Router()
const controller = require('./controller')

router.get('/', controller.index)
router.post('/add', controller.themCongViec)

module.exports = router