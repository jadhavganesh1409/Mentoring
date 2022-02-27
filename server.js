const express = require('express');
const connectDB = require('./config/db');
// const connect = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes

app.use('/api/mentees', require('./routes/api/mentees'));
app.use('/api/mentors', require('./routes/api/mentors'));
app.use('/api/admins', require('./routes/api/admins'));
app.use('/api/menteeauth', require('./routes/api/menteeauth'));
app.use('/api/mentorauth', require('./routes/api/mentorauth'));
app.use('/api/adminauth', require('./routes/api/adminauth'));
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));