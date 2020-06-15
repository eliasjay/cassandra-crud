const express = require('express');
const cors = require('cors');
const routes = require('./shared/http/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('server started'));
