# Pseudocode ini akan menjelaskan bagaimana game ninja bekerja:

## Player memilih versi game yang akan dimainkan
## Versi yang dapat dipilih ada dua yaitu Mouse Version atau Keyboard Version

## Pseudocode untuk Mouse Version:
* Player menggerakkan ninja agar dapat melewati celah antar halangan
* Papan main akan bergerak dari kanan ke kiri dengan interval 20 milidetik
* Halangan akan muncul dengan interval antar halangan sebesar 150 milidetik
* Player dapat menggerakkan ninja ke empat sumbu gerak yaitu atas, bawah, kanan, kiri
* Untuk menggerakkan ninja sesuai keempat sumbu geraknya, player dapat mengklik button Up untuk ke atas, Down untuk ke bawah, Right untuk ke kanan, dan Left untuk ke kiri
* Skor permainan akan dihitung berdasarkan jumlah frame number dari papan main yang bergerak
* Skor akan ditampilkan di sudut kanan atas papan main
* Jika ninja mengenai halangan maka permainan akan berhenti seketika
* Definisi ninja terkena halangan adalah sebagai berikut:
	* Untuk halangan yang menggantung dari atas ke bawah:
		Jika posisi x dan y salah satu sisi ninja lebih besar dari salah satu sisi halangan 
	* Untuk halangan yang menonjol dari bawah ke atas:
		Jika salah satu sisi ninja memiliki posisi x lebih besar dan y lebih kecil dari salah satu sisi halangan 
* Jika permainan terhenti, player dapat memilih restart untuk memulai ulang permainan atau memilih exit untuk kembali ke halaman awal

## Pseudocode untuk Keyboard Version:
* Player menggerakkan ninja agar dapat melewati celah antar halangan
* Papan main akan bergerak dari kanan ke kiri dengan interval 20 milidetik
* Halangan akan muncul dengan interval antar halangan sebesar 150 milidetik
* Player dapat menggerakkan ninja ke empat sumbu gerak yaitu atas, bawah, kanan, kiri
* Untuk menggerakkan ninja sesuai kedelapan sumbu geraknya, player dapat menekan arrow Up untuk ke atas, Down untuk ke bawah, Right untuk ke kanan, dan Left untuk ke kiri. Selain itu, untuk bergerak sesuai sumbu diagonalnya, dapat melakukan langkah-langkah sebagai berikut: 
	* player dapat menekan arrow Up dan Right untuk bergerak ke Kanan Atas
	* player dapat menekan arrow Up dan Left untuk bergerak ke Kiri Atas
	* player dapat menekan arrow Down dan Right untuk bergerak ke Kanan Atas
	* player dapat menekan arrow Down dan Left untuk bergerak ke Kiri Atas
Jika ninja mengenai halangan maka permainan akan berhenti seketika
* Skor permainan akan dihitung berdasarkan jumlah frame number dari papan main yang bergerak
* Skor akan ditampilkan di sudut kanan atas papan main
* Jika ninja mengenai halangan maka permainan akan berhenti seketika
* Definisi ninja terkena halangan adalah sebagai berikut:
	* Untuk halangan yang menggantung dari atas ke bawah:
		Jika posisi x dan y salah satu sisi ninja lebih besar dari salah satu sisi halangan 
	* Untuk halangan yang menonjol dari bawah ke atas:
		Jika salah satu sisi ninja memiliki posisi x lebih besar dan y lebih kecil dari salah satu sisi halangan 
* Jika permainan terhenti, player dapat memilih restart untuk memulai ulang permainan atau memilih exit untuk kembali ke halaman awal

