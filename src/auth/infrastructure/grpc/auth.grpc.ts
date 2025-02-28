// import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateCredentialUseCase } from '../../application/create-credential';
import { Inject } from '@nestjs/common';
import { IAuthServiceServer } from './proto/generated/auth_grpc_pb';

export class AuthService implements IAuthServiceServer {
  constructor(
    @Inject(CreateCredentialUseCase)
    private readonly createCredentialUseCase: CreateCredentialUseCase,
  ) {}
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
