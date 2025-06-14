// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc';
import * as auth_pb from './auth_pb';

interface IAuthServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendMailCode: IAuthServiceService_ISendMailCode;
  checkCode: IAuthServiceService_ICheckCode;
  createCredential: IAuthServiceService_ICreateCredential;
}

interface IAuthServiceService_ISendMailCode
  extends grpc.MethodDefinition<auth_pb.SendMailCodeRequest, auth_pb.Response> {
  path: '/auth.AuthService/SendMailCode';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.SendMailCodeRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.SendMailCodeRequest>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
}
interface IAuthServiceService_ICheckCode
  extends grpc.MethodDefinition<auth_pb.CheckCodeRequest, auth_pb.Response> {
  path: '/auth.AuthService/CheckCode';
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<auth_pb.CheckCodeRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.CheckCodeRequest>;
  responseSerialize: grpc.serialize<auth_pb.Response>;
  responseDeserialize: grpc.deserialize<auth_pb.Response>;
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
  sendMailCode: grpc.handleUnaryCall<
    auth_pb.SendMailCodeRequest,
    auth_pb.Response
  >;
  checkCode: grpc.handleUnaryCall<auth_pb.CheckCodeRequest, auth_pb.Response>;
  createCredential: grpc.handleUnaryCall<
    auth_pb.CreateCredentialRequest,
    auth_pb.Response
  >;
}

export interface IAuthServiceClient {
  sendMailCode(
    request: auth_pb.SendMailCodeRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  sendMailCode(
    request: auth_pb.SendMailCodeRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  sendMailCode(
    request: auth_pb.SendMailCodeRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  checkCode(
    request: auth_pb.CheckCodeRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  checkCode(
    request: auth_pb.CheckCodeRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  checkCode(
    request: auth_pb.CheckCodeRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
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
  public sendMailCode(
    request: auth_pb.SendMailCodeRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  public sendMailCode(
    request: auth_pb.SendMailCodeRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  public sendMailCode(
    request: auth_pb.SendMailCodeRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  public checkCode(
    request: auth_pb.CheckCodeRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  public checkCode(
    request: auth_pb.CheckCodeRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
  public checkCode(
    request: auth_pb.CheckCodeRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: auth_pb.Response,
    ) => void,
  ): grpc.ClientUnaryCall;
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
