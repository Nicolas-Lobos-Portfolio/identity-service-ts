// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';

export class SendMailCodeRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): SendMailCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMailCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendMailCodeRequest,
  ): SendMailCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SendMailCodeRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendMailCodeRequest;
  static deserializeBinaryFromReader(
    message: SendMailCodeRequest,
    reader: jspb.BinaryReader,
  ): SendMailCodeRequest;
}

export namespace SendMailCodeRequest {
  export type AsObject = {
    email: string;
  };
}

export class CheckCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): CheckCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCodeRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CheckCodeRequest,
  ): CheckCodeRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CheckCodeRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CheckCodeRequest;
  static deserializeBinaryFromReader(
    message: CheckCodeRequest,
    reader: jspb.BinaryReader,
  ): CheckCodeRequest;
}

export namespace CheckCodeRequest {
  export type AsObject = {
    code: string;
  };
}

export class CreateCredentialRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CreateCredentialRequest;
  getPassword(): string;
  setPassword(value: string): CreateCredentialRequest;

  hasAuthprovider(): boolean;
  clearAuthprovider(): void;
  getAuthprovider(): string | undefined;
  setAuthprovider(value: string): CreateCredentialRequest;

  hasExternalid(): boolean;
  clearExternalid(): void;
  getExternalid(): string | undefined;
  setExternalid(value: string): CreateCredentialRequest;
  getFirstname(): string;
  setFirstname(value: string): CreateCredentialRequest;
  getLastname(): string;
  setLastname(value: string): CreateCredentialRequest;
  getEmail(): string;
  setEmail(value: string): CreateCredentialRequest;
  getPhone(): string;
  setPhone(value: string): CreateCredentialRequest;
  getBirthday(): string;
  setBirthday(value: string): CreateCredentialRequest;
  getDevicename(): string;
  setDevicename(value: string): CreateCredentialRequest;
  getDevicetype(): string;
  setDevicetype(value: string): CreateCredentialRequest;
  getOs(): string;
  setOs(value: string): CreateCredentialRequest;
  getOsversion(): string;
  setOsversion(value: string): CreateCredentialRequest;
  getIpaddress(): string;
  setIpaddress(value: string): CreateCredentialRequest;
  getUseragent(): string;
  setUseragent(value: string): CreateCredentialRequest;

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
    username: string;
    password: string;
    authprovider?: string;
    externalid?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    birthday: string;
    devicename: string;
    devicetype: string;
    os: string;
    osversion: string;
    ipaddress: string;
    useragent: string;
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
