const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const query = require('./db/db-connection');
const htmlRoutes = require('./routes/htmlRoutes');
const {
    readLines
} = require('./lib/textToDb');


const app = express();
const apiRoutes = require('./routes/apiRoutes')

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/', htmlRoutes);

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    
        //for every line of text file do ..
        readLines(async (line) => {
            let myarray = line.split(" ");
            const sql = `INSERT INTO names
    ( first_name, last_name) VALUES (?,?)`;

            const result = await query(sql, [myarray[0], myarray[1]]);
            const affectedRows = result ? result.affectedRows : 0;
            return affectedRows;

        })
    console.log(`App is listening on port ${PORT}`)
});