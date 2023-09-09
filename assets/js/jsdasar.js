// Contoh 1: Menampilkan pesan di console
console.log("Hello World");

// Contoh 2: Menggunakan variable
var nama = "Putri Dewi Hendista";
console.log(nama);

let alamat = "Banyuwangi";
console.log(alamat);

const umur = 20;
console.log(umur);

// Contoh 3: Data types Number
console.log("Putri" + 1);
console.log("Dewi Hendista" + (2 * 3));
console.log(NaN * 5);

// Contoh 4: Data types BigInt
const BigInt = 1234567890n;
console.log(BigInt);

// Contoh 5: Data types String
const answer1 = "Iya Benar";
const answer2 = "Ini Putri Dewi Hendista";
const answer3 = "Ini Putri Dewi Hendista";
console.log(answer1);
console.log(answer2);
console.log(answer3);

// Contoh 6: Data types Boolean
var a = true;
var b = false;
console.log(a.toString());
console.log(b.toString());

// Contoh 7: Data types null
let boyfriend = null;
console.log(boyfriend);

// Contoh 8: Data types Undefined
let car;
console.log(car);

// Contoh 9: Data types Object
let mahasiswa = {
    nama: "Putri Dewi Hendista",
    umur: 20,
    isMarried: false
};
console.log(mahasiswa);

// Contoh 10: Type conversion String
let bilangan = 1;
console.log(bilangan);
console.log(typeof bilangan);

let konversiBilangan = String(bilangan);
console.log(konversiBilangan);
console.log(typeof konversiBilangan);

// Contoh 11: Type conversion Numeric
let bilangan1 = "1";
let bilangan2 = 7;
console.log(bilangan1);
console.log(typeof bilangan1);
console.log(bilangan2);
console.log(typeof bilangan2);

let penjumlahan = Number(bilangan1) + (bilangan2);
console.log(penjumlahan);
console.log(typeof penjumlahan);

// Contoh 12: Type conversion Boolean
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

// Contoh 13: Aritmethic operator
let bilangan3 = 4;
let bilangan4 = 5;
console.log(bilangan3 * bilangan4);

// Contoh 14: Assignment operator
var x = 8;
x += 5;
console.log(x);

// Contoh 15: Comparison operator
let c = 2;
let d = 9;
console.log(c < d);

// Contoh 16: Logical operator
let e = true;
let f = false;
console.log(e && f);

// Contoh 17: Ternary operator
let g = 3;
let h = 3;
console.log(g = h ? "yes" : "no");

// Contoh 18: Pop up alert
alert("Selamat Datang di Website Pribadi Saya");

// Contoh 19: Pop up prompt
let response = prompt("Bagaimana kabarmu hari ini?");
alert("Jawabannya adalah " + response);

// Contoh 20: Pop up confirm
// let response = confirm("Maukah keluar malam ini?");
// alert("Jawabannya: " + response);

// Contoh 21: Conditional If-Else
const age = 20

if (age >= 23) {
    console.log("Sudah dewasa");
} else {
    console.log("Masih kecil");
}

// Contoh 22: Conditional Switch
let color = "blue";

switch (color) {
    case "blue":
        alert("I love blue");
        break;
    case "white":
        alert("I love white");
        break;
    default:
        alert("I dont know what color it is!");
        break;
}

// Contoh 22: Loop for
for (let i = 0; i < 3; i++) {
    console.log(`Urutkan ${i}`);
}