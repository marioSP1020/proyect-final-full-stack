import express from 'express';
import { listRatingPhotos } from '../controllers/ratingphotos.js';
//import secureRoute from '../midlewares/secure-route.js';

const ratingPhotosRouter = express.Router();

ratingPhotosRouter.get('/ratingphotos', listRatingPhotos);
//gamesRouter.post('/game/new', secureRoute, createGame);

export default ratingPhotosRouter;
;