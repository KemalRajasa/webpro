// =================================
//   Slideshow Logic
// =================================

// Kita mulai dengan slide pertama
if (document.querySelector(".slideshow-container")) {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Fungsi plusSlides() dan showSlides() tetap sama,
    // letakkan DI DALAM blok if ini.
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

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
}

// Fungsi utama yang mengatur slide mana yang tampil


// =================================
//   Dark Mode Logic
// =================================

// Pilih tombol toggle dan ikon di dalamnya
const darkModeToggle = document.getElementById('darkModeToggle');
const toggleIcon = darkModeToggle.querySelector('i');

// Fungsi untuk mengaktifkan dark mode
const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
}

// Fungsi untuk menonaktifkan dark mode
const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
}

// Cek preferensi tema dari localStorage saat halaman dimuat
// Ini memastikan tema tetap konsisten saat berpindah halaman
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    enableDarkMode();
} else {
    // Secara default, tema adalah light
    disableDarkMode();
}

// Tambahkan event listener untuk tombol toggle
darkModeToggle.addEventListener('click', () => {
    // Cek apakah dark mode sudah aktif atau belum
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});