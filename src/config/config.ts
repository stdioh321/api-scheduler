function config() {
  return {
    port: parseInt(process.env.PORT) || 3000,
    serviceName: process.env.npm_package_name,
    nodeEnv: process.env.NODE_ENV,
    dbs: {
      scheduler: {
        url: process.env.DB_SCHEDULER_URL,
        name: process.env.DB_SCHEDULER_NAME,
      },
    },
    agenda: {
      name01: process.env.AGENDA_NAME_01 || 'name_01',
    },
  };
}
export function envFile(): string {
  const nodeEnv = config().nodeEnv ? `.${config().nodeEnv}` : '';
  return `.env${nodeEnv}`;
}

export default config;
