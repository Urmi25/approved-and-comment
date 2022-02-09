const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentschema = new schema({

    body : String,
    author : String,
 
})

module.exports = mongoose.model('commentt',commentschema);