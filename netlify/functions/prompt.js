require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Inicializar el cliente de IA de Google
if (!process.env.GEMINI_API_KEY) {
    throw new Error('La variable de entorno GEMINI_API_KEY no está definida.');
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.handler = async (event, context) => {
    try {
        const { userPrompt, masterPrompt } = JSON.parse(event.body);

        if (!userPrompt || !masterPrompt) {
            return {
                statusCode: 400,
                body: JSON.stringify({ feedback: "Error: Faltan datos en la solicitud." }),
            };
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        // Reemplazar el placeholder con el prompt del usuario
        const finalPrompt = masterPrompt.replace('{userPrompt}', userPrompt);

        const result = await model.generateContent(finalPrompt);
        const response = await result.response;
        const feedback = response.text();

        return {
            statusCode: 200,
            body: JSON.stringify({ feedback }),
        };

    } catch (error) {
        console.error("Error al generar contenido:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ feedback: "Error al contactar con la IA. Revisa los logs de la función en Netlify." }),
        };
    }
};
