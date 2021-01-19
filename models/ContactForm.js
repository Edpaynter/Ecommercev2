let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ContactFormSchema = new Schema({
    name: {
        type: String,
        // required: 'Please enter the task name before submission'
    },
    email: {
        type: String,
        // required: 'Please Enter a Valid Email Address'
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
        // required: 'Please Enter a message before submitting'
    },
    // status: {
    //     type: [{
    //         type: String,
    //         enum: ['pending', 'ongoing', 'completed']
    //     }],
    //     default: ['pending']
    // },
    createdDate: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('ContactForm', ContactFormSchema)