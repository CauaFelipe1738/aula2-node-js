const Product = require('./models/Product');

const paoFrances = new Product(
    1,
    'Pão Francês',
    'Pão fresquinho do dia',
    0.5,
    1,
    'pao-frances.jpg'
);

console.log(paoFrances.getFormattedPrice);
console.log(paoFrances.isAvailable());