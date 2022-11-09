import { Module } from '@nestjs/common';
import { MongoService } from './_.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongoService],
  providers: [MongoService],
})
export class MongoModule {}
