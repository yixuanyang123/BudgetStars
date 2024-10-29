const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/budgetStars';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));
