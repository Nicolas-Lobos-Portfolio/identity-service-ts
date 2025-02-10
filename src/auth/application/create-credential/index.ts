import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCredentialUseCase {
  constructor() {}

  execute(data) {
    console.log('llegando al caso de uso', data);
    return JSON.stringify(data);
  }
}
