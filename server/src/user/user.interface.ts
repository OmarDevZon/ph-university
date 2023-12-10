import { Types } from 'mongoose';

interface IUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
  user: Types.ObjectId;
}

export default IUser;
