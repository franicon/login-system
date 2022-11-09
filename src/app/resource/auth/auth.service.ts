import { User } from './dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signUp({ username, password }: User) {
    return { username, password };
  }
}
