var Human1 = [
			// Data 1
			{
				'nama': 'Tono',
				'hari': 'Senin',
				'kehadiran': 'Masuk',
				'alasan': ''
			},
			// Data 2
			{
				'nama': 'Tono',
				'hari': 'Rabu',
				'kehadiran': 'Masuk',
				'alasan': ''
			},
			// Data 3
			{
				'nama': 'Tono',
				'hari': 'Jumat',
				'kehadiran': 'Absen',
				'alasan': 'Dinas Luar'
			}
			]
var workDay = 0;
var dayIn = 0;
var dayOff = 0;

var Cetak = function(Human1) {
	for (i = 0; i < Human1.length; i ++) {
		console.log('Nama: ' + Human1[i].nama);
		console.log('Hari: ' + Human1[i].hari);
		console.log('Kehadiran: ' + Human1[i].kehadiran);

		if (Human1[i].alasan === '') {
			console.log('\n');
			workDay ++;
			dayIn ++;
			
		}
		else if (Human1[i].alasan != '') {
			console.log('Alasan: ' + Human1[i].alasan);
			workDay ++;
			dayOff ++;

		}
	}
}

console.log(Cetak(Human1));
console.log('Total hari kerja minggu ini: ' + workDay + ' hari');
console.log('Total masuk: ' + dayIn + ' hari');
console.log('Total Tidak Masuk: ' + dayOff + ' hari');
