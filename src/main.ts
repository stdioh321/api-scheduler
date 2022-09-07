import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  setupGlobals(app);

  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();

function setupGlobals(app: INestApplication) {
  app.setGlobalPrefix('api', {
    exclude: [],
  });
  app.useGlobalPipes(new ValidationPipe());
}
