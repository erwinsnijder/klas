var words = ["Fawn", "Terina", "Faviola", "Maxwell", "Lanie", "Elfreda", "Yu", "Dinah",  "Kathi", 
             "Karmen", "Celia", "Annelle", "inifred", "Barbara", "Ashanti", "Roxie", "Felice",
             "Calvin", "Ingeborg", "Adrian", "Kees", "Berta", "Koos", "Erik", "Albert"];

        class Vak {
  constructor(naam, cijfer) {
    this.naam = naam;
    this.cijfer = cijfer;
  }
}

class Leerling {
  constructor() {
    this.anaam = words[Math.floor(Math.random() * words.length)];

    this.vakken = [];

    this.vakken.push(new Vak("wiskunde", Math.floor(Math.random() * 10)));
    this.vakken.push(new Vak("biologie", Math.floor(Math.random() * 10)));
    this.vakken.push(new Vak("engels", Math.floor(Math.random() * 10)));
    this.vakken.push(new Vak("gym", Math.floor(Math.random() * 10)));
    this.vakken.push(new Vak("nederlands", Math.floor(Math.random() * 10)));
    this.vakken.push(new Vak("duits", Math.floor(Math.random() * 10)));
    this.vakken.push(new Vak("scheikunde", Math.floor(Math.random() * 10)));

    this.gemiddelde = 0;
  }
}

let leerling1 = new Leerling();
let leerling2 = new Leerling();
let leerling3 = new Leerling();
let leerling4 = new Leerling();
let leerling5 = new Leerling();
let leerling6 = new Leerling();
let leerling7 = new Leerling();
let leerling8 = new Leerling();
let leerling9 = new Leerling();
let leerling10 = new Leerling();

let mijnklas = [leerling1, leerling2, leerling3];

mijnklas.push(
  leerling4,
  leerling5,
  leerling6,
  leerling7,
  leerling8,
  leerling9,
  leerling10
);

function myFunction() {
  for (var x = 0; x < mijnklas.length; x++) {  
    document.getElementById("cijfers").innerHTML =
      document.getElementById("cijfers").innerHTML + mijnklas[x].anaam + ": ";

    for (let y = 0; y < mijnklas[x].vakken.length; y++) { 
      if (y !== 0) {
        
        document.getElementById("cijfers").innerHTML =
          document.getElementById("cijfers").innerHTML + ", ";
      }
      document.getElementById("cijfers").innerHTML =
        document.getElementById("cijfers").innerHTML + mijnklas[x].vakken[y].naam + " " +  mijnklas[x].vakken[y].cijfer;

      mijnklas[x].gemiddelde = mijnklas[x].gemiddelde + mijnklas[x].vakken[y].cijfer;
    }

    document.getElementById("cijfers").innerHTML =
      document.getElementById("cijfers").innerHTML + "; gemiddelde: " + Math.floor((mijnklas[x].gemiddelde / mijnklas[x].vakken.length));

    document.getElementById("cijfers").innerHTML =
      document.getElementById("cijfers").innerHTML + "<br>"; 
  }
}
