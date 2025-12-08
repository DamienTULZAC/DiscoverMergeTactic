const rulerTab = require('../utils/rulers');

/**
 * Méthode pour retourner les informations sur l'intégralité des Leaders du jeu
 */
exports.getAllRulers = (req, res) => {
    res.json(rulerTab.map((ruler)=>{
        return {
            id: ruler.id,
            name: ruler.name,
            img: ruler.img
        };
    }));
};

exports.getRulerById = (req, res) => {
    let obj;
        if(req.params.id > 0 || req.params.id <= rulerTab.length){
            for(let i=0; i<rulerTab.length; i++){
                obj = rulerTab[i];
                if(req.params.id == obj.id) {
                    res.json(obj);
                }
            }
        } else{
            res.json("--Error--");
            console.log("error");
        }
}