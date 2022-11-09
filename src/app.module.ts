import { Config } from './app/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigSchema } from './app/config/schema';
import { AuthModule } from './app/resource/auth/auth.module';

@Module({
  imports: [
    //Config
    ConfigModule.forRoot({
      load: [Config],
      isGlobal: true,
      expandVariables: true,
      validationSchema: ConfigSchema,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
