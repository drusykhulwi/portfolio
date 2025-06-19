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

async function addAbout(name, bio, profileImage, cvURL) {
    const connection = await db.getConnection();
    try{
        const [results] = await connection.query(
            'INSERT INTO about (name, bio, profile_image, cv_url) VALUES (?, ?, ?, ?)',
            [name, bio, profileImage, cvURL]
        );
        return results;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        connection.release();
    }
}

async function getAbout() {
    const connection = await db.getConnection();
    try {
        const [results] = await connection.query('SELECT * FROM about');
        return results;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        connection.release;
    }
}