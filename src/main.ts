import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "./pipes/validation.pipe";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('laptop online-store')
        .setDescription('REST API')
        .setVersion('1.0.0')
        .addTag('app')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs/laptop-online-store', app, document)

    app.enableCors();
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
