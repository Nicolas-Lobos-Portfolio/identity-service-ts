export default () => ({
  f1ClientHttp: {
    url: process.env.API_URL_FORMULA_1,
    timeout: process.env.API_TIMEOUT,
    header: {
      'Content-Type': {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.API_KEY_FORMULA_1,
      },
    },
  },
});
