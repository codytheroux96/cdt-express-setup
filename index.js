const fs = require('fs');
const publicFolder = path.join(__dirname, '../public');
const controllersPath = path.join(__dirname, '../controllers');
const modelsPath = path.join(__dirname, '../models');
const viewsPath = ('../views');

const skeletonCreation = `
const path = require('path');
const express = require('express');
const sequelize = require('../config')
const routes = require('../controllers');

const PORT = process.env.PORT || 3001;

const app = express();

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(Listening at https://localhost:${PORT});
    })
})
`

fs.writeFileSync('../server.js', skeletonCreation);
fs.mkdirSync(publicFolder);
fs.mkdirSync(controllersPath);
fs.mkdirSync(modelsPath);
fs.mkdirSync(viewsPath);