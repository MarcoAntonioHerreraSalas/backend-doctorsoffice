const router = require('express').Router();
const Joi = require('@hapi/joi');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Service = require('../models/Service');

const appointmentValidate = Joi.object({
    id_patient:Joi.string().min(5).max(255).required(),
    id_service: Joi.string().min(5).max(255).required(),
    start:  Joi.date().required(),
    allDay:  Joi.boolean().required(),
})


//create appointments
router.post('/add-appointment', async (req,res) => {
    console.log(req.body);
    // validaciones
    const { error } = appointmentValidate.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    const service = await Service.findOne({ _id: req.body.id_service});
    const patient = await Patient.findOne({ _id: req.body.id_patient});

    const appoFind = await Appointment.findOne({ patient: req.body.id_patient, service: req.body.id_service, start: req.body.start });
    if (appoFind) return res.status(400).json({ error: 'Registro Duplicado' });

    const appoitment = {
        patient: patient,
        service: service,
        start: req.body.start,
        allDay: req.body.allDay
    }

     const appo = Appointment(appoitment);
        appo.save().then((data) =>

          res.json(data.populate('service').populate('patient'))
        ).catch((error) => res.json({message: error}))
})

//get all appointments
router.post('/appointments',(req,res) => {

    Appointment.find().populate('service').populate('patient').
    then((data) =>  res.json(data)).catch((error) => res.json({message: error}))
})


//delete appointments
router.delete('/appointment/:id',(req,res) => {
    const {id} = req.params;
    Appointment
    .deleteOne({_id:id}).then((data) =>  res.json(data)).catch((error) => res.json({message: error}))
})




module.exports = router;