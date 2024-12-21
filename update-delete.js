// Data histori pelatihan (5 kegiatan per tahun)
const historiPelatihan = [
    { id: 1, tahun: 2022, nama: "Pelatihan Guru Penggerak 1", tanggal: "2022-01-01", foto: "https://source.unsplash.com/100x100/?technology" },
    { id: 2, tahun: 2022, nama: "Pelatihan Guru Penggerak 2", tanggal: "2022-02-01", foto: "https://source.unsplash.com/100x100/?business" },
    { id: 3, tahun: 2022, nama: "Pelatihan Guru Penggerak 3", tanggal: "2022-03-01", foto: "https://source.unsplash.com/100x100/?people" },
    { id: 4, tahun: 2022, nama: "Pelatihan Guru Penggerak 4", tanggal: "2022-04-01", foto: "https://source.unsplash.com/100x100/?nature" },
    { id: 5, tahun: 2022, nama: "Pelatihan Guru Penggerak 5", tanggal: "2022-05-01", foto: "https://source.unsplash.com/100x100/?animals" },

    { id: 6, tahun: 2023, nama: "Pelatihan Guru Penggerak 1", tanggal: "2023-01-01", foto: "https://source.unsplash.com/100x100/?technology" },
    { id: 7, tahun: 2023, nama: "Pelatihan Guru Penggerak 2", tanggal: "2023-02-01", foto: "https://source.unsplash.com/100x100/?business" },
    { id: 8, tahun: 2023, nama: "Pelatihan Guru Penggerak 3", tanggal: "2023-03-01", foto: "https://source.unsplash.com/100x100/?people" },
    { id: 9, tahun: 2023, nama: "Pelatihan Guru Penggerak 4", tanggal: "2023-04-01", foto: "https://source.unsplash.com/100x100/?nature" },
    { id: 10, tahun: 2023, nama: "Pelatihan Guru Penggerak 5", tanggal: "2023-05-01", foto: "https://source.unsplash.com/100x100/?animals" },

    { id: 11, tahun: 2024, nama: "Pelatihan Guru Penggerak 1", tanggal: "2024-01-01", foto: "https://source.unsplash.com/100x100/?technology" },
    { id: 12, tahun: 2024, nama: "Pelatihan Guru Penggerak 2", tanggal: "2024-02-01", foto: "https://source.unsplash.com/100x100/?business" },
    { id: 13, tahun: 2024, nama: "Pelatihan Guru Penggerak 3", tanggal: "2024-03-01", foto: "https://source.unsplash.com/100x100/?people" },
    { id: 14, tahun: 2024, nama: "Pelatihan Guru Penggerak 4", tanggal: "2024-04-01", foto: "https://source.unsplash.com/100x100/?nature" },
    { id: 15, tahun: 2024, nama: "Pelatihan Guru Penggerak 5", tanggal: "2024-05-01", foto: "https://source.unsplash.com/100x100/?animals" }
];

// Fungsi untuk menampilkan histori pelatihan berdasarkan tahun
function tampilkanHistori(tahunTerpilih = null) {
    const tbody = document.getElementById("histori-tbody");
    tbody.innerHTML = "";  // Kosongkan tabel sebelumnya

    // Filter data jika tahun terpilih ada
    const dataTampil = tahunTerpilih 
        ? historiPelatihan.filter(p => p.tahun === parseInt(tahunTerpilih))
        : historiPelatihan;

    dataTampil.forEach((pelatihan) => {
        const row = document.createElement("tr");
        row.classList.add("border-b");

        row.innerHTML = `
            <td class="px-6 py-4 text-sm text-gray-800">${pelatihan.tahun}</td>
            <td class="px-6 py-4">
                <img src="${pelatihan.foto}" alt="Foto Dokumentasi" class="w-16 h-16 object-cover rounded-lg">
            </td>
            <td class="px-6 py-4 text-sm text-gray-800">${pelatihan.nama}</td>
            <td class="px-6 py-4 text-sm text-gray-800">${pelatihan.tanggal}</td>
            <td class="px-6 py-4 text-sm text-gray-800">
                <button class="bg-green-600 text-white px-4 py-2 rounded-md" onclick="editData(${pelatihan.id})">Update</button>
                <button class="bg-red-600 text-white px-4 py-2 rounded-md ml-2" onclick="hapusData(${pelatihan.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);  // Tambahkan baris ke tabel
    });
}

// Fungsi untuk mengisi dropdown tahun
function isiDropdownTahun() {
    const tahunSelect = document.getElementById("tahun-select");

    // Ambil semua tahun yang unik dari data histori
    const tahunUnik = [...new Set(historiPelatihan.map(p => p.tahun))];

    // Tambahkan opsi untuk setiap tahun
    tahunUnik.forEach(tahun => {
        const option = document.createElement("option");
        option.value = tahun;
        option.textContent = tahun;
        tahunSelect.appendChild(option);
    });

    // Event listener untuk memilih tahun
    tahunSelect.addEventListener("change", function() {
        const tahunTerpilih = this.value;
        tampilkanHistori(tahunTerpilih);
    });
}

// Fungsi untuk mengedit data pelatihan
function editData(id) {
    const pelatihan = historiPelatihan.find(p => p.id === id);
    document.getElementById('tahun').value = pelatihan.tahun;
    document.getElementById('nama').value = pelatihan.nama;
    document.getElementById('tanggal').value = pelatihan.tanggal;
    document.getElementById('foto').value = pelatihan.foto;
}

// Fungsi untuk menghapus data pelatihan
function hapusData(id) {
    const index = historiPelatihan.findIndex(p => p.id === id);
    if (index !== -1) {
        historiPelatihan.splice(index, 1);
        tampilkanHistori();
    }
}

// Menampilkan histori pelatihan saat halaman dimuat
window.onload = () => {
    isiDropdownTahun();
    tampilkanHistori();  // Menampilkan seluruh data jika tahun tidak dipilih
};
