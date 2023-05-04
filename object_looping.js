// object-looping

var shoppingCart = {

    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 5,
    shoes: 25,
    shirt: 10
}

var keys = Object.keys(shoppingCart);

var val = Object.values(shoppingCart);

for (let i = 0; i < keys.length; i++) {

    const element = keys[i];
    const getResult = shoppingCart[element];

    console.log(element,":",getResult);
}

/* ans :-

books : 3
sunglass : 1
keyboard : 5
mouse : 1
pen : 5
shoes : 25
shirt : 10

*/ 