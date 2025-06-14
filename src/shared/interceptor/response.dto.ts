export type ErrorDto = {
  message: string;
  trace?: string;
};

export class ResponseDto<T> {
  data: T | null;
  status: number | null;
  success: boolean;
  error?: ErrorDto;

  constructor(data: T | null, status?: number | null, error?: ErrorDto) {
    this.data = data;
    this.status = status;
    this.success = !error;
    this.error = error;
  }

  static success<T>(data: T, status = 200): ResponseDto<T> {
    return new ResponseDto<T>(data, status);
  }

  static error<T>(
    message: string,
    status = 400,
    trace?: string,
  ): ResponseDto<T> {
    return new ResponseDto<T>(null, status, { message, trace });
  }
  static internalError<T>(
    message: string,
    status = 500,
    trace?: string,
  ): ResponseDto<T> {
    return new ResponseDto<T>(null, status, { message, trace });
  }
}
