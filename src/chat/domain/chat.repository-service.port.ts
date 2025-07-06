export interface ChatRepositoryServicePort {
  save(chatEntity: any): Promise<any>;
  findById(id: string): Promise<any>;
  findAll(): Promise<any[]>;
  findBySenderId(senderId: string): Promise<any[]>;
  findByReceiverId(receiverId: string): Promise<any[]>;
  deleteById(id: string): Promise<void>;
  update(chatEntity: any): Promise<any>;
  count(): Promise<number>;
  findBySenderAndReceiver(senderId: string, receiverId: string): Promise<any[]>;
}

export const ChatRepositoryServicePort = Symbol('ChatRepositoryServicePort');
