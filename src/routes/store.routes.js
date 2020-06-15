const { Router } = require('express');

const StoreController = require('../controllers/store.controller');

const storeRouter = Router();
const storeController = new StoreController();

storeRouter.post('/', storeController.create);
storeRouter.get('/:id', storeController.index);
storeRouter.get('/', storeController.show);
storeRouter.patch('/:id', storeController.update);
storeRouter.delete('/', storeController.destroy);

module.exports = storeRouter;
