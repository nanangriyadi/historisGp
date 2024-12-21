// Data histori pelatihan
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
    { id: 10, tahun: 2023, nama: "Pelatihan Guru Penggerak 5", tanggal: "2023-05-01", foto: "https://source.unsplash.com/100x100/?animals" }
];

// Menampilkan histori pelatihan di tabel
function tampilkanHistori() {
    const tbody = document.getElementById("histori-tbody");
    tbody.innerHTML = "";  // Kosongkan tabel sebelumnya

    historiPelatihan.forEach((pelatihan) => {
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

// Fungsi untuk menambahkan data
document.getElementById('form-update').addEventListener('submit', function(e) {
    e.preventDefault();

    const tahun = document.getElementById('tahun').value;
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const foto = document.getElementById('foto').value;

    // Tambahkan data pelatihan baru
    const newPelatihan = {
        id: historiPelatihan.length + 1,
        tahun: tahun,
        nama: nama,
        tanggal: tanggal,
        foto: foto
    };

    historiPelatihan.push(newPelatihan);
    tampilkanHistori();

    // Reset form setelah submit
    this.reset();
});

// Fungsi untuk mengedit data
function editData(id) {
    const pelatihan = historiPelatihan.find(p => p.id === id);
    document.getElementById('tahun').value = pelatihan.tahun;
    document.getElementById('nama').value = pelatihan.nama;
    document.getElementById('tanggal').value = pelatihan.tanggal;
    document.getElementById('foto').value = pelatihan.foto;
}

// Fungsi untuk menghapus data
function hapusData(id) {
    const index = historiPelatihan.findIndex(p => p.id === id);
    if (index !== -1) {
        historiPelatihan.splice(index, 1);
        tampilkanHistori();
    }
}

// Menampilkan histori pelatihan saat halaman dimuat
window.onload = () => {
    tampilkanHistori();
};

