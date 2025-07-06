export interface EmailServicePort {
  send(to: string, code: string): Promise<void>;
}

export const EmailServicePort = Symbol('EmailServicePort');
