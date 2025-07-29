require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3001;

// Inicializar el cliente de IA de Google
if (!process.env.GEMINI_API_KEY) {
    throw new Error('La variable de entorno GEMINI_API_KEY no está definida.');
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middlewares
app.use(express.static('public')); // Servir archivos desde la carpeta 'public'
app.use(express.json());

// Endpoint para el feedback de la IA
app.post('/api/prompt', async (req, res) => {
    try {
        // ¡CORREGIDO! Ahora espera userPrompt y masterPrompt
        const { userPrompt, masterPrompt } = req.body;

        if (!userPrompt || !masterPrompt) {
            return res.status(400).json({ feedback: "Error: Faltan datos en la solicitud." });
        }

        console.log('Analizando el prompt:', userPrompt);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        // Reemplazar el placeholder con el prompt del usuario
        const finalPrompt = masterPrompt.replace('{userPrompt}', userPrompt);

        const result = await model.generateContent(finalPrompt);
        const response = await result.response;
        const feedback = response.text();

        res.json({ feedback });

    } catch (error) {
        console.error("Error al generar contenido:", error);
        res.status(500).json({ feedback: "Error al contactar con la IA. Revisa la consola del servidor." });
    }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});