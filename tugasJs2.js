//No 1
// //1.1 toString() merubah array menjadi string
// const animal = ["Cat", "Cow", "Bird"];
// const hasil = animal.toString();
// console.log(hasil);

// //1.2 pop() mengeluarkan elemen terakhir dari array
// const animal = ["Cat", "Cow", "Bird"];
// const hasil = animal.pop();
// console.log(hasil);
// console.log(animal);

//1.3 push() memasukkan elemen baru dalam array (paling belakang)
// const animal = ["Cat", "Cow", "Bird"];
// const hasil = animal.push("Goat");
// console.log(animal);

//1.4 indexOf() method yang me-return index dari suatu value
// me-return -1 jika value tidak ditemukan. Mulai dari kiri ke kanan
// const animal = ["Cat", "Cow", "Bird"];
// const index = animal.indexOf("Bird");
// console.log(index);

//1.5 filter() membuat array baru yang berisikan element yang sudah melewati eksekusi syarat dalam function
// const ages = [10, 33, 16, 44];
// const hasil = ages.filter(checkAge);

// function checkAge(age) {
//   return age > 13;
// }
// console.log(hasil);

//1.6 toLowerCase() Mengubah string menjadi huruf kecil
// let text = "Hello World!";
// let hasil = text.toLowerCase();
// console.log(hasil);

//1.7 toUpperCase() Mengubah string menjadi huruf kapital
// let text = "Hello World!";
// let hasil = text.toUpperCase();
// console.log(hasil);

//1.8 replace() Mengganti suatu value dengan value lain
//sensitive case pakai regex /i
// let text = "Hello World!";
// let newText = text.replace(/WORLD/i, "Pijar");
// console.log(newText);

//1.9 includes() Mengecek apakah suatu string memiliki suatu string yang dicari
// let text = "Hello World!";
// let newText = text.includes("World");
// console.log(newText);

//1.10 concat() menggabungkan dua atau lebih string
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

//No 2
// const name = [
//   "Abigail", "Alexandra", "Alison",
//   "Amanda", "Angela", "Bella",
//   "Carol", "Caroline", "Carolyn",
//   "Deirdre", "Diana", "Elizabeth",
//   "Ella", "Faith", "Olivia", "Penelope"];

// const searchName = (input, limitData, callback) =>{
//   const nameSearch = name.filter((names) => names.toLowerCase().indexOf(input.toLowerCase()) > -1)
//   if (nameSearch.length > limitData) {
//     nameSearch.length = limitData
//     callback(nameSearch)
//   }else{
//     callback(nameSearch)
//   }

// }
// const printSearch = (param) =>{

//   console.log(param);
// }

// searchName("An", 4, printSearch)


//No 3 
// const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

//     if (typeof (nilaiAwal) === "number" && typeof (nilaiAkhir) === "number" && typeof (dataArray) === "object") {
//         const cariData = dataArray.sort((a, b) => a - b).filter((data) => {
        
//             return data > nilaiAwal && data < nilaiAkhir;
//         })
//         if (nilaiAwal > nilaiAkhir) {
//             console.log("Nilai akhir harus lebih besar dari nilai awal");
//         } else if (dataArray.length < 5) {
//             console.log("Jumlah angka dalam dataArray harus lebih dari 5");
//         } else if (cariData.length === 0) {
//             console.log("Nilai tidak ditemukan");
//         } else {
//             console.log(cariData);
//         }
//     } else {
//         console.log("Masukkan data yang benar");
//     }

// }

// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(5, 17, [2, 25, 4]);
// seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
// seleksiNilai(5, "20", [2, 25, 4, 14, 17, 30, 8]);


