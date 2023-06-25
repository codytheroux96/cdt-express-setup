const fs = require('fs');
const controllerPath = ('./controllers');
const modelPath = ('./models');
const viewPath = ('./views');

const skeletonCreationFunction = `
function createTemplate(req, res, next)
{
console.log('Creating Template')
const path = require('path');
const express = require('express');
const sequelize = require('./config')
const routes = require('./controllers');

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
        console.log();
    })
})
next();

module.exports = createTemplate;
}`

fs.writeFileSync('server.js', skeletonCreationFunction);
fs.mkdirSync(controllerPath);
fs.mkdirSync(modelPath);
fs.mkdir(viewPath);

//TODO - create a config and controllers folder and write to them
//TODO - create a console log that displays where it is listening "https://localhost:${PORT}"