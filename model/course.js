const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    videoLink: { type: [String], default: new Array(65).fill("#") },
    materialLink: { type: [String], default: new Array(65).fill("#") },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, 'mysecretkey', {
        expiresIn: "7d",
    });
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        courseName: Joi.string().required().label("Course Name"),
        videoLink: Joi.array().items(Joi.string().uri()).default(new Array(65).fill("#")),
        materialLink: Joi.array().items(Joi.string().uri()).default(new Array(65).fill("#")),
    });
    return schema.validate(data);
};

module.exports = { User, validate };
