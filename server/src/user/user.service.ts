import { StudentSchema } from '../students/students.model';
import IUser from './user.interface';
import UserSchema from './user.model';
// import { studentSchema } from '../students/students.model';

export const createUserService = async (student: IUser) => {
  const newUser: Partial<IUser> = {};

  newUser.id = '12324';
  newUser.role = 'student';

  const result = await UserSchema.create(newUser);

  // if (Object.keys(result).length) {
  //   student.id = result.id;
  //   student.user = result._id;
  //   const newStudent = await StudentSchema.create(student);
  //   return newStudent;
  // }
};

export const getAllUserService = async () => {
  const result = await UserSchema.find();
  return result;
};

export const getUserByIdService = async (id: string) => {
  const result = await UserSchema.findOne({ id });
  return result;
};

export const deleteUserService = async (id: string) => {
  const result = await UserSchema.updateOne({ _id: id }, { isDeleted: true });
  return result;
};
