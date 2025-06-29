// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js + MongoDB!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
