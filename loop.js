// let i = 1;

// while (i < 19) {
//     console.log(i);
//     i = i + 1;
// }





//  let k = 2;

//  do {
//     console.log(k);
//     k = k + 1;
// } while (k < 19);


// for (j = 3; j < 19; j++) {
//     console.log(j);
// }


// for ( r = 5; r < 19;) {
//     console.log(r);
//     r = r + 4;
// }

// let i = 1;
// while(i < 19) {
//     console.log(i);
//     i = i + 1;
// }

// for(let l = 1; l < 19;l++ ) {
//     console.log(l);
// }

// let k = 1;
// for(; k < 19; k++) {
//     console.log(k);
// }

// let j = 1;
// for(; ; j++) {
//     if (j < 19);
//     console.log(j);
    
// }

// while (true) {
//     console.log('began');
//     *break;*
//     console.log('the end wich never happen')
// }
// console.log('the end');

// let g = 12;
// while (g >= 3) {
//     console.log(g);
//     g = g - 1;
// }

// for(let q = 1; q <= 4; q++) {
//     console.log(q);
// }


// let w = 1;
// for(; w <= 3; w++) {
//     console.log(w);
// }

// for(t = 1; t <= 8 ; ) {
//     console.log(t);
//     t = t + 3;
    
// }

//Object 

// const myPhoneBook = {
//     "Mother": 123,
//     "Father": 456,
//     "Sister": 789
// }
// console.log(myPhoneBook);

// console.log(myPhoneBook["Father"]);
// console.log(myPhoneBook.Mother);

// myPhoneBook ["Brother"] = 13579;
// console.log(myPhoneBook);

// delete myPhoneBook["Sister"];
// console.log(myPhoneBook);


// const myBetterBook = {
//     "Father": 123,
//     "Mother": 456,
// }
// console.log(myBetterBook);
// console.log(myBetterBook.Mother);
// console.log(myBetterBook['Father']);

// myBetterBook["Brother"] = 13678;
// console.log(myBetterBook);

// delete myBetterBook['Father'];
// console.log(myBetterBook);

//Method

// const phoneBook = {
//     list: {
//         "John": 123,
//         "Jade": 456,
//         "Jim": 789,
//     },
//     log() {
//         console.log(this.list)
//     }
// };
// phoneBook.log();

// delete phoneBook["Father"];


// const myPhoneBook = {
//     list: {
//         "Mother": 123,
//         "Father": 456,
//         "Sister": 789
//     },
//     add(name,number) {
//     this.list[name] = number;
//         },
//         delete(name,number) {
//             this.list[name] = number;
//         }
//     };
//    myPhoneBook.add("Brother", 13579);
//    console.log(myPhoneBook.list['Brother']);

//     myPhoneBook.delete("Mother", 123);
//     console.log(myPhoneBook.list['Mother']);

//     console.log("Father" in myPhoneBook.list);


// const phoneBook = {
//     list: {
//         "John": 123,
//         "Jane Doe" 456,
//     }
// };
// console.log("John" in phoneBook.list);

// const book = {
//     "Gary": 123,
//     "Phil": 456,
//     "Shoun": 789
// }
// console.log(book["Phil"]);

// book["Garie"] = 1234;
// book["Shoun"] = 10987;
// delete book["Phil"];
// console.log(book);

const book = {
    list: {
        "Jam": 123,
        "Jim": 456,
        "Jum": 789
    },
    log() {
        console.log(this.list)
    }
};
book.log();