import { handler, listener } from './worker.ts';

addEventListener('fetch', listener);

async function handleRequest(event) {
  return handler(event);
}
