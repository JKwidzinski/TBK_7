const express = require('express');
const app = express();

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '5432';

const { Pool } = require('pg');
const pool = new Pool({
    user: 'dbuser',
    host: host,
    database: 'sample-db',
    password: 'secretpassword',
    port: parseInt(port),
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
})

app.get('/hobbies', async(req, res) => {
    const result = await pool.query('SELECT * FROM hobbies');
    res.send(result.rows);
})

app.get('/hobbies/:n', async(req, res) => {
    const result = await pool.query(`SELECT * FROM hobbies LIMIT 1 OFFSET ${req.params.n - 1}`);
    res.send(result.rows);
})

app.get('/hobbies/years/avg', async(req, res) => {
    const result = await pool.query('SELECT years FROM hobbies');
    let sum = 0;
    result.rows.forEach(r => sum += r.years)
    let avg = sum / result.rows.length
    res.send(`${avg}`);
})