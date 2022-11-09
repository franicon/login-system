import { User } from './dto';
import { AuthService } from './auth.service';
import { Body, Controller, Get } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('signup')
  signup(@Body() body: User) {
    return this.authService.signUp(body);
  }
}
