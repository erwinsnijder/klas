var words = ['Fawn','Terina', 'Faviola', 'Maxwell', 'Lanie', 'Elfreda', 'Yu', 'Dinah', 'Kathi',
 'Karmen', 'Celia', 'Annelle', 'inifred', 'Barbara', 'Ashanti', 'Roxie', 'Felice',
  'Calvin', 'Ingeborg', 'Adrian', 'Kees','Berta', 'Koos', 'Erik', 'Albert']


class leerling{
    constructor () {
    this.anaam = words[Math.floor(Math.random() * words.length)];
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

console.log(mijnklas);
































    // }

// class leerling {
//     constructor(name, wiskunde, biologie, engelsl) {
//         this.name = Suus;
//         this.wiskunde = 8;
//         this.biologie = 6;
//         this.engels =   5;
//     }
// }

// class leerling {
//     constructor(name, wiskunde, biologie, engels) {
//         this.name = Erik;
//         this.wiskunde = 6;
//         this.biologie = 7;
//         this.engels =   8;
//     }
// }
// class leerling {
//     constructor(name, wiskunde, biologie, engels) {
//         this.name = Wim;
//         this.wiskunde = 3;
//         this.biologie = 8;
//         this.engels =   6;
//     }
// }
// class leerling {
//     constructor(name, wiskunde, biologie, engels) {
//         this.name = Kees;
//         this.wiskunde = 5;
//         this.biologie = 6;
//         this.engels =   7;
//     }
// }
// class leerling {
//     constructor(name, wiskunde, biologie, engels) {
//         this.name = Kor;
//         this.wiskunde = 7;
//         this.biologie = 5;
//         this.engels =   4;
//     }
// }
// class leerling {
//     constructor(name, wiskunde, biologie, engels) {
//         this.name = Bep;
//         this.wiskunde = 7;
//         this.biologie = 5;
//         this.engels =   4;
//     }
// }


