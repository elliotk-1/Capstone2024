const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// middleware to parse JSON bodies
app.use(bodyParser.json());

// serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/userAdd.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    const csvRow = `${formData.date},${formData.info}\n`;

    // Append data to CSV file
    fs.appendFile('data.csv', csvRow, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error appending data to CSV file');
        }
        
        console.log('Data appended to CSV file');
        res.status(200).send('Data appended successfully');
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

