const joi = require('joi');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('config');

const { User } = require('./models/user');
const { Language } = require('./models/language');
const Fawn = require('fawn');
const bcrypt = require('bcrypt');

joi.objectId = require('joi-objectid')(joi);

// Require routes from another file
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

//Connect to mongodb 
mongoose.connect(config.get('mongodb'), {
    useNewUrlParser: true
}).catch(err => console.log(err));

Fawn.init(mongoose);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

// async function add() {

//     const _id = new mongoose.Types.ObjectId();

//     var task = Fawn.Task();

//     let user = new User({
//         _id: _id,
//         firstname: "George",
//         lastname: "Bibilashvili",
//         username: "baxri",
//         password: (await bcrypt.hash('test123456', (await bcrypt.genSalt(10)))),
//         age: 29,
//     });

//     let language = new Language({
//         title: "EN",
//         user: _id,
//     });

//     task.save(user);
//     task.save(language);

//     let result = await task.run();
// }

// add();


// Inject routes in express app
app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});


