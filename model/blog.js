const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogschema = new schema({
    title : String,
    body : String,
    author : {
        type : schema.Types.ObjectId,
        ref : 'user',
    },
    comment:[
        {
        type : schema.Types.ObjectId,
        ref : 'commentt',
        },
    ],
    isdeleted: {
        type : Boolean,
        default: false
    },
    isapproved : {
        type: Boolean,
        default : false,
    },
    address: {
        division : String,
        country:{
            type: String,
            default : "Bangladesh",
        },
    }
    
})
module.exports = mongoose.model('blog',blogschema);