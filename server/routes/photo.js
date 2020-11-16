import express from 'express';
import { listPhotos, createPhoto } from '../controllers/photo.js';
import secureRoute from '../midlewares/secure-route.js';

const photosRouter = express.Router();

photosRouter.get('/photos', listPhotos);
photosRouter.post('/photo/new', secureRoute, createPhoto);

export default photosRouter;