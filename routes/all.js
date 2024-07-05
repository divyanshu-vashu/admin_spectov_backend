// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { User } = require('../model/course'); 

router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;