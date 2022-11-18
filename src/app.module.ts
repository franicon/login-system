import { Config } from './app/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigSchema } from './app/config/schema';
import { AuthModule } from './app/resource/auth/auth.module';
import { MongooseConfigService } from './app/provider/mongodb';

@Module({
  imports: [
    //Config
    ConfigModule.forRoot({
      load: [Config],
      isGlobal: true,
      expandVariables: true,
      validationSchema: ConfigSchema,
    }),

    //MongoDB
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),

    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
