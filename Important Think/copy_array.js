// carefull when copy array 

// 1. Bad example 
const nama = ["budi", "abdul"];
const namaBadboy = nama; // <= ini contoh salah karena variabel nama akan mereference variabel namaBadboy sehingga ketika
// namaBadboy terdapat perubahan variabel nama juga (so weird)
namaBadboy.push('yoga',"rizky");

console.log(nama);
console.log(namaBadboy);

console.log("-----======= SECTION  =======------")

// 2. Best practice
const nama2 = ["budi", "abdul"];
const namaBadboy2 = [...nama2]; // <= ini contoh benar setiap value nama dirangkai ulang di variabel namaBadboy

namaBadboy2.push('yoga',"rizky");

console.log(nama2);
console.log(namaBadboy2);