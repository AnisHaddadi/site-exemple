// Serveur local pour tester le chatbot
// Pour utiliser : npm install express cors dotenv
// Puis : npm run dev

import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import chatHandler from './api/chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(__dirname));

// Route API pour le chatbot
app.post('/api/chat', chatHandler);

// Route de fallback pour SPA
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    console.log(`📝 Assurez-vous d'avoir configuré OPENAI_API_KEY dans votre fichier .env`);
});

