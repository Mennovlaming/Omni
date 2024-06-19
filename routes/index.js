const express = require('express');
const router = express.Router();
const fs = require('fs');
const dataFilePath = './data/data.json';

router.get('/', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
