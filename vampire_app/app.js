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
    victims: 400
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
// 1.
Vampire.find(
    { gender: 'f' },
    (err, vampires) => {
        console.log("THESE VAMPIRES ARE FEMALE", vampires); 
	}
);
// 2.
Vampire.find(
    { victims: { $gt:500 } },
    (err, vampires) => {
        console.log("GREATER THAN 500", vampires); 
	}
);
// 3.
Vampire.find(
    { victims: { $lte:150 } },
    (err, vampires) => {
        console.log("LESS THAN 150", vampires); 
	}
);
// 4.
Vampire.find(
    { victims: { $ne:210234 } },
    (err, vampires) => {
        console.log("NOT EQUAL TO 210234", vampires); 
	}
);
// 5.
Vampire.find(
    { victims: { $gt:150,$lt:500 } },
    (err, vampires) => {
        console.log("> 150 & < 500", vampires); 
	}
);

/////////////////////////////////////////////////
// ### Select by exists or does not exist
Vampire.find(
    { title: { $exists:true } },
    (err, vampires) => {
        console.log("TITLE EXISTS", vampires); 
	}
);

Vampire.find(
    { victims: { $exists:false } },
    (err, vampires) => {
        console.log("VICTIMS DONT EXIST", vampires); 
	}
);

Vampire.find(
    { title: { $exists:true } , 
    victims: { $exists:false } },
    (err, vampires) => {
        console.log("TITLE EXISTS, NOT VICTIMS", vampires); 
	}
);

Vampire.find(
    { victims: { $exists:true, $gt:1000 } },
    (err, vampires) => {
        console.log("VICTIMS > 1000", vampires); 
	}
);

/////////////////////////////////////////////////
// ### Select with OR
Vampire.find(
    { $or: [{location: 'New York, New York, US'},{location: 'New Orleans, Louisiana, US'} ]},
    (err, vampires) => {
        console.log("NEW YORK OR NEW ORLEANS", vampires); 
	}
);

Vampire.find(
    { $or: [{loves: 'brooding'},{loves: 'being tragic'} ]},
    (err, vampires) => {
        console.log("BROODING OR TRAGIC", vampires); 
	}
);

Vampire.find(
    { $or: [{loves: 'marshmallows'},{victims: {$gt:1000}} ]},
    (err, vampires) => {
        console.log("NEW YORK OR NEW ORLEANS", vampires); 
	}
);

Vampire.find(
    { $or: [{hair_color: 'red'},{eye_color: 'green'} ]},
    (err, vampires) => {
        console.log("NEW YORK OR NEW ORLEANS", vampires); 
	}
);

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
