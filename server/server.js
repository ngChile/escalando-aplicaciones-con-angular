const express = require('express');
const bodyParser = require('body-parser');
const { version } = require('./package.json');
const { getData } = require('./services/getData');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = process.env.PORT || 8080;
const appData$ = getData();
// make express look in the public directory for assets (css/js/img)
app.use(express.static(`${__dirname}/public`));

// ENDPOINTS
// TODO: improve organization and declaration of each endpoint

// show docker container health
app.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        version, status: 'up', 
        uptime: process.uptime(),
        environment: process.env.ENVIRONMENT_NAME
    }));
});

app.get('/auth-service/v1/groups', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    appData$.then(({ groups }) => res.send(groups));
});

app.post('/auth-service/v1/login', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    appData$.then(({ user }) => res.send(user));
});

app.get('/admin/v1/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    appData$.then(({ users }) => res.send(users));
});

app.post('/admin/v1/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    appData$.then(({ users }) => {
        // TODO: remove push on production
        users.list.push(req.body);
        res.send(req.body);
    });
});

app.get('/auth-service/v1/roles', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    appData$.then(({ roles }) => res.send(roles));
});

app.post('/auth-service/v1/roles', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    appData$.then(({ roles }) => {
        // TODO: remove push on production
        roles.push(req.body)
        res.send(req.body);
    });
});

app.get('/scholarship/v1/postulations', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    appData$.then(({ postulations }) => res.send(postulations));
});

// STATIC SERVER
// redirect all routes to index.html for SPA behaviour
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port} in environmet ${process.env.ENVIRONMENT_NAME}`);
});
