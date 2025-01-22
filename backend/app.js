const express = require('express');
const cors = require('cors');
const authRoute = require('./authRoute');

const app = express();

// Middleware
app.use(cors()); // Pour permettre les requêtes CORS
app.use(express.json()); // Pour parser les données JSON envoyées au backend
app.use('/api', authRoute);

// Route par défaut
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});