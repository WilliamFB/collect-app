const { Schema, model } = require('mongoose');

const PointSchema = new Schema({
    name: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
});

module.exports = model('Point', PointSchema);
