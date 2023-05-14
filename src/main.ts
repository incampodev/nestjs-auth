import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import config from './interfaces/config/configutation'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: Agregar direccion del front al cors
  app.enableCors({
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  // Activa el manejador de errores
  app.useGlobalPipes(new ValidationPipe())

  const port = config().port;
  await app.listen(port);
}

bootstrap();
