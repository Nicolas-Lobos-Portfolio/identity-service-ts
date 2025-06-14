export class UnauthorizedError extends Error {
  constructor(message: string = 'Unauthorized Error: ') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}
