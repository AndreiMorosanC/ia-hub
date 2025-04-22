// routes/users.js
import express from 'express';
import User from '../models/User.js';


const router = express.Router();

router.post('/', async (req, res) => {
  const { uid, email } = req.body;

  console.log("📩 Usuario recibido:", { uid, email }); // ✅ Log del frontend

  try {
    let user = await User.findOne({ uid });

    if (!user) {
      user = await User.create({ uid, email });
      console.log("✅ Usuario creado en MongoDB:", user); // ✅ Log de éxito
    } else {
      console.log("⚠️ Usuario ya existía:", user); // ✅ Log alternativo
    }

    res.status(200).json({ message: 'Usuario guardado', user });
  } catch (err) {
    console.error("❌ Error en backend:", err);
    res.status(500).json({ error: 'Error al guardar usuario' });
  }
});

export default router;
