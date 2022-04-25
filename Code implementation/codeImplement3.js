const devideAndSort = (num) => {
    if (typeof (num) === 'number') {
        let result = '';
        let digits = num.toString().split('0');
        digits.forEach(digit => {
            result += digit.split('').sort().join('')
        });
        result = parseInt(result);
        console.log(result);
    } else {
        console.log('Input harus berupa number');
    }

}
devideAndSort(5956560159466056)

