/* Tugas 1 */
processSentence = function(nama, angkaPembilang, angkaPenyebut, hasilBagi) {
	return 'Halo ' + nama + ', ' + angkaPembilang + ' dibagi ' + angkaPenyebut + ' adalah sama dengan ' + hasilBagi 
}


var nama = 'Yosua';
var angkaPembilang = 9;
var angkaPenyebut = 3;
var hasilBagi =  angkaPembilang/angkaPenyebut;

var fullSentence = processSentence(nama, angkaPembilang, angkaPenyebut, hasilBagi);
console.log(fullSentence);

/* Tugas 2 */
luasSegitiga = function(alas, tinggi) {
	return (alas*tinggi)/2
}

var alas = 10
var tinggi = 5
console.log('Luas Segitiga: ' + luasSegitiga(alas, tinggi));

/* Tugas 3 */
var tahun = 2000;
if (tahun % 4 == 0){
	if (tahun % 100 != 0) {
		console.log(tahun + ' adalah tahun kabisat');
	}
	else {
		if (tahun % 400 == 0) {
			console.log(tahun + ' adalah tahun kabisat');
		}
		else {
			console.log(tahun + ' adalah bukan tahun kabisat')
		}
	}
}
else {
	console.log(tahun + ' adalah bukan tahun kabisat');
}	


