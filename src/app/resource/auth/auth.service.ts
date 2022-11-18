import { UserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { MongoService } from '../../provider/mongodb/_.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private mongo: MongoService, private jwtService: JwtService) {}

  async signUp(body: UserDto): Promise<void> {
    if (!(await this.mongo.getUser(body.username))) {
      await this.mongo.createUser({ ...body });
    } else {
      throw new NotFoundException('User name already exits');
    }
  }

  async signIn({ username, password }: UserDto): Promise<{ accessToken }> {
    const user = await this.mongo.getUser(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please Check Your Credentials');
    }
  }
}
