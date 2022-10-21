//export a function to map env variables
export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.DB,
  port: process.env.PORT || 3002,
});
