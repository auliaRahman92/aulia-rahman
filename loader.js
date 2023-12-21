// Munculkan loader
function showLoader() {
  document.getElementById("loader").style.display = "block";
}

// Sembunyikan loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// Contoh penggunaans
showLoader(); // Munculkan loader saat halaman sedang memuat

// Setelah pekerjaan selesai atau halaman selesai dimuat
hideLoader(); // Sembunyikan loader
