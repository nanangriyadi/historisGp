/ Data histori pelatihan (dapat diganti dengan API atau database)
const historiPelatihan = [
    { tahun: 2022, nama: "Pelatihan Guru Penggerak 1", tanggal: "2022-01-01" },
    { tahun: 2022, nama: "Pelatihan Guru Penggerak 2", tanggal: "2022-02-01" },
    { tahun: 2023, nama: "Pelatihan Guru Penggerak 3", tanggal: "2023-03-01" },
    { tahun: 2023, nama: "Pelatihan Guru Penggerak 4", tanggal: "2023-04-01" },
    { tahun: 2024, nama: "Pelatihan Guru Penggerak 5", tanggal: "2024-05-01" },
];

// Fungsi untuk menampilkan histori pelatihan
function tampilkanHistori(tahun) {
    const tbody = document.getElementById("histori-tbody");
    tbody.innerHTML = "";

    historiPelatihan.filter((pelatihan) => pelatihan.tahun == tahun).forEach((pelatihan) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="px-4 py-2">${pelatihan.tahun}</td>
            <td class="px-4 py-2">${pelatihan.nama}</td>
            <td class="px-4 py-
