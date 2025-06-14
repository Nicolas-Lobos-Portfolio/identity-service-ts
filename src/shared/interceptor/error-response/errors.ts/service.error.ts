export class ServiceUnavailableError extends Error {
  constructor(message: string = 'Service Unavailable: ') {
    super(message);
    this.name = 'ServiceUnavailableError';
  }
}
