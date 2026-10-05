// **Data Produk Awal Minimal 5**
// (ID dilompat ke 4 agar penambahan ID 3 berjalan urut)
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 4, nama: "Smartwatch", harga: 2000000 },
  { id: 5, nama: "Headphone", harga: 1500000 },
  { id: 6, nama: "Mouse Wireless", harga: 300000 }
];

// **Event Listener**
// Objek untuk menampung fungsi handler
const eventHandler = {
  submitForm: function(event) {
    event.preventDefault(); // agar halaman tidak reload saat form disubmit
    console.log("Event: Form disubmit, data diproses.");
  },
  clickHapus: function(event) {
    console.log("Event: Tombol hapus diklik.");
  }
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  // Spread operator (...) menyalin isi array lama lalu menambahkan produkBaru di akhir
  produkList = [...produkList, produkBaru];
  console.log(`\n[+] Berhasil menambahkan produk: ${nama}`);
}

// **Menghapus Produk dengan Rest Parameter**
// Rest parameter (...ids) menangkap 1 atau lebih argumen ke dlm array
function hapusProduk(...ids) {
  // Menyaring produk jadi hanya menyisakan produk yg ID-nya tidak ada di array 'ids'
  produkList = produkList.filter(produk => !ids.includes(produk.id));
  console.log(`\n[-] Berhasil menghapus produk dengan ID: ${ids.join(', ')}`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("\n--- Daftar Produk ---");
  produkList.forEach(produk => {
    // Destructuring mengekstrak properti objek menjadi variabel mandiri
    const { id, nama, harga } = produk; 
    console.log(`${id}. ${nama} - Rp${harga.toLocaleString('id-ID')}`);
  });
  console.log("---------------------");
}

// --- Testing ---

tampilkanProduk();

// penambahan data
tambahProduk(3, "Tablet", 7000000);
tampilkanProduk();

// penghapusan data
hapusProduk(2);
tampilkanProduk();