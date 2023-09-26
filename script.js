// looping
let pilihan = true;
while (pilihan) {

    // ambil pilihan player 
    let p = prompt('ayo pilih mau kertas, batu, gunting ?');
    let comp = Math.random();

    if( comp < 0.34){
        comp = 'kertas';
    } else if ( comp >= 0.34 && comp < 0.67){
        comp = 'batu';
    } else {
        comp = 'gunting';
    }

    // tentukan Aturan main
    let hasil = '';

    if ( p == comp) {
        hasil = 'Seri';
    } else if ( p == 'kertas'){
        hasil = (comp == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'batu'){
        hasil = (comp == 'gunting') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'gunting'){
        hasil = (comp == 'kertas') ? 'Anda Menang' : 'Komputer Menang';
    } else {
        hasil = 'BISA MAINNYA GAK SIH?!!!!!';
    }

    // console.log('Anda pilih : ' + p);
    // console.log('Komp pilih : ' + comp);
    // console.log('Hasilnya : ' + hasil);

    // tampilkan hasilnya
    alert('Anda Pilih : ' + p + '\nKomputer Pilih : ' + comp + '\nHasilnya : ' + hasil);

    pilihan = confirm('Mau Main Lagi ?');

}

alert('Terimakasih Sudah Main');