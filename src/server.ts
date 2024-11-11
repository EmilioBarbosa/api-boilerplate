import Fastify, { FastifyInstance } from 'fastify';
import envs from './config/envs';

const fastify: FastifyInstance = Fastify({
  logger: true,
});

fastify.get('/healthcheck', async function handler() {
  return { status: 'Ok' };
});

async function main() {
  try {
    await fastify.listen({ port: parseInt(envs.APP_PORT), host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
