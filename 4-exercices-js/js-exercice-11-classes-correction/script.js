// on créé un objet smartphone qui a 4 propriétés
let smartphone = {
    marque: "Inconnu",
    ram: 0,
    stockage: 0,
    prix: 0
};

  // on définit une classe pour représenter le modèle d'un S21
class SamsungGalaxyS21 {
    constructor() {
      //on copie les propriétés de base de smartphone et les propriétés spécifiques du S21
        Object.assign(this, smartphone);
        this.marque = "Samsung";
        this.modele = "Galaxy S21";
        this.ram = 8;
        this.stockage = 128;
        this.prix = 999;
        this.image = "/images/samsung.jpg"; 
        }
}

  // on définit une classe pour représenter le modèle d'un IPhone12
class IPhone12 {
    constructor() {
        Object.assign(this, smartphone);
        this.marque = "Apple";
        this.modele = "iPhone 12";
        this.ram = 6;
        this.stockage = 256;
        this.prix = 1099;
        this.image = "/images/apple.jpg"; 
    }
}

  // Fonction pour créer une carte HTML à partir d'un smartphone
function creationCarte(smartphone, cardId) {
    let carteElement = document.getElementById(cardId);
    carteElement.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h2 class="card-title">${smartphone.modele}</h2>
            <img src="${smartphone.image}" alt="${smartphone.modele}" class="card-img-top" alt="iPhone 12">
            <p class="card-text">${smartphone.marque}</p>
            <p class="card-text">RAM: ${smartphone.ram} Go</p>
            <p class="card-text">Stockage: ${smartphone.stockage} Go</p>
            <p class="card-text">Prix: ${smartphone.prix} €</p>
            </div>
        </div>
    `;
}

    
  // on instancie les smartphones
let samsungGalaxyS21 = new SamsungGalaxyS21();
let iPhone12 = new IPhone12();
  
  // on créé les cartes pour chaque smartphone
creationCarte(samsungGalaxyS21, "samsungCard");
creationCarte(iPhone12, "iphoneCard");
