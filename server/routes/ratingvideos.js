import express from 'express';
import { listRatingVideos } from '../controllers/ratingvideos.js';
//import secureRoute from '../midlewares/secure-route.js';

const ratingVideosRouter = express.Router();

ratingVideosRouter.get('/ratingvideos', listRatingVideos);
//gamesRouter.post('/game/new', secureRoute, createGame);

export default ratingVideosRouter;
;