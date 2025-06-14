export default () => ({
  mmsClientHttp: {
    url: process.env['MMS_URL'],
    timeout: process.env['MMS_TIMEOUT'],
    header: {
      'Content-Type': {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env['MMS_TOKEN']}`,
      },
    },
  },
});
