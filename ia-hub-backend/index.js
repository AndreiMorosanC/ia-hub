import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import cors from 'cors';
import userRoutes from './api/Users.js';



connectDB(); 



dotenv.config();
const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'working' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use('/api/Users', userRoutes);
