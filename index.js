const express =require('express')
const app=express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/add");
const deleteRoutes=require("./routes/delete");
const allRoutes=require('./routes/all')
connection();
app.use(express.json());
app.use(cors());


app.use("/api/courses", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", deleteRoutes);
app.use("/api", allRoutes);

port=4000;
app.listen(port,console.log("Server Started"))