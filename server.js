require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
require('express-async-errors');
const path = require('path')
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const fileupload = require('express-fileupload');
const morgan = require('morgan')
const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
const cors = require('cors')


app.use(express.json());
app.use(morgan('dev'))
app.use(express.static('./server'))
app.use(cors())

// middleware
app.use(fileupload());
//  routes
app.use('/api/HNG', routes);

// Error handling middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
// app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.get('/transcribe/:filename',async(req,res)=>{
    try {
        const { filename } = req.params
        console.log(filename)
        const response = await deepgram.transcription.preRecorded(
            { url: "https://chrome-ext-server.onrender.com/uploads/" + filename },
            { punctuate: true, utterances: true }
        )

        const srtTranscript = response.toSRT();

        res.status(200).json({
            status: "Success",
            transcript: srtTranscript
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
})
const port = process.env.PORT || 3000;

(async () => {
    try {

        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
})();
