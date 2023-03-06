import express, { Application } from "express";
const app: Application = express();
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
import student from "./routes/students.routes";
import profile from "./routes/profile.routes";
import classR from "./routes/class.routes";
import teacher from "./routes/teachers.routes";

dotenv.config();
let PORT = process.env.PORT || 3003;

app.use(express.json());
connectDB();

app.use("/student", student);
app.use("/class", classR);
app.use("/student/profile", profile);
app.use("/teacher", teacher);
app.use("/teacher/student", teacher);


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
