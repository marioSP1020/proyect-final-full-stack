import express, { request } from 'express';

const healthRouter = express.Router();

healthRouter.get('/health', (request, response) => {
  return response.send('OK');
});

export default healthRouter;