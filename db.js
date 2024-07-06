const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect('mongodb+srv://codesharecode:BnLVp1eZmXIFVpV8@cluster0.7z8gmsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};