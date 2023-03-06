import prisma  from "../config/db";
import { Request, Response } from "express";

export const addStudentClass = async (req: Request, res: Response) => {
  try {
    await prisma.classroom.create({
      data: req.body,
    });
    res.json({ message: "classroom created" });
  } catch (error) {
    res.json({ message: error });
  }
};

export const getAllStudentsClass = async (req: Request, res: Response) => {
  try {
    let sClass = await prisma.classroom.findMany();

    res.json({ classroom: sClass });
  } catch (err) {
    console.log(err);
  }
};

export const getStudentClass = async (req: Request, res: Response) => {
  try {
    let classroom = await prisma.classroom.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.json({ classroom: classroom });
  } catch (error) {
    res.json({ message: error });
  }
};
