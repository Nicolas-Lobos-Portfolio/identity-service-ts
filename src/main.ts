import { join } from 'path';
import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.flushLogs();
  grpcServerUp(app);
  await httpServerUp(app);
}
bootstrap();

async function httpServerUp(app: INestApplication<any>) {
  const port = 3000;
  const config = new DocumentBuilder()
    .setTitle('Authentication service')
    .setDescription('The user can get Tokens here')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(port);
  console.log(`http server running on ${port} port`);
}

function grpcServerUp(app: INestApplication<any>) {
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
