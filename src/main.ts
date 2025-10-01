import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule , DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allow specific domain
    methods: 'GET,POST,PUT,PATCH,DELETE', // Allow HTTP methods
    credentials: true, // Allow cookies to be sent
    allowedHeaders: 'Content-Type, Authorization', // Permitted request headers
  });

  const config = new DocumentBuilder()
    .setTitle('Inventory Management System Example')
    .setDescription('The inventory management system API')
    .setVersion('1.0')
    .addTag('Inventory management system')
    .addBearerAuth( // this is going to add authorize button in swagger ui
      {
      type : 'http',
      scheme : 'bearer',
      bearerFormat : 'JWT'
    },
    'access-token'
    )
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app , config);
  SwaggerModule.setup('api', app , documentFactory);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
