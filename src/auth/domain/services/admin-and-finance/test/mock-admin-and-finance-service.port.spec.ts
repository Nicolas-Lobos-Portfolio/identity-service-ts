import { AdminAndFinanceHttpServicePort } from '../admin-and-finance-service.port';

export const MockAdminAndFinanceServicePort: AdminAndFinanceHttpServicePort = {
  getAdminAndFinance: jest.fn(() => {
    const mockChannels: any[] = [defaultMockedChannel];
    return Promise.resolve(mockChannels);
  }),
  getAdminAndFinanceById: jest.fn(() => {
    const mockChannels: any[] = [defaultMockedChannel];
    return Promise.resolve(mockChannels);
  }),
  createAdminAndFinance: jest.fn(() => {
    const mockChannels: any[] = [defaultMockedChannel];
    return Promise.resolve(mockChannels);
  }),
  updateAdminAndFinance: jest.fn(() => {
    const mockChannels: any[] = [defaultMockedChannel];
    return Promise.resolve(mockChannels);
  }),
  deleteAdminAndFinance: jest.fn(() => {
    const mockChannels: any[] = [defaultMockedChannel];
    return Promise.resolve(mockChannels);
  }),
};

const defaultMockedChannel: any = {
  id: 'abcde-12345-fghij-67890',
  name: 'Mock',
  code: 'mck',
  url: 'http://mock.cl',
};
