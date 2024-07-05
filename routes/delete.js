const express = require('express');
const router = express.Router();
const { User } = require('../model/course'); 
const Joi = require("joi");

router.put('/delete/:courseName/:day', async (req, res) => {
    try {
        const course= await User.findOne({ courseName: req.params.courseName });
        if (course) {
           course.videoLink[req.params.day]="#";
           course.materialLink[req.params.day]="#";
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