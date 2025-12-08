const cardsTab = require('../utils/cards');
const catTab = require('../utils/categories');

/**
 * Méthode pour renvoyer les données de l'intégralité des cartes du jeu
 */
exports.getAllCards =
    (req, res) => {
        res.json(cardsTab.map((obj) => {
            return {
                id: obj.id,
                name: obj.name,
                type: obj.type,
                cout: obj.cout,
                img: obj.img,
                categories: [catTab[obj.categories[0]].name, catTab[obj.categories[1]].name],
            };
        }));
    };

exports.getCardById = 
    (req, res) =>{
        let obj;
        if(req.params.id > 0 || req.params.id <= cardsTab.length){
            for(let i=0; i<cardsTab.length; i++){
                obj = cardsTab[i];
                if(req.params.id == obj.id) {
                    obj.categories = [catTab[obj.categories[0]].name, catTab[obj.categories[1]].name],
                    res.json(obj);
                }
            }
        } else{
            res.json("--Error--");
            console.log("error");
        }
        
    }
