export class NotFoundError extends Error {
  constructor(message) {
    super((message = 'Not Found: ' + message));
    this.name = 'NotFoundError';
  }
}
