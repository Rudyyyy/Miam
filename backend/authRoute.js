const express = require('express');
const router = express.Router();

// Route POST pour la connexion
router.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Requête reçue :', { username, password });
    
    // Vérification des identifiants
    if (username === 'rudy' && password === 'mdp') {
        res.status(200).json({
            message: 'Login successful',
            token: 'fake-jwt-token', // Exemple de token fictif
        });
    } else {
        res.status(401).json({
            error: 'Invalid username or password',
        });
    }
});

module.exports = router;