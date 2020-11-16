import express from 'express';
import { listPhotos } from '../controllers/photo.js';
//import secureRoute from '../midlewares/secure-route.js';

const photosRouter = express.Router();

photosRouter.get('/photos', listPhotos);
//gamesRouter.post('/game/new', secureRoute, createGame);

export default photosRouter;