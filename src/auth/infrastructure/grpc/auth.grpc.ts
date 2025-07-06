// import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateCredentialUseCase } from '../../application/create-credential';
import { Controller } from '@nestjs/common';
import { IAuthServiceServer } from './proto/generated/auth_grpc_pb';
import { SendMailCodeUseCase } from '../../../auth/application/send-code-mail';
import { CheckCodeUseCase } from '../../../auth/application/check-code';
@Controller('GRPCauth')
export class AuthGrpcController implements IAuthServiceServer {
  constructor(
    private readonly createCredentialUseCase: CreateCredentialUseCase,
    private readonly sendEmailCodeUseCase: SendMailCodeUseCase,
    private readonly checkCodeUseCase: CheckCodeUseCase,
  ) {}

  @GrpcMethod('AuthService', 'SendMailCode')
  async sendMailCode(
    data: string,
    // metadata: Metadata,
    // call: ServerUnaryCall<any, any>,
  ): Promise<any> {
    console.log('LLEGANDO AL GRPC SERVER', JSON.stringify(data));

    return { message: await this.sendEmailCodeUseCase.execute(data) };
  }

  @GrpcMethod('AuthService', 'CheckCode')
  async checkCode(
    data: string,
    // metadata: Metadata,
    // call: ServerUnaryCall<any, any>,
  ): Promise<any> {
    console.log('LLEGANDO AL GRPC SERVER', JSON.stringify(data));

    return { message: await this.checkCodeUseCase.execute(data) };
  }

  @GrpcMethod('AuthService', 'CreateCredential')
  async createCredential(
    data: string,
    // metadata: Metadata,
    // call: ServerUnaryCall<any, any>,
  ): Promise<any> {
    console.log('LLEGANDO AL GRPC SERVER', JSON.stringify(data));

    return { message: await this.createCredentialUseCase.execute(data) };
  }
}
