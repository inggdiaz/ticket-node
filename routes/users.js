const {Router} = require('express')
const {GetUsers} = require('../controllers/users')

const router = Router();

router.get('/', GetUsers)

module.exports = router
