import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 9999;


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log("[API] listening on port " + port)
});