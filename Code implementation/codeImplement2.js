const pijarFood = (price, voucher, distance, tax) => {
    let disc = 0;
    let distancePrice = 0;

    if (voucher.toUpperCase() === 'PIJARFOOD5' && price >= 50000) {
        disc = price * 50 / 100;
        if (disc >= 50000) {
            disc = 50000;
        }
    } else if (voucher.toUpperCase() === 'DITRAKTIRPIJAR' && price >= 25000) {
        disc = price * 60 / 100;
        if (disc >= 30000) {
            disc = 30000;
        }
    }
    if (distance <= 2) {
        distancePrice = 5000
    } else if (distance >= 3) {
        distancePrice = 5000 + (distance - 2) * 3000;
    }
    if (tax === true) {
        tax = price * 5 / 100;
    } else if (tax === false) {
        tax = 0;

    }
    let totalPrice = (price - disc) + distancePrice + tax;
    console.log(`
        Harga       : ${price}
        Potongan    : ${disc}
        Biaya Antar : ${distancePrice}
        Pajak       : ${tax}
        SubTotal    : ${totalPrice}`);

}

pijarFood(75000, 'PIJARFOOD5', 5, true)
pijarFood(75000, 'DITRAKTIRPIJAR', 5, false)
pijarFood(20000, 'DITRAKTIRPIJAR', 5, false)