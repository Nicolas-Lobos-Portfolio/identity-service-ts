export interface LoggerServicePort {
  log(message: any, ...optionalParams: any[]): void;
  debug(message: any, ...optionalParams: any[]): void;
  error(message: any, ...optionalParams: any[]): void;
  warning(message: any, ...optionalParams: any[]): void;
}
export const LoggerServicePort = Symbol('LoggerServicePort');
