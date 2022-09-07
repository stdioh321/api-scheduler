function config() {
  return {
    port: parseInt(process.env.PORT) || 3000,
    serviceName: process.env.npm_package_name,
    nodeEnv: process.env.NODE_ENV,
    dbs: {
      scheduler: {
        url: process.env.DB_SCHEDULER_URL,
      },
    },
  };
}
export function envFile(): string {
  const nodeEnv = config().nodeEnv ? `.${config().nodeEnv}` : '';
  return `.env${nodeEnv}`;
}

export default config;
