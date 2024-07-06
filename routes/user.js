const router = require("express").Router();
const { User, validate } = require("../model/course");
const bcrypt = require("bcrypt");
  
router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ courseName: req.body.courseName });
		if (user)
			return res
				.status(409)
				.send({ message: "Course with this name already exist" });
		await new User({ ...req.body}).save();

		res.status(201).send({ message: "Course created successfully" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
}); 

module.exports = router;