const fs = require('fs');
const dataFilePath = './data/data.json';

exports.getCustomerById = (req, res) => {
    const customerId = req.params.id;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            const json = JSON.parse(data);
            const customer = json.find(item => item.id.toString() === customerId);
            if (customer) {
                res.json(customer);
            } else {
                res.status(404).send('Customer not found');
            }
        }
    });
};
