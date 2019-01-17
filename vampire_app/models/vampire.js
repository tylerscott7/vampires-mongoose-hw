const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
    //write your schema fields here
    name:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
	hair_color: { type: String, default: "blonde" },
	eye_color:   String,
	dob: Date, // can have arrays of objects with specific properties
	loves: [ { type: String } ], // can set defaults for properties
	location: String,
	gender: String,
    victims: { type: Number, min: 0 }
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;