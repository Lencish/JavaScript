"use strict";
myFunction();

function myFunction() {
var person = prompt("Please enter your name");
if (person != null) {
console.log("Hello " + person + "! Welcome to the library.");
}
}

function Book(namn, ämne, antalSidor, ISBNNummer) {
this.namn = namn;
this.ämne = ämne;
this.antalSidor = antalSidor;
this.ISBNNummer = ISBNNummer;
this.getBookInfo = function () {
console.log(
 "Book: " + this.namn  + "\nGenre: "+  this.ämne + "\nPages: "+ this.antalSidor + "\nISBN: "+ this.ISBNNummer + console.log("\n-------")
);
};
}

// Skapa Book objekt och spara de med hjälp av .push() funktionen i books array:n
let books = [];


books.push(new Book("Game Of Thrones", "Fantasy", 650, 9789137139623));
books.push(new Book("Matematik5000", "Lärobok", 276, 9789137745925));
books.push(new Book("Harry Potter", "Fantasy", 860, 9789137118624));


// ---- For Loop----------
let howManyBooks = prompt("How many books would you like to add?");

for (var i = 0; i < howManyBooks; i++) {
// skapa en variabel för varje input d.v.s let bookname = prompt("Enter bookname: "); .. osv

let addBookName = prompt("Title : ");
let addBookGenre = prompt("Genre : ");
let addBookPages = prompt("Pages : ");
let addBookIsbn = prompt ("ISBN : ");

books.push(new Book(addBookName,addBookGenre,addBookPages,addBookIsbn));
}
// använder ForEach för att använda funktioner X books antal ggr.
books.forEach(function (elm) {
  elm.getBookInfo();
});

