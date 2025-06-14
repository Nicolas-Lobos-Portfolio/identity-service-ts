export interface F1HttpServicePort {
  getDrivers(): Promise<any>;

  getTeams(): Promise<any>;
}

export const F1HttpServicePort = Symbol('F1HttpServicePort');
