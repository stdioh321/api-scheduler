export default () => ({
  port: parseInt(process.env.PORT) || 3000,
});

export function envFile(): string {
  const nodeEnv = process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : '';
  return `.env${nodeEnv}`;
}
