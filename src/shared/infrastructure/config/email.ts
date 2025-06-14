export default () => ({
  // smtp api
  brevoApiKey: process.env.SMTP_API_KEY,
  // smtp config
  smtpUser: process.env.SMTP_USER,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpSecure: process.env.SMTP_SECURE,
  smtpFrom: process.env.SMTP_FROM,
});
