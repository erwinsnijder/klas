var names = ['Fawn','Terina', 'Faviola', 'Maxwell', 'Lanie', 'Elfreda', 'Yu', 'Dinah', 'Kathi',
 'Karmen', 'Celia', 'Annelle', 'inifred', 'Barbara', 'Ashanti', 'Roxie', 'Felice',
  'Calvin', 'Ingeborg', 'Adrian']


class leerling{
    constructor (names) {
    // this.name =names[Math.floor(Math.random() * names.length)];
    this.name = ('iets' ); //names(1);
    this.wiskunde = Math.floor(Math.random() * 10);
    this.biologie = Math.floor(Math.random() * 10);
    this.engels =  Math.floor(Math.random() * 10);
    this.gym = Math.floor(Math.random() * 10);  
}
}

let leerling1 = new leerling;
let leerling2 = new leerling('Kees');
let leerling3 = new leerling('Berta');
let leerling4 = new leerling('Koos');
let leerling5 = new leerling('Erik');
let leerling6 = new leerling('Albert');






let mijnklas = [leerling1, leerling2, leerling3];

mijnklas.push(leerling4, leerling5, leerling6);

console.log(mijnklas);










// console.log(leerling3.name, leerling3.wiskunde, leerling3.biologie, leerling1.engels, leerling3.gym);
























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


