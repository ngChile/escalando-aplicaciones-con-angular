const express = require('express');
const { version } = require('./package.json');

const app = express();

const port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(`${__dirname}/public`));

// show docker container health
app.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ version, status: 'up', uptime: process.uptime() }));
});

// redirect all routes to index.html for SPA behaviour
app.get('*', (req, res) => {
    console.log('+++++++++++++++++++++++++++++++');
    console.log(req.params);
    console.log('+++++++++++++++++++++++++++++++');
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});