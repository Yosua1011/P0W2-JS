for (angka = 1; angka <= 100; angka ++)  {
    if (angka % 2 === 0) {console.log("GENAP");
    } 
    else {console.log("GANJIL");
	}
}

console.log("---------------------");

for (angka = 1; angka <= 100; angka += 2)  {
	for (number =1; number <= 100; number ++) {
	    if (angka === number && angka % number === 0) {console.log(angka + " KELIPATAN " + number);
	    } 
	    else {
		}
	}
}

console.log("---------------------");

for (angka = 1; angka <= 100; angka += 5)  {
	for (number =1; number <= 100; number ++) {
	    if (angka === number && angka % number === 0) {console.log(angka + " KELIPATAN " + number);
	    } 
	    else {
		}
	}
}

console.log("---------------------");

for (angka = 1; angka <= 100; angka += 9)  {
	for (number =1; number <= 100; number ++) {
	    if (angka === number && angka % number === 0) {console.log(angka + " KELIPATAN " + number);
	    } 
	    else {
		}
	}
}