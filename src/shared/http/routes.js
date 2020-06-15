const { Router } = require('express');

const storeRouter = require('../../routes/store.routes');

const routes = Router();

routes.use('/store', storeRouter);

module.exports = routes;
