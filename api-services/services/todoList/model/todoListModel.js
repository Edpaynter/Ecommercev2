let mongoose = require('mongoose')
let Schema = mongoose.Schema

let TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the task name before submission'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
})

module.exports = mongoose.model('Task', TaskSchema)