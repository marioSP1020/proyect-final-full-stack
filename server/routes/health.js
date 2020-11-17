import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/health', (request, response) => {
  return response.send('OK');
});

export default healthRouter;
