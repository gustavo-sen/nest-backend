import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const isProduction = false; // Depois realiazr o teste

  if (!isProduction) {
    const config = new DocumentBuilder()
      .setTitle('Exemplo de API')
      .setDescription('A documentação da API para o meu projeto NestJS')
      .setVersion('1.0')
      .addTag('users') // Opcional: Adiciona uma tag para agrupar endpoints
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // 'api' é a URL onde a UI do Swagger será exibida
  }
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
