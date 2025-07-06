import { DataSource } from 'typeorm';
import { CHAT_REPOSITORY } from '../database.config';
import { ChatEntity } from './chat.entity';

export const chatRepository = 'chatRepository';

export const ChatServiceProviders = [
  {
    provide: chatRepository,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ChatEntity),
    inject: [CHAT_REPOSITORY],
  },
];
