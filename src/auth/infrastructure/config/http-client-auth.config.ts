export default () => ({
  httpClient: {
    industrial: process.env.URL_API_INDUSTRIAL,
    personal: process.env.URL_API_PERSONAL,
    prodAnimal: process.env.URL_API_PROD_ANIMAL,
    comercial: process.env.URL_API_COMERCIAL,
    adminAndFinance: process.env.URL_API_ADMIN_AND_FINANCE,
    admin: process.env.URL_API_ADMIN,
    f1: {
      url: process.env.API_URL_FORMULA_1,
      key: process.env.API_KEY_FORMULA_1,
    },
  },
});
