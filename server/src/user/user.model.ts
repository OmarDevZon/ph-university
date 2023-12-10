import mongoose, { Types } from 'mongoose';
import { Schema } from 'mongoose';
import User from './user.interface';
import config from '../config';
import bcrypt from 'bcrypt';

const UserSchema = new Schema<User>(
  {
    id: {
      type: String,
    },
    password: {
      type: String,
      default: config.DEFAULT_PASSWORD,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    user: Types.ObjectId,
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this?.password,
    Number(config.BCRYPT_ROUNDS),
  );
  next();
});

const user = mongoose.model<User>('User', UserSchema);
export default user;

