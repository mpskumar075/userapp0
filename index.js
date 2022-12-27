import express from 'express';
import dotenv from  'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser'

const app = express();
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use('/', Routes);

const PORT = proces.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`server is runing on ${PORT}`))