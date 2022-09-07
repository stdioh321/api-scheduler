function config() {
  return {
    port: parseInt(process.env.PORT) || 3000,
    serviceName: process.env.npm_package_name,
    nodeEnv: process.env.NODE_ENV,
  };
}
export function envFile(): string {
  const nodeEnv = config().nodeEnv ? `.${config().nodeEnv}` : '';
  return `.env${nodeEnv}`;
}

export default config;
