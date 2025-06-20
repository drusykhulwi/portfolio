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

//Defining a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the drusilla API');
});

//Route to add about
app.post('/add-about', async (req, res) => {
    const { name, bio, profileImage, cvURL } = req.body;
    try {
        const results = await addAbout(name, bio, profileImage, cvURL);
        res.json({ message: 'About added', results });
    } catch(error) {
        res.status(500).json({ error: 'Failed to add about' });
    }
});

//Route to get the about
app.get('/about', async (req, res) => {
    try {
        const results = await getAbout();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' })
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})