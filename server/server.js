const express = require('express');
const bodyParser = require('body-parser');
const { version } = require('./package.json');
const groups = require('./groups.json');
const user = require('./user.json');
const users = require('./users.json');
const users = require('./roles.json');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(`${__dirname}/public`));

// show docker container health
app.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ version, status: 'up', uptime: process.uptime() }));
});

app.get('/auth-service/v1/groups', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(groups);
});

app.post('/auth-service/v1/login', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(user);
});

app.get('/admin/v1/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
});

app.post('/admin/v1/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    users.list.push(req.body);
    res.send(req.body);
});

app.get('/auth-service/v1/roles', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(roles);
});

app.post('/auth-service/v1/roles', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    roles.push(req.body)
    res.send(req.body);
});

// redirect all routes to index.html for SPA behaviour
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});