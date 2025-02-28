// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class CreateCredentialRequest extends jspb.Message {
  getBirthday(): string;
  setBirthday(value: string): CreateCredentialRequest;
  getPhone(): string;
  setPhone(value: string): CreateCredentialRequest;
  getEmail(): string;
  setEmail(value: string): CreateCredentialRequest;
  getPassword(): string;
  setPassword(value: string): CreateCredentialRequest;
  getUsername(): string;
  setUsername(value: string): CreateCredentialRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCredentialRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateCredentialRequest,
  ): CreateCredentialRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateCredentialRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateCredentialRequest;
  static deserializeBinaryFromReader(
    message: CreateCredentialRequest,
    reader: jspb.BinaryReader,
  ): CreateCredentialRequest;
}

export namespace CreateCredentialRequest {
  export type AsObject = {
    birthday: string;
    phone: string;
    email: string;
    password: string;
    username: string;
  };
}

export class Response extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Response,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(
    message: Response,
    reader: jspb.BinaryReader,
  ): Response;
}

export namespace Response {
  export type AsObject = {
    message: string;
  };
}
