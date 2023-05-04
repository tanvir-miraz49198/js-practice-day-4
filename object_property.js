// object property

var shoppingCart = {

    books: 3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:5
}

var properties = Object.keys(shoppingCart);
console.log(properties)
// ans :- [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

var propertiesValues = Object.values(shoppingCart);

console.log(propertiesValues);
//  ans :- [ 3, 1, 5, 1, 5 ]

// by changing only properties name can get the value

var valueSearch = 'keyboard';
propertiesName = shoppingCart[valueSearch];
console.log(valueSearch, propertiesName)
// ans :- keyboard 5

var booksCount = shoppingCart.books;
console.log('we have ',booksCount,'books'); 
// ans :- we have  3 books

var penCount = shoppingCart["pen"];
console.log('we have ',penCount,'pens')
// ans :- we have  5 pens

