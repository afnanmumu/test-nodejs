const express = require('express');
const connectDB = require('./config/db');
const tenantRoutes = require('./routes/tenantRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', tenantRoutes);
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
