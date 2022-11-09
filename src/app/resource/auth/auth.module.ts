import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongoModule } from '../../provider/mongodb/_.module';

@Module({
  imports: [MongoModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
