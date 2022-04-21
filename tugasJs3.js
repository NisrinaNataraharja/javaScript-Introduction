//No 1
// const cekHariKerja = (day) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//             let cek = dataDay.find((item) => item.toLowerCase() === day.toLowerCase())
//             if (cek) {
//                 resolve(cek)
//             } else {
//                 reject(new Error('Hari ini bukan hari kerja'))
//             }
//         }, 3000);
//     })
// }


// cekHariKerja('Sabtu')
// .then((resolve)=>{
//     console.log(resolve+" adalah hari kerja");
// })
// .catch((Error)=>{
//     console.log(Error);
// })
// then: aksi ketika sebuah promise terpenuhi dan menjalankan yang ada didalam resolve 
// catch: aksi ketika sebuah promise tidak terpenuhi dan menjalankan yang ada didalam 
//reject


// const cekHari = async(day1, day2) => {
//     try {
//         const cek1 = await cekHariKerja(day1)
//         const cek2 = await cekHariKerja(day2)
//         console.log(cek1+" dan "+cek2+" adalah hari kerja");

//     } catch (Error) {
//         console.log(Error);

//     }
// }
// cekHari('selasa', 'senin')

// Untuk menangani Error (error handling) pada async/await bisa menggunakan try catch
// try : menyisipkan code javascript yang mungkin terjadi error dan jika berhasil 
//menampilkan resolve dan jika tidak berhasil menampilkan reject
// catch : menangkap error yang terjadi pada blok Try apabila pada blok Try,  
//error muncul dan menjalankan yang ada didalam reject


//No 2
// const getMonth =(callback) =>{
//     setTimeout(() => {
//        let error = true
//        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Desember']
//        if (!error) {
//            callback(null,  month)
//        } else {
//            callback(new Error('Sorry Data Not Found'), [])
//        }
//     }, 4000);
// }

// const getData =(err, data)=>{
//     if (!err) {
//         data.map((item)=> {
//             console.log(item);
//         })
//     }else{
//         console.log(err);
//     }

// }
// getMonth(getData)


//No 3
// const checkAdult = (num) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if (typeof (num) === 'number' && num > 18) {
//                 resolve('Anda sudah dewasa')
//             } else {
//                 reject(new Error('Anda belum dewasa'))
//             }
//         }, 2000);
//     })
// }

// const cekAges = async(age) => {
//     try {
//         const cek = await checkAdult(age)
//         console.log(cek);

//     } catch (Error) {
//         console.log(Error);

//     }
// }
// cekAges(15)

// 3.2
// const primeNumber = (num) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let divider = 0;
//             for (let i=1; i <= num; i++) {
//                 if (num%i == 0 ) {
//                     divider++
//                 }
//             } 
//             if (divider == 2) {
//                 resolve(num+" Adalah bilangan prima")
//             }else{
//                 reject(new Error(num+' Bukan bilangan prima'))
//             }
//         }, 2000);
//     })
// }

// const primeNumberCheck = async(num) => {
//     try {
//         const cek = await primeNumber(num)
//         console.log(cek);

//     } catch (Error) {
//         console.log(Error);

//     }
// }
// primeNumberCheck(8)

//3.3
// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         let err = false
//         const fetchPromise = fetch(url)
//         setTimeout(() => {
//             if (!err) {
//                 resolve(fetchPromise)
//             } else {
//                 reject(new Error('Data anda salah'))
//             }
//         }, 2000);
//     })
// }

// getData("https://genshinlist.com/api/characters")
//     .then(resolve => resolve.json())
//     .then((resolve) => {
//         const datatemp = []
//         resolve.map((data) => {
//             datatemp.push({
//                 name: data.name,
//                 description: data.description
//             })
//         })
//         console.log(datatemp);
//     })

//     .catch((Error) => {
//         console.log(Error)
//     })


//No 4
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=> response.json())
// .then((response)=>{
//     const names = response.map(person => person.name)
//     console.log(names);

//  })

// fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Something went wrong');
//   })
//   .then((response)=>{
//         const names = response.map(person => person.name)
//         console.log(names);
//     })

//   .catch((Error) => {
//     console.log(Error)
//   })

