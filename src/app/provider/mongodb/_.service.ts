import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '../../resource/auth/dto';
import { User, UserDocument } from './schema/_index';

@Injectable()
export class MongoService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  // FIND ONE
  async getUser(username: string) {
    return this.userModel
      .findOne({ username })
      .select('-_id username password');
  }

  // SAVE OR CREATE
  async createUser({ username, password }: UserDto): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    if (!(await this.getUser(username))) {
      await this.userModel.create({ username, password: hash });
    }
  }
}
