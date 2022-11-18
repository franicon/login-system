import { UserDto } from './dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: UserDto): Promise<void> {
    return this.authService.signUp(body);
  }

  @Post('signin')
  signin(@Body() body: UserDto): Promise<{ accessToken }> {
    return this.authService.signIn(body);
  }
}
