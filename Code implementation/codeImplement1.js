//No 1.1

function reverseString(str) {
    let currentString = str;
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += currentString[i];
    }
    if (newString === str) {
        return `${str} adalah polindrom`;
    } else {
        return `${str} bukan polindrom`;
    }
}

//console.log(reverseString("malam"));
//console.log(reverseString("makan"));


//1.2

function reverseWords(str) {

    let hasil = ""
    let kata = str.split(" ")
    for (let i = kata.length - 1; i >= 0; i--) {
        hasil += kata[i] + " "
    }

    return hasil;
}
//console.log(reverseWords("saya belajar javascript"));