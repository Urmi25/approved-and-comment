const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userschema = new schema({

    firstname: String,
    lastname: {
        type: String
    },
    mail:{
        type: String,
        required: true,
        trim: true,
        unique: true,

    },
    password:{
        type: String,
        minlength: 2,
        maxlength: 100,
    },
    address : {
        division: String,
        country: {
                type: String,
                default : "Bangladesh"
        }     
    },
    isDeleted: {
        type: Boolean ,
        default : false
    }
});
module.exports = mongoose.model('user',userschema);









// const mongoose = require('mongoose');
// const  schema  = mongoose.Schema;
// const userschema = new schema({
//     firstname: String,
//     lastname: {
//         type: String
//     },
//     mail:{
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//     },
//     password:{
//         type: String,
//         minlength: 2,
//         maxlength: 100,
//     }
// });
// module.exports = mongoose.model('user',userschema);