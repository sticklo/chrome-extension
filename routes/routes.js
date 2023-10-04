const express = require('express')
const router = express.Router()
const {test,pushVideo,getVideos,transcribeVideo} = require('../controllers/controllers')


router.get('/',test)
router.post('/uploadfile',pushVideo)
router.route('/showvideos').get(getVideos)
router.route('/transcribe/:filename').get(transcribeVideo)
module.exports = router