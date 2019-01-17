// 1. Require your node modules... Which are?
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const vampireData = require('./populateVampires');
const Vampire = require('./models/vampire')

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/test';
mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// 4. Open your mongoose connection


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
});

// ### Add some new vampire data
Vampire.create({
    name: 'Alucard',
    eye_color: 'green',
    dob: new Date(800, 1, 1, 1, 15),
    loves: ['blood', 'night', 'schemes'],
    location: 'Transylvannia, Romania',
    gender: 'm',
    victims: 5478
 }, (err, vampire)=>{
    if (err) {
        console.log(err);
    }else {
        console.log(vampire);
    }
 });

 Vampire.create({
    name: 'Bob',
    eye_color: 'green',
    dob: new Date(800, 1, 1, 1, 15),
    loves: ['blood', 'night', 'schemes'],
    location: 'Transylvannia, Romania',
    gender: 'm',
    victims: 5478
 }, (err, vampire)=>{
    if (err) {
        console.log(err);
    }else {
        console.log(vampire);
    }
 });

 Vampire.create({
    name: 'Cassidy',
    eye_color: 'green',
    dob: new Date(800, 1, 1, 1, 15),
    loves: ['blood', 'night', 'schemes'],
    location: 'Transylvannia, Romania',
    gender: 'f',
    victims: 5478
 }, (err, vampire)=>{
    if (err) {
        console.log(err);
    }else {
        console.log(vampire);
    }
 });

 Vampire.create({
    name: 'Danielle',
    eye_color: 'green',
    dob: new Date(800, 1, 1, 1, 15),
    loves: ['blood', 'night', 'schemes'],
    location: 'Transylvannia, Romania',
    gender: 'f',
    victims: 5478
 }, (err, vampire)=>{
    if (err) {
        console.log(err);
    }else {
        console.log(vampire);
    }
 });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
