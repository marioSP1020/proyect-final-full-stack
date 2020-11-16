import express from 'express';
import dotenv from 'dotenv';
import logger from './lib/logger.js'
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

//MIDDLEWARES
import loggerMiddleware from './midlewares/logger-middleware.js';
import jsonResponseMiddleware from './midlewares/json-response-middleware.js';

//ROUTERS
import healthRouter from './routes/health.js';
import userRouter from './routes/user.js';

const server = express();

const PORT = process.env.PORT || 5000;

server.use(loggerMiddleware);
server.use(jsonResponseMiddleware);
server.use(bodyParser.json());
server.use(cors());

//ROUTES
server.use(healthRouter);
server.use(userRouter);


server.listen(PORT, () => logger.info(`Server starting on port ${PORT} 📡`));
