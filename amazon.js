// Amazon Shoping
const user = {
    name: 'Colt',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f, g) => (...args) => f(g(...args));

let amazonHistory = []

function purchaseItem(...fns) {
    return fns.reduce(compose)
}


console.log(purchaseItem(
        emptyCart,
        byItem,
        taxOnItem,
        additemTocart
    )

    (user, {
        name: 'laptop',
        price: 455
    }))

//function of adding items to cart 
function additemTocart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {
        cart: updateCart
    })
}


// funtion for applying tax on items
function taxOnItem(user) {
    amazonHistory.push(user)

    const {
        cart
    } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })

    return Object.assign({}, user, {
        cart: updatedCart
    })
}

// function for buying item
function byItem(user) {
    amazonHistory.push(user)

    return Object.assign({}, user, {
        purchases: user.cart
    })
}

// function of showing cart after purchases
function emptyCart(user) {
    amazonHistory.push(user)

    return Object.assign({}, user, {
        cart: []
    })
}

console.log(amazonHistory)