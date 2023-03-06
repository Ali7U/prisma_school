import express from "express";
import validate from "../middleware/validate";
import {
  addTeacher,
  getAllTeachers,
  getTeacherById,
} from "../controller/teacher.controller";
// import { Logintype, Registertype } from "../zod.schema/zod.user";

let route = express.Router();

route.post("/", addTeacher);
route.get("/", getAllTeachers);
route.get("/", getTeacherById);

export default route;
