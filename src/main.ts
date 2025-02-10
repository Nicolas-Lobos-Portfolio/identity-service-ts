import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'auth',
      protoPath: join(
        __dirname,
        'auth/infrastructure/grpc/proto/definition/auth.proto',
      ),
    },
  });

  app.startAllMicroservices();
  console.log('grpc server running on 50051 port');
}
bootstrap();

// const app = await NestFactory.create(AppModule);
// const config = new DocumentBuilder()
//   .setTitle('Authentication service')
//   .setDescription('The user can get Tokens here')
//   .setVersion('1.0')
//   .addTag('auth')
//   .build();
// const documentFactory = () => SwaggerModule.createDocument(app, config);
// SwaggerModule.setup('api', app, documentFactory);
// await app.listen(3000);
