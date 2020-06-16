const { Router } = require('express');

const storeRouter = require('../../store/routes/store.routes');

const routes = Router();

routes.use('/store', storeRouter);

module.exports = routes;
