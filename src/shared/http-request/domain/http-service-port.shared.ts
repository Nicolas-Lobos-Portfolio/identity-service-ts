export interface HttpServicePort {
  get<T>(endpoint: string, config?: any): Promise<T>;
  post<T>(endpoint: string, data: any, config?: any): Promise<T>;
  put<T>(endpoint: string, data: any, config?: any): Promise<T>;
  delete<T>(endpoint: string, config?: any): Promise<T>;
}
export const HttpServicePort = Symbol('HttpServicePort');
