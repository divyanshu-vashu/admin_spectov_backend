const express = require('express');
const router = express.Router();
const { User } = require('../model/course'); 
const Joi = require("joi");

router.put('/add', async (req, res) => {
    try {
        const course= await User.findOne({ courseName: req.body.courseName });
        if (course) {
           course.videoLink[req.body.day]=req.body.vl;
           course.materialLink[req.body.day]=req.body.ml
            await course.save();
            return res.json(course); 
        } else {
            return res.status(404).send('Wrong Course Name.'); 
        }
    } catch (err) {
        return res.status(500).send('Server error'); 
    }
});



module.exports = router;