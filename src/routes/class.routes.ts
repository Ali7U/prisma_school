import express  from "express";
import validate from "../middleware/validate";
import {addStudentClass, getAllStudentsClass, getStudentClass} from '../controller/class.controller'
// import { Logintype, Registertype } from "../zod.schema/zod.user";

let route = express.Router();

route.post("/", addStudentClass);
route.get("/", getAllStudentsClass);
route.get('/', getStudentClass)

export default route