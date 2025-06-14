export const httpConfigProvider = {
  client: {
    personal: {
      url: 'https://pokeapi.co/api/v2/', //'http://api.personal.com',
      timeout: 2000,
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer my-apikey`,
      },
      provider: 'PERSONAL_HTTP_SERVICE_PORT',
    },
    adminAndFinance: {
      url: 'https://pokeapi.co/api/v2/', //'http://api.personal.com',
      timeout: 2000,
      header: {
        'Content-Type': 'application/json',
        Authorization: `Bearer my-apikey`,
      },
      provider: 'ADMIN_AND_FINANCE_HTTP_SERVICE_PORT',
    },
  },
};
