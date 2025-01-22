const express = require('express');
const router = express.Router();

// Route POST pour la connexion
router.post('/login', (req, res) => {
    const { login, password } = req.body;
    console.log('Requête reçue :', { login, password });
    
    // Vérification des identifiants
    if (login === 'rudy' && password === 'mdp') {
        res.status(200).json({
            message: 'Login successful',
            token: 'fake-jwt-token', // Exemple de token fictif
        });
    } else {
        res.status(401).json({
            error: 'Invalid login or password',
        });
    }
});

module.exports = router;