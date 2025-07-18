const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();
db.connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users' , require('./routes/userRoutes'));

app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT} !`));