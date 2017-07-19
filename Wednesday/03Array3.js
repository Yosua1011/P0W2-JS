// Splice untuk menambah elemen
var input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);   
}

console.log(dataHandling2(input));

// console.log nama bulan dan sorting 
var input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    console.log(input[3].split("/").sort(function(value1, value2) { return value1 < value2 }));
       
}

console.log(dataHandling2(input));

// Split untuk join dengan tanda -
var input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    console.log(input[3].split("/").join("-"));
       
}

console.log(dataHandling2(input));

// Slice Nama hanya menjadi 15 karakter
var input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    console.log(input[1].slice(0,14));
       
}

console.log(dataHandling2(input));

