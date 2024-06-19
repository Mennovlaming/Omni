const fs = require('fs');
const dataFilePath = './data/data.json';

exports.searchData = (req, res) => {
    const query = req.query.q.toLowerCase();

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            const json = JSON.parse(data);
            const filteredResults = json.filter(item => {
                const [zipcodeQuery, hnumberQuery] = query.split(' ');

                const isCnumberMatch = item.cnumber.includes(query);
                const isAddressMatch = item.zipcode.toLowerCase() === zipcodeQuery &&
                                       item.hnumber.toString() === hnumberQuery;

                return isCnumberMatch || isAddressMatch;
            });

            res.json(filteredResults);
        }
    });
};
