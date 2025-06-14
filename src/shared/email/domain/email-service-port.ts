export interface EmailServicePort {
  sendMail(to: string, code: string): Promise<void>;
}

export const EmailServicePort = Symbol('EmailServicePort');
