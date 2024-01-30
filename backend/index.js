import { express } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import bookRoute from './routes/booksRoute.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome To YOYO Land");
});

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(()=>{
    console.log("App connected to database");
})
.catch((error)=> {
    console.log(error);
});