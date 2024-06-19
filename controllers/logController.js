const fs = require('fs');
const dataFilePath = './data/data.json';

exports.addLog = (req, res) => {
    const customerId = req.params.id;
    const newLog = {
        text: req.body.log,
        date: new Date().toISOString()
    };

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            const json = JSON.parse(data);
            const customer = json.find(item => item.id.toString() === customerId);
            if (customer) {
                customer.logs.push(newLog);
                fs.writeFile(dataFilePath, JSON.stringify(json, null, 2), (err) => {
                    if (err) {
                        res.status(500).send('Error writing data');
                    } else {
                        res.send('Log added');
                    }
                });
            } else {
                res.status(404).send('Customer not found');
            }
        }
    });
};
