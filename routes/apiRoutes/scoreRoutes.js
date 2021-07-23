const router = require('express').Router();
const fs = require('fs');
const query = require('../../db/db-connection');


const {
    readLines
} = require('../../lib/textToDb');


const request = require('request');



router.get('/gender', (req, res) => {

    var name = req.query.name;
    var key = 'yuJ4dMp2tdA96tYuXNbDHsqJffyjs8Zu3AH6';
    request('https://gender-api.com/get?key=' + key + '&name=' + name, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            console.log(parsedBody)
            res.send(parsedBody)

        } else {
            console.log("error when fetching data from api")
        }
    });
})
router.get("/names", async function (req, res, next) {
    try {
        let sql = `SELECT * FROM names`;
        res.json(await query(sql));
    } catch (err) {
        console.error(`Error while getting names `, err.message);
        next(err);
    }
})


router.post('/textToDb', async function (req, res, next) {
    try {
        //for every line of text file do ..
        readLines(async (line) => {
            let myarray = line.split(" ");
            const sql = `INSERT INTO names
    ( first_name, last_name) VALUES (?,?)`;

            const result = await query(sql, [myarray[0], myarray[1]]);
            const affectedRows = result ? result.affectedRows : 0;
            return affectedRows;

        })


    } catch (err) {
        console.error(`Error while getting inserting names to database `, err.message);
        next(err);
    }
});





module.exports = router;