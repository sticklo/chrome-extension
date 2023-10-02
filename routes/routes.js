const express = require('express')
const router = express.Router()
const {test,sendVideo,getVideos} = require('../controllers/controllers')


router.get('/',test)
router.post('/uploadfile',sendVideo)
router.route('/showvideos').get(getVideos)
module.exports = router