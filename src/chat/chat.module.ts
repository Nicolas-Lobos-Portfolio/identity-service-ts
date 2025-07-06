import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseModule } from '@shared/database/database.module';
import { CHAT_REPOSITORY } from './infrastructure/database/database.config';
import { ChatRepositoryServicePort } from './domain/chat.repository-service.port';
import { ChatServiceProviders } from './infrastructure/database/chat/chat.provider';
import { SaveMessagesUseCase } from './application/save-messages/save-messages.usecase';
import { WebSocketServiceAdapter } from './infrastructure/websocket/websocket-service.adapter';
import { ChatRepositoryServiceAdapter } from './infrastructure/database/chat/chat-repository-service.adapter';

@Module({
  imports: [
    DatabaseModule.forRootAsync({
      name: CHAT_REPOSITORY,
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        ...configService.get('database.chat'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    SaveMessagesUseCase,
    WebSocketServiceAdapter,
    ChatRepositoryServiceAdapter,
    {
      provide: ChatRepositoryServicePort,
      useExisting: ChatRepositoryServiceAdapter,
    },
    ...ChatServiceProviders,
  ],
  exports: [],
  controllers: [],
})
export class ChatModule {}
