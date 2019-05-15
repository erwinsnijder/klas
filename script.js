var words = ['Fawn','Terina', 'Faviola', 'Maxwell', 'Lanie', 'Elfreda', 'Yu', 'Dinah', 'Kathi',
 'Karmen', 'Celia', 'Annelle', 'inifred', 'Barbara', 'Ashanti', 'Roxie', 'Felice',
  'Calvin', 'Ingeborg', 'Adrian', 'Kees','Berta', 'Koos', 'Erik', 'Albert']

class leerling{
    constructor () {
    this.anaam          = words[Math.floor(Math.random() * words.length)];
    this.wiskunde       = Math.floor(Math.random() * 10);
    this.biologie       = Math.floor(Math.random() * 10);
    this.engels         = Math.floor(Math.random() * 10);
    this.gym            = Math.floor(Math.random() * 10);
    this.nederlands     = Math.floor(Math.random() * 10);
    this.duits          = Math.floor(Math.random() * 10); 
    this.scheikunde     = Math.floor(Math.random() * 10); 
    this.gemiddelde     =0;
}
}

let leerling1  = new  leerling;
let leerling2  = new  leerling;
let leerling3  = new  leerling;
let leerling4  = new  leerling;
let leerling5  = new  leerling;
let leerling6  = new  leerling;
let leerling7  = new  leerling;
let leerling8  = new  leerling;
let leerling9  = new  leerling;
let leerling10 = new  leerling;

let mijnklas = [leerling1, leerling2, leerling3];

mijnklas.push(leerling4, leerling5, leerling6, leerling7, leerling8, leerling9, leerling10);

   for (var x=0; x < mijnklas.length; x++) {
//     console.log (mijnklas[x]);
//    }  
 
       function myFunction() {
            document.getElementById("cijfers").innerHTML = (mijnklas);
    }
}
//    for (let leerling in mijnklas) {
//     function myFunction() {
//     document.getElementById("cijfers").innerHTML = (leerling);
//     }
//    }