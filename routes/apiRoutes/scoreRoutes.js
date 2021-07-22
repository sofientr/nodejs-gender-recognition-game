const router = require('express').Router();
const fs = require('fs');

const { readLines } = require('../../lib/textToDb');


const request = require('request');



router.get('/gender', (req, res)=>{
    
    var name = req.query.name;
    var key = 'yuJ4dMp2tdA96tYuXNbDHsqJffyjs8Zu3AH6';
    request('https://gender-api.com/get?key='+key+'&name='+name, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            res.send(parsedBody)

        } else {
            console.log("error when scrapping")
        }
      });
})

router.post('/textToDb', (req, res) => {
    //for every line of text file do ..
    readLines((line)=>{
        console.log(line)


    })
});





module.exports = router;