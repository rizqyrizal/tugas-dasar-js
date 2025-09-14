function hitungNilaiAkhir(tugas, uts, uas) {
    return  (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
}
function tentukanGrade(nilaiAkhir) {
    let grade;

    if (nilaiAkhir >= 85) {
        grade = "A";
    } else if (nilaiAkhir >= 70) {
        grade = "B";
    } else if (nilaiAkhir >= 55) {
        grade = "C";
    } else if (nilaiAkhir >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    return grade;
}


const nilaimahasiswa = [
    { nama: "Mahasiswa 1", tugas: 80, uts: 75, uas: 90 },
    { nama: "Mahasiswa 2", tugas: 60, uts: 70, uas: 65 },
    { nama: "Mahasiswa 3", tugas: 85, uts: 88, uas: 92 },
    { nama: "Mahasiswa 4", tugas: 40, uts: 50, uas: 55 },
    { nama: "Mahasiswa 5", tugas: 30, uts: 45, uas: 35 }
];
for (let i = 0; i < nilaimahasiswa.length; i++) {
    const mahasiswa = nilaimahasiswa[i];
    const nilaiAkhir = hitungNilaiAkhir(mahasiswa.tugas, mahasiswa.uts, mahasiswa.uas);
    const grade = tentukanGrade(nilaiAkhir);


    console.log(
        "Nama: " + mahasiswa.nama +
        " | Nilai Akhir: " + nilaiAkhir +
        " | Grade: " + grade
    );
}

// FUNGSI nilai(tugas, uts, uas):
//   nilaiakhir = (0.3 * tugas) + (0.3 * uts) + (0.4 * uas)
//   grade = ""
//   jika nilaiakhir >= 85
//     grade = "A"
//   lai jika nilaiakhir >= 70
//     grade = "B"
//   lai jika nilaiakhir >= 55
//     grade = "C"
//   lai jika nilaiakhir >= 40
//     grade = "D"
//   lainya
//     grade = "E"
//   tampilkan "Nilai Akhir: " + nilaiakhir + " | Grade: " + grade

// PANGGIL nilai(80, 75, 90)
// PANGGIL nilai(60, 70, 65)