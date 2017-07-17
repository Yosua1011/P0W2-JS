for (angka = 1; angka <= 100; angka ++)  {
    if (angka % 2 === 0) {console.log("GENAP");
    } 
    else {console.log("GANJIL");
	}
}

console.log("---------------------");

for (angka = 1; angka <= 100; angka += 2)  {
	if (angka % 3 === 0) {
		console.log(angka + " KELIPATAN " + 3);
	} 
	else {
		console.log("");
	}
}

console.log("---------------------");

for (angka = 1; angka <= 100; angka += 5)  {
	if (angka % 6 === 0) {
		console.log(angka + " KELIPATAN " + 6);
	} 
	else {
		console.log("");
	}
}

console.log("---------------------");

for (angka = 1; angka <= 100; angka += 9)  {
	if (angka % 10 === 0) {
		console.log(angka + " KELIPATAN " + 10);
	} 
	else {
		console.log("");
	}
}