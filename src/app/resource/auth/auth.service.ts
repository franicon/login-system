import { User } from './dto';
import { Injectable } from '@nestjs/common';
import { MongoService } from '../../provider/mongodb/_.service';

@Injectable()
export class AuthService {
  constructor(private mongo: MongoService) {}
  async signUp(body: User) {
    await this.mongo.createUser(body.email);
  }
}
