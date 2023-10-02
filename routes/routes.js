const express = require('express')
const router = express.Router()
const {test,pushVideo,getVideos} = require('../controllers/controllers')


router.get('/',test)
router.post('/uploadfile',pushVideo)
router.route('/showvideos').get(getVideos)
module.exports = router