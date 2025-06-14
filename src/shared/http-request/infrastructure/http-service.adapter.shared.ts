import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpServicePort } from '../domain/http-service-port.shared';

@Injectable()
export class HttpServiceAdapter implements HttpServicePort {
  private readonly httpService: AxiosInstance;

  constructor(
    private readonly baseURL: string,
    private readonly timeout: number,
    private readonly headers,
  ) {
    this.httpService = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: this.headers,
    });

    this.httpService.interceptors.request.use((config: any) => {
      console.log('Request URL:', config.baseURL + config.url);
      return config;
    });
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const response = await this.httpService.get<T>(endpoint, { params });
    return response.data;
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await this.httpService.post<T>(endpoint, data);
    return response.data;
  }
  async put<T>(endpoint: string, data: any, config?: any): Promise<T> {
    const response = await this.httpService.put<T>(endpoint, data, config);
    return response.data;
  }

  async delete<T>(endpoint: string, config?: any): Promise<T> {
    const response = await this.httpService.delete<T>(endpoint, config);
    return response.data;
  }
}
