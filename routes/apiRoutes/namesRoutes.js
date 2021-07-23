const router = require('express').Router();
const query = require('../../db/db-connection');
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();





router.get('/gender', (req, res) => {
    var name = req.query.name;
    var key = process.env.API_KEY;
    console.log('https://gender-api.com/get?key=' + key + '&name=' + name)
    request('https://gender-api.com/get?key=' + key + '&name=' + name, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            var parsedBody = JSON.parse(body);
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



module.exports = router;