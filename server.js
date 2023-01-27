const express = require('express');
const connectDB = require('./db/db');

const workerRoutes = require('./routes/workerRoutes');
const employerRoutes = require('./routes/employerRoutes');
const workRoutes = require('./routes/workRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const bodyParser = require('body-parser');

const app = express();

connectDB();

app.use(express.json());

app.use('/worker', workerRoutes);
app.use('/employe', employerRoutes);
app.use('/work', workRoutes);
app.use('/category', categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server Started!");
})