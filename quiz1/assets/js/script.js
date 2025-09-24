// =================================
//   Slideshow Logic
// =================================

// Kita mulai dengan slide pertama
let slideIndex = 1;
showSlides(slideIndex);

// Fungsi ini dipanggil oleh tombol panah di HTML
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fungsi utama yang mengatur slide mana yang tampil
function showSlides(n) {
    let i;
    // Ambil semua elemen dengan class "mySlides"
    let slides = document.getElementsByClassName("mySlides");

    // Logika untuk kembali ke slide pertama jika sudah di akhir
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Logika untuk pergi ke slide terakhir jika dari slide pertama di-klik "prev"
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Pertama, sembunyikan semua slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Kemudian, tampilkan hanya slide yang aktif (yang sedang ditunjuk oleh slideIndex)
    // slideIndex - 1 karena array di JavaScript dimulai dari 0
    slides[slideIndex - 1].style.display = "block";
}