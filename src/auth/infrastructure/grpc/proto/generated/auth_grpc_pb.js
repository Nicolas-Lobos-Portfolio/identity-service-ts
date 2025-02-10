// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');

function serialize_auth_Request(arg) {
  if (!(arg instanceof auth_pb.Request)) {
    throw new Error('Expected argument of type auth.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Request(buffer_arg) {
  return auth_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
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
    requestType: auth_pb.Request,
    responseType: auth_pb.Response,
    requestSerialize: serialize_auth_Request,
    requestDeserialize: deserialize_auth_Request,
    responseSerialize: serialize_auth_Response,
    responseDeserialize: deserialize_auth_Response,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
