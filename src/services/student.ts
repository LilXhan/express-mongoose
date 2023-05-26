import { Student } from "../models";
import IStudent from "../types/student";

class StudentService {
  public async get(): Promise<object> {
    try {
      return await Student.find();
    } catch (error) {
      throw error;
    };
  };

  public async create(student:  IStudent): Promise<object> {
    try {
      return await Student.create({...student});
    } catch (error) {
      throw error;  
    };
  };

  public async update(id: string, body: IStudent) {
    try {
      return await Student.findByIdAndUpdate(id, {
        ...body
      });
    } catch (error) {
      throw error;
    };
  };

  public async delete(id: string) {
    try {
      return await Student.findByIdAndDelete(id);  
    } catch (error) {
      throw error;
    };
  };
};


export default StudentService;