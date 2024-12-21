// Data histori pelatihan (5 kegiatan per tahun)
const historiPelatihan = [
    { tahun: 2022, nama: "Pelatihan Guru Penggerak 1", tanggal: "2022-01-01", foto: "https://placeimg.com/100/100/tech" },
    { tahun: 2022, nama: "Pelatihan Guru Penggerak 2", tanggal: "2022-02-01", foto: "https://placeimg.com/100/100/business" },
    { tahun: 2022, nama: "Pelatihan Guru Penggerak 3", tanggal: "2022-03-01", foto: "https://placeimg.com/100/100/people" },
    { tahun: 2022, nama: "Pelatihan Guru Penggerak 4", tanggal: "2022-04-01", foto: "https://placeimg.com/100/100/nature" },
    { tahun: 2022, nama: "Pelatihan Guru Penggerak 5", tanggal: "2022-05-01", foto: "https://placeimg.com/100/100/animals" },
    
    { tahun: 2023, nama: "Pelatihan Guru Penggerak 1", tanggal: "2023-01-01", foto: "https://placeimg.com/100/100/tech" },
    { tahun: 2023, nama: "Pelatihan Guru Penggerak 2", tanggal: "2023-02-01", foto: "https://placeimg.com/100/100/business" },
    { tahun: 2023, nama: "Pelatihan Guru Penggerak 3", tanggal: "2023-03-01", foto: "https://placeimg.com/100/100/people" },
    { tahun: 2023, nama: "Pelatihan Guru Penggerak 4", tanggal: "2023-04-01", foto: "https://placeimg.com/100/100/nature" },
    { tahun: 2023, nama: "Pelatihan Guru Penggerak 5", tanggal: "2023-05-01", foto: "https://placeimg.com/100/100/animals" },

    { tahun: 2024, nama: "Pelatihan Guru Penggerak 1", tanggal: "2024-01-01", foto: "https://placeimg.com/100/100/tech" },
    { tahun: 2024, nama: "Pelatihan Guru Penggerak 2", tanggal: "2024-02-01", foto: "https://placeimg.com/100/100/business" },
    { tahun: 2024, nama: "Pelatihan Guru Penggerak 3", tanggal: "2024-03-01", foto: "https://placeimg.com/100/100/people" },
    { tahun: 2024, nama: "Pelatihan Guru Penggerak 4", tanggal: "2024-04-01", foto: "https://placeimg.com/100/100/nature" },
    { tahun: 2024, nama: "Pelatihan Guru Penggerak 5", tanggal: "2024-05-01", foto: "https://placeimg.com/100/100/animals" }
];

// Fungsi untuk menampilkan histori pelatihan
function tampilkanHistori(tahun) {
    const tbody = document.getElementById("histori-tbody");
    tbody.innerHTML = "";  // Kosongkan tabel sebelumnya

    // Filter pelatihan berdasarkan tahun
    historiPelatihan.filter((pelatihan) => pelatihan.tahun == tahun).forEach((pelatihan) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="px-4 py-2">${pelatihan.tahun}</td>
            <td class="px-4 py-2">
                <img src="${pelatihan.foto}" alt="Foto Dokumentasi" class="w-16 h-16 object-cover rounded-full">
            </td>
            <td class="px-4 py-2">${pelatihan.nama}</td>
            <td class="px-4 py-2">${pelatihan.tanggal}</td>
        `;
        tbody.appendChild(row);  // Tambahkan baris ke tabel
    });
}

// Event listener untuk dropdown tahun
document.getElementById("tahun").addEventListener("change", (event) => {
    const tahunTerpilih = event.target.value;
    tampilkanHistori(tahunTerpilih);  // Panggil fungsi untuk tampilkan histori pelatihan sesuai tahun yang dipilih
});

// Menampilkan histori pelatihan tahun 2022 sebagai default saat pertama kali dibuka
window.onload = () => {
    tampilkanHistori("2022");
};
