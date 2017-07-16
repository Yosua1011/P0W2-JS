var nama = 'John';
var peran = 'Pedagang';

if(nama == '' && peran == '') {
  console.log("\"Nama tidak boleh kosong\"" + 
              "\n" + "\"Pilih peranmu untuk memulai game\"" );
}

else if ( nama !== '' && peran == 'Ksatria') {
  console.log("\"Selamat datang di Dunia Proxytia, " + nama + "\"" +
              "\n" + "\"Halo Ksatria " + nama + 
              ", kamu dapat menyerang dengan senjatamu!\"" );
}

else if ( nama !== '' && peran == 'Tabib') {
  console.log("\"Selamat datang di Dunia Proxytia, " + nama + "\"" +
              "\n" + "\"Halo Tabib " + nama + 
              ", kamu akan membantu temanmu yang terluka.\"" );
}

else if ( nama !== '' && peran == 'Penyihir') {
  console.log("\"Selamat datang di Dunia Proxytia, " + nama + "\"" +
              "\n" + "\"Halo Penyihir " + nama + 
              ", ciptakan keajaiban yang membantu kemenanganmu!\"" );
}

else {
  console.log("Mohon maaf, pilihan belum tersedia.")
}


