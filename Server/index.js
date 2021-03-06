import express from 'express';
import bodyParser from 'body-parser';
import mongoose from  'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello to MetroBroker API')
})

const PORT = process.env.PORT || 9999;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);