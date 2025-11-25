const cardsTab = require('../utils/cards');

/**
 * Méthode pour renvoyer les données de l'intégralité des cartes du jeu
 */
exports.getAllCards =
    (req, res) => {
        res.json(cardsTab);
    };
