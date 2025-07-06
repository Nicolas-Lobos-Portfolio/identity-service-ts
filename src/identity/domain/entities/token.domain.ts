import { getUUID } from '@shared/utils/get-uuid.utils';

export class Token {
  readonly id: string;
  readonly token: string;
  readonly createdAt: Date;
  isActive: boolean;

  constructor(token: string, createdAt?: Date, isActive = true, id?: string) {
    this.id = id ?? getUUID();
    this.token = token;
    this.createdAt = createdAt ?? new Date();
    this.isActive = isActive;
  }

  deactivate() {
    this.isActive = false;
  }
}
