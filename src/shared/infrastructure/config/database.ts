export default () => ({
  database: {
    f1: {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT || 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_F1_NAME,
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    },
    identity: {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT || 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_IDENTITY_NAME,
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    },
    chat: {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT || 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_CHAT_NAME,
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    },
  },
});
