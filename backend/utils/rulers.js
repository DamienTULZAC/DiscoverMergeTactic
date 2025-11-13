
const rulerTab = {
  king: {
    eng: {
      name: "Royal King",
      bonus_name: "Royal Commission",
      bonus_effect: "Losing grants you +4 Elixir",
      description: `
        After nearly a decade in the Arena, the King is nothing if not flexible with his battle strategies.
  
        The madness of Merge Tactics will prove to be his greatest feat yet!
      `
    },
    fr: {
      name: "Roi Royal",
      bonus_name: "Commission royale",
      bonus_effect: "Perdre vous donne +4 Élixirs",
      description: `
        Après près d'une décennie dans l'arène, le Roi connaît par cœur toutes les stratégies de combat.
  
        Et la folie de Merge Tactics sera bientôt sa plus belle prouesse !
      `
    },
    hp: 10,
    releaseDate: "30/06/2025"
  },
  empress: {
    eng:{
        name: "Spirit Empress",
        bonus_name: "Fusion Foresight",
        bonus_effect: "Every merge grants you +1 Elixir",
        description: `
            Who needs to heal when you can wield spirits with sheer force of will?

            This sly little rebel oozes intellect, battling boldly in hopes of discovering the true nature of her power.`
    },
    fr: {
        name: "Impératrice spirituelle",
        bonus_name: "Fusion calculée",
        bonus_effect: "Chaque fusion vous donne +1 élixir bonus",
        description: `Qui a besoin de soin quand on peut manipuler les esprits par la seule force de sa volonté ?
        
        Cette petite rebelle est très intelligente et se bat pour découvrir la vraie nature de ses pouvoirs.`
    },
    hp: 10,
    releaseDate: "30/06/2025"
},
  queen: {
    eng:{
        name: "Goblin Queen",
        bonus_name: "Greener Grin",
        bonus_effect: "33% chance per kill to spawn a random Goblin (any cost)",
        description: `She has travelled across the Emerald Sea to wreak havoc in the Arena.

            The only thing that calms her wrath are the Baby Goblins, but they're not here...`
    },
    fr: {
        name: "Reine gobeline",
        bonus_name: "Vert de jalousie",
        bonus_effect: "Eliminer un ennemi donne 33% de chances de gagner 1 goblin",
        description: `
        
        Après une traversée de la mer émeraude, la voilà prête à semer le chaos dans l'arène.
        
        Seuls ses bébés gobelins pourraient calmer sa colère, mais ils ne sont nulle part...`
    },
    hp: 10,
    releaseDate: "29/09/2025"
},
  dragon: {
    eng:{
        name: "Elixir Loong",
        bonus_name: "Endless Spring",
        bonus_effect: "Giving +1 Elixir and +1 team size per turn",
        description: `Freshly emerged from the River of Golden Elixir, this lucky dragon brings honor to all those who fight alongside him.`
    },
    fr: {
        name: "Vouivre dorée",
        bonus_name: "Fontaine éternelle",
        bonus_effect: "Gagnez +1 Elixir et +1 taille d'équipe par tour",
        description: `Tout juste sortie de la rivière d'élixir doré, ce dragon et sa prestance confèrent honneur à ceux qui se battent à ses côtés.`
    },
    hp: 10,
    releaseDate: "27/10/2025"
},
};


module.exports = rulerTab;