import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //global validation enforce validation in all modules
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  //   forbidNonWhitelisted: true,
  // }))
  
  //API documentation
  const isProduction = false; // Depois realiazr o teste

  if (!isProduction) {
    const config = new DocumentBuilder()
      .setTitle('Exemplo de API')
      .setDescription('A documentação da API para o meu projeto NestJS')
      .setVersion('1.0')
      .addTag('users') // Opcional: Adiciona uma tag para agrupar endpoints
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); 
  }
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
