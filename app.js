const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const indexRoutes = require('./routes/index');
const customerRoutes = require('./routes/customers');
const logRoutes = require('./routes/logs');
const searchRoutes = require('./routes/search');  // Voeg deze regel toe

app.use('/', indexRoutes);
app.use('/customer', customerRoutes);
app.use('/log', logRoutes);
app.use('/search', searchRoutes);  // Voeg deze regel toe

module.exports = app;  // Zorg ervoor dat je de app exporteert
