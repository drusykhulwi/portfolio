import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

//ENABLE CORS
app.use(cors());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
}).promise();

app.use(express.json());