// import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GrpcMethod } from '@nestjs/microservices';
// import { createCredentialHttpDto } from '../http/dtos/create-creadential.http.dto';
// import { Credential } from '../../domain/credential';
import { CreateCredentialUseCase } from '../../application/create-credential';
import { Inject } from '@nestjs/common';
import { AuthServiceController } from './proto/generated/auth_pb';

export class AuthService implements AuthServiceController {
  constructor(
    @Inject(CreateCredentialUseCase)
    private readonly createCredentialUseCase: CreateCredentialUseCase,
  ) {}
  @GrpcMethod('AuthService', 'CreateCredential')
  async CreateCredential(
    data: string,
    // metadata: Metadata,
    // call: ServerUnaryCall<any, any>,
  ): Promise<any> {
    console.log('LLEGANDO AL GRPC SERVER', JSON.stringify(data));

    return { message: await this.createCredentialUseCase.execute(data) };
  }
}

//  npm install -g grpc-tools

//  grpc_tools_node_protoc --proto_path=./src/auth/infrastructure/grpc/proto/definition \
//                  --js_out=import_style=commonjs,binary:./src/auth/infrastructure/grpc/proto/generated \
//                  --grpc_out=grpc_js:./src/auth/infrastructure/grpc/proto/generated \
//                  ./src/auth/infrastructure/grpc/proto/definition/auth.proto
