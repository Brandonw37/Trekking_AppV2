'use strict';

var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.ObjectId;
const findOrCreate = require('mongoose-findorcreate');

const googleSchema = new mongoose.Schema({
    name: String,
    email: String,
    provider:  String,
    providerUserId:  String,
    accessToken: String,
    userId: {type: ObjectId, ref: 'User'},
    dateAdded: {type: Date, default: Date.now}
    
});
googleSchema.plugin(findOrCreate);

const googledb = mongoose.model('googledb', googleSchema)

module.exports = {
    googledb: googledb
}