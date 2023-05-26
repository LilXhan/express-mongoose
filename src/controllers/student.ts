import type { Request, Response } from 'express';
import StudentService from '../services/student';
import IStudent from '../types/student';

const studentService = new StudentService();

class StudentController {
  public async findAll(_req: Request, res: Response): Promise<void> {
    try {
      const students = await studentService.get();
      res.status(200).json({
        data: students
      });
    } catch (error) {
      res.status(400).json({
        err: error
      });
    };
  };

  public async store(req: Request, res: Response): Promise <void> {
    try {
      const { body } = req;
      const student = await studentService.create(body as IStudent);

      res.status(201).json({
        data: student
      });
    } catch (error) {
      res.status(400).json({
        err: error
      });
    };
  };

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { body } = req;

      const student = await studentService.update(id, body);
      res.status(200).json({
        status: 'OK',
        data: student
      });
    } catch (error) {
      res.status(400).json({
        err: error
      });
    };
  };

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const student = await studentService.delete(id);
      res.status(200).json({
        status: 'OK',
        data: student
      });
    } catch (error) {
      res.status(400).json({
        err: error
      });
    };
  };

};

export default StudentController;