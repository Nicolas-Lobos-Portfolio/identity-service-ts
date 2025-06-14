export interface ErrorHandler {
  setNext(handler: ErrorHandler): ErrorHandler;
  handle(exception: any): { handled: boolean; status: number; message: string };
}
