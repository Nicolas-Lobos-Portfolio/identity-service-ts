import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { ChatEntity } from './chat.entity';
import { chatRepository } from './chat.provider';
import { ChatRepositoryServicePort } from '@chat/domain/chat.repository-service.port';

export class ChatRepositoryServiceAdapter implements ChatRepositoryServicePort {
  constructor(
    @Inject(chatRepository)
    private readonly chatRepository: Repository<ChatEntity>,
  ) {}
  findById(id: string): Promise<any> {
    return this.chatRepository.findOne({ where: { id } });
  }
  findAll(): Promise<any[]> {
    return this.chatRepository.find();
  }
  findBySenderId(senderId: string): Promise<any[]> {
    return this.chatRepository.find({ where: { senderId } });
  }
  findByReceiverId(receiverId: string): Promise<any[]> {
    return this.chatRepository.find({ where: { receiverId } });
  }
  deleteById(id: string): Promise<void> {
    return this.chatRepository.delete(id).then(() => {
      return;
    });
  }
  update(chatEntity: any): Promise<any> {
    return this.chatRepository.save(chatEntity);
  }
  count(): Promise<number> {
    return this.chatRepository.count();
  }
  findBySenderAndReceiver(
    senderId: string,
    receiverId: string,
  ): Promise<any[]> {
    return this.chatRepository.find({
      where: { senderId, receiverId },
    });
  }
  save(chatEntity: ChatEntity) {
    return this.chatRepository.save(chatEntity);
  }
}
