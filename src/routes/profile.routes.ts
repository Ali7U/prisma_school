import express from "express";
import validate from "../middleware/validate";
import {
  getProfileById,
  getProfiles,
  addProfile,
} from "../controller/profile.controller";
// import { Logintype, Registertype } from "../zod.schema/zod.user";

let route = express.Router();

route.post("/", addProfile);
route.get("/", getProfileById);
route.get("/", getProfiles);

export default route;
