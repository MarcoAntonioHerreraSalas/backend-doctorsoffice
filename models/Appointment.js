const mongoose = require('mongoose');
const Patient = require('./Patient');
const Service = require('./Service');


const appointmentSchema = mongoose.Schema({
    
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required: true,
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Service',
        required: true
    },
    start: {
        type: Date,
        required: true,
    },
    allDay: {
        type: Boolean,
        required: true,
    }

})

module.exports = mongoose.model('Appointment', appointmentSchema);