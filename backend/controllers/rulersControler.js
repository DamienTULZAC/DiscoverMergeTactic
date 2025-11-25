const rulerTab = require('../utils/rulers');

/**
 * Méthode pour retourner les informations sur l'intégralité des Leaders du jeu
 */
exports.getAllRulers = (req, res) => {
    res.json(rulerTab);
};