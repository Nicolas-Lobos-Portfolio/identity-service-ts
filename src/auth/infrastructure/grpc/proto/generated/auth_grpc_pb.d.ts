// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as auth_pb from './auth_pb';

interface IAuthServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCredential: IAuthServiceService_ICreateCredential;
}

interface IAuthServiceService_ICreateCredential
  extends grpc.MethodDefinition<
    auth_pb.CreateCredentialRequest,
    auth_pb.Response
  > {
  path: '/auth.AuthService/CreateCredential';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.CreateCredentialRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.CreateCredentialRequest>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
  createCredential: grpc.handleUnaryCall<
    auth_pb.CreateCredentialRequest,
    auth_pb.Response
  >;
}

export interface IAuthServiceClient {
  createCredential(
    request: auth_pb.CreateCredentialRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  createCredential(
    request: auth_pb.CreateCredentialRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  createCredential(
    request: auth_pb.CreateCredentialRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
}

export class AuthServiceClient
  extends grpc.Client
  implements IAuthServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object,
  );
  public createCredential(
    request: auth_pb.CreateCredentialRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  public createCredential(
    request: auth_pb.CreateCredentialRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  public createCredential(
    request: auth_pb.CreateCredentialRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
}
