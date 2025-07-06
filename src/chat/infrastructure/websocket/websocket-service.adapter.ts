import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Inject } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { MessageDto } from '@chat/application/save-messages/message.dto';
import { SaveMessagesUseCase } from '@chat/application/save-messages/save-messages.usecase';

@WebSocketGateway({
  namespace: 'chat',
})
export class WebSocketServiceAdapter
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;
  constructor(
    @Inject(SaveMessagesUseCase)
    private readonly saveMessagesUseCase: SaveMessagesUseCase,
  ) {}
  afterInit(server: Server) {
    this.server = server;
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  async emit(@MessageBody() data: string): Promise<void> {
    const { senderId, receiverId, content } = JSON.parse(data) as MessageDto;
    await this.saveMessagesUseCase.execute(JSON.parse(data));
    this.server.emit('sendToUser', {
      from: senderId,
      to: receiverId,
      content,
      timestamp: new Date().toISOString(),
    });
  }
}
