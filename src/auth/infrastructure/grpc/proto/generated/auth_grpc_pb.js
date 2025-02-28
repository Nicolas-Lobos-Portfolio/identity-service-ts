// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');

function serialize_auth_CreateCredentialRequest(arg) {
  if (!(arg instanceof auth_pb.CreateCredentialRequest)) {
    throw new Error('Expected argument of type auth.CreateCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CreateCredentialRequest(buffer_arg) {
  return auth_pb.CreateCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_Response(arg) {
  if (!(arg instanceof auth_pb.Response)) {
    throw new Error('Expected argument of type auth.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Response(buffer_arg) {
  return auth_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  createCredential: {
    path: '/auth.AuthService/CreateCredential',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.CreateCredentialRequest,
    responseType: auth_pb.Response,
    requestSerialize: serialize_auth_CreateCredentialRequest,
    requestDeserialize: deserialize_auth_CreateCredentialRequest,
    responseSerialize: serialize_auth_Response,
    responseDeserialize: deserialize_auth_Response,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService, 'AuthService');
