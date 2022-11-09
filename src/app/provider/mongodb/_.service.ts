import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/_index';

@Injectable()
export class MongoService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async getUser(email: string) {
    return this.userModel.findOne({ email }).select('-_id email');
  }

  // SAVE OR CREATE
  async createUser(email: string) {
    if (!(await this.getUser(email))) {
      return await this.userModel.create({ email });
    }
  }
}
