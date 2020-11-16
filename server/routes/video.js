import express from 'express';
import { listVideos } from '../controllers/video.js';
//import secureRoute from '../midlewares/secure-route.js';

const videosRouter = express.Router();

videosRouter.get('/videos', listVideos);
//gamesRouter.post('/game/new', secureRoute, createGame);

export default videosRouter;