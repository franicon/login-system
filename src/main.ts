import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //  CORS
  app.enableCors({
    allowedHeaders: [],
    origin: ['http://localhost:5173'],
    credentials: true,
  });

  // Listen to port
  await app.listen(app.get(ConfigService).get('PORT') || 40000);
}
bootstrap();
