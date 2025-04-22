import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (err) {
    console.error('❌ Error al conectar con MongoDB:', err);
    process.exit(1); // Detiene el servidor si falla
  }
};

export default connectDB;
