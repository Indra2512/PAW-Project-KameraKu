const express = require('express');
const path = require('path');
const config = require('./config');
const loggerMiddleware = require('./middlewares/loggerMiddleware'); // <-- Pastikan baris ini ada di atas!
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

const app = express();

// Setting View Engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parsing JSON & urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Memasang Middleware Logger
app.use(loggerMiddleware);

// Routing
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

// Jalankan Server
app.listen(config.port, () => {
  console.log(`Server KameraKu berjalan pada http://localhost:${config.port}`);
});