import express from "express";
import validate from "../middleware/validate";
import {
  getAllStudents,
  getStudentById,
  addStudent,
} from "../controller/student.controller";
// import { Logintype, Registertype } from "../zod.schema/zod.user";

let route = express.Router();

route.post("/", addStudent);
route.get("/", getStudentById);
route.get("/", getAllStudents);

export default route;
