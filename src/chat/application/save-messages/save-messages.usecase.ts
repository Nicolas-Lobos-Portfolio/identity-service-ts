import { Inject, Injectable } from '@nestjs/common';
import { ChatRepositoryServicePort } from '@chat/domain/chat.repository-service.port';
import { MessageDto } from './message.dto';

@Injectable()
export class SaveMessagesUseCase {
  constructor(
    @Inject(ChatRepositoryServicePort)
    private readonly chatRepositoryServicePort: ChatRepositoryServicePort,
  ) {}

  async execute(message: MessageDto): Promise<void> {
    if (!message) {
      throw new Error('No messages to save');
    }

    const savedMessages = await this.chatRepositoryServicePort.save(message);
    if (!savedMessages) {
      throw new Error('Failed to save messages');
    }
  }
}
