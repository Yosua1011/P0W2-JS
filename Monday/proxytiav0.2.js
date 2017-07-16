var nama = 'John';
var peran = 'Ksatria';

if(nama == '') {
  console.log("Nama tidak boleh kosong")
}
else {
  console.log("Selamat datang di Dunia Proxytia, " + nama)
}

if(peran == '') {
  console.log("Pilih peranmu untuk memulai game");
}

else if (peran == 'Ksatria') {
  console.log("Halo Ksatria " + nama + 
              ", kamu dapat menyerang dengan senjatamu!" );
}

else if (peran == 'Tabib') {
  console.log("Halo Tabib " + nama + 
              ", kamu akan membantu temanmu yang terluka." );
}

else if (peran == 'Penyihir') {
  console.log("Halo Penyihir " + nama + 
              ", ciptakan keajaiban yang membantu kemenanganmu!" );
}

else {
  console.log("Mohon maaf, pilihan belum tersedia.")
}