import z from 'zod';

const envSchema = z.object({
  APP_PORT: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
