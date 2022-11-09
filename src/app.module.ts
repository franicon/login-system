import { Config } from './app/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './app/resource/auth/auth.module';

@Module({
  imports: [
    //Config
    ConfigModule.forRoot({
      load: [Config],
      isGlobal: true,
      expandVariables: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
