const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const db = require('./db');
const port = process.env.PORT || 3001;

db.connect().then(dbo => {

    app.use(cors());
    
    app.get('/rest/shows', (req, res) => {
        dbo.collection('shows').find({}).toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

    app.get('/rest/shows/:id', (req, res) => {
        dbo.collection('shows').findOne({ id: req.params.id }, (err, doc) => {
            if (err) throw err;
            res.send(doc);
        });
    });
    
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));
});