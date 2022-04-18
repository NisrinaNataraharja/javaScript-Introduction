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

//1.4 


//No 2
// let name = [
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

// searchName("an", 2, printSearch)


//No 3 
// const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {

//   if (typeof(nilaiAwal)==="number" && typeof(nilaiAkhir)==="number" && typeof(dataArray)==="object") {
//     const cariData = dataArray.filter((data) => {
//       dataArray.sort((a, b) => a - b);
//       return data > nilaiAwal && data < nilaiAkhir;
//     }) 
//     if (nilaiAwal > nilaiAkhir) {
//       console.log("Nilai akhir harus lebih besar dari nilai awal");
//     }else if(dataArray.length < 5){
//       console.log("Jumlah angka dalam dataArray harus lebih dari 5");
//     }else if(cariData.length === 0){
//       console.log("Nilai tidak ditemukan");
//     }else{
//       console.log(cariData);
//     }
//     //console.log(cariData);
//   } else {
//     console.log("masukkan data yang benar");
//   }

// }

// seleksiNilai(1, 2 , [2, 25, 4, 14, 1]);


