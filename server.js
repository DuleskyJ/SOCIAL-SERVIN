const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3007;

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB')
);

app.use(require('./routes'));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);