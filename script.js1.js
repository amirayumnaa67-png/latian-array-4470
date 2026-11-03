
const daftarSiswa = ["Alya", "Nadia", "Putri", "Rani", "Salsa"];

const nilaiUjian = [80, 90, 85, 75, 95];

const mataPelajaran = ["Matematika", "Bahasa Indonesia", "PPLG", "Bahasa Inggris"];

console.log(daftarSiswa);
console.log(nilaiUjian);
console.log(mataPelajaran);


const bahasaPemrograman = [
    "JavaScript",
    "PHP",
    "Python",
    "Java",
    "C#"
];

console.log(bahasaPemrograman[0]);
console.log(bahasaPemrograman[2]);
console.log(bahasaPemrograman[4]);
console.log(bahasaPemrograman[7]);


const nilaiSiswa = [75, 80, 65, 90, 85];

nilaiSiswa[1] = 88;
nilaiSiswa[2] = 78;

console.log(nilaiSiswa);
console.log(nilaiSiswa[0]);
console.log(nilaiSiswa[nilaiSiswa.length - 1]);


const daftarProduk = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Flashdisk",
    "Headset",
    "Webcam"
];

console.log(daftarProduk.length);
console.log(daftarProduk.length - 1);
console.log(daftarProduk[daftarProduk.length - 1]);
console.log(daftarProduk[Math.floor((daftarProduk.length - 1) / 2)]);


const namaSiswa = [
    "yeonjun",
    "beomgyu",
    "soobin",
    "taehyun",
    "hueningkai"
];

const nilaiUjianSiswa = [80, 75, 90, 85, 70];

// 1. Menampilkan jumlah siswa
console.log("Jumlah siswa:", namaSiswa.length);

// 2. Menampilkan nama dan nilai siswa pertama
console.log("Siswa pertama:", namaSiswa[0], nilaiUjianSiswa[0]);

// 3. Menampilkan nama dan nilai siswa terakhir
console.log(
    "Siswa terakhir:",
    namaSiswa[namaSiswa.length - 1],
    nilaiUjianSiswa[nilaiUjianSiswa.length - 1]
);

// 4. Mengubah nilai Budi dari 75 menjadi 88
nilaiUjianSiswa[1] = 88;

// 5. Mengubah nilai Eko dari 70 menjadi 82
nilaiUjianSiswa[4] = 82;

// 6. Menampilkan nama dan nilai siswa ketiga
console.log("Siswa ketiga:", namaSiswa[2], nilaiSiswa[2]);

// 7. Menampilkan seluruh data setelah perubahan
console.log("Daftar nama:", namaSiswa);
console.log("Daftar nilai terbaru:", nilaiSiswa);
