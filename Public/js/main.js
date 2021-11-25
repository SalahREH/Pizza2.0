
let pizzas = [
    {
        id: 1,
        nombre: "PIZZA PEPPERONI",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Mild and creamy cheese, black olives, zesty, pepperoni & our <br>signature Italian-Style Pizza Sauce.",
        precio: {S: 14.99,  M: 19.99, L: 24.99,},
        imagen: "laimagen",
        size:'M',
        quantity: 1
    },
    {
        id: 2,
        nombre: "PIZZA SUPREMA",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Spiced tomato, onion, parsley, sausage, pickles, mozzarella.",
        precio: {S: 42.09,  M: 69.99, L: 84.99},
        imagen: "laimagen",
        size:'M',
        quantity: 1
    },
    {
        id: 3,
        nombre: "PIZZA DE JAMON Y QUESO",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Tomato, olives, artichoke, onion, bacon, mozzarella, cheddar.",
        precio: {S: 30.99,  M: 42.09, L: 59.99},
        imagen: "laimagen",
        size:'M',
        quantity: 1
    },
    {
        id: 4,
        nombre: "PIZZA DE PAN",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "pan.",
        precio: {S: 1.99,  M: 2.99, L: 3.99},
        imagen: "laimagen",
        size:'M',
        quantity: 1
    },
    
]
let numero = 0
let size = pizzas[numero].size
let selectedsize = 'M';
let carrito = []

let main = document.querySelector("main")
function printhtml(index){
    main.innerHTML = `<div class="pizza1 show">
    <div class="title-pizza">
        <h1>${pizzas[index].nombre}</h1> <h2>${pizzas[index].subtitulo}</h2>
    </div>
    <div class="info">
        <div class="desc">
            <div class="ingredients">
                <h3>INFORMATION</h3>
                <p class="description">${pizzas[index].descripcion}</p>
                <button class="topping">
                    + Add toppings
                </button>       
            </div>
            <div class="quantity">
                <h3>Quantity</h3>
                <div class="quantity-buttons">
                    <button class="q-minus" onclick="control_cantidadPizzas('RESTA')">-</button>
                    <p class="q-number">${pizzas[index].quantity}</p>
                    <button class="q-plus" onclick="control_cantidadPizzas('SUMA')">+</button>
                </div>
            </div>
        </div>
        <div class="picking-size">
            <div class="size-buttons">
                <button class="size-s">S</button>
                <button class="size-m active">M</button>
                <button class="size-l">L</button>
            </div>
            <div class="pick-arrows">
                <button class="scroll-right">
                    <img src="./img/367376.svg" alt="flechita">
                </button>
                <button class="scroll-left">
                    <img src="./img/367376.svg" alt="flechita">
                </button>
            </div>
        </div>
        <div class="pricing">
            <h3>PRICE</h3>
            <p class="precio">$${pizzas[index].precio[size]}</p>
            <button class="add-cart" onclick="addToCart(pizzas[numero].id)"><img src="img/iconobotonpricing.png">Add to box</button>
        </div>
    </div>
</div>`
    updateListeners()
}


let section = document.querySelector("section")
function printsection(index){


    section.innerHTML =  `<img src="./img/pizza1.png" class="img-pizza1 position${pizzas[index].id} pizza-${pizzas[index].size}" alt="pizza1">
    <img src="./img/pizza2.png" class="img-pizza2 position2" alt="pizza2">
    <img src="./img/pizza3.png" class="img-pizza3 position3" alt="pizza3">
    <img src="./img/pizza4.png" class="img-pizza4 position4" alt="pizzaParce">`
    updateListeners()
}

let cartItemsEl  = document.querySelector(".list-pizza")
function printCartItems(){
    cartItemsEl.innerHTML =  ""
    carrito.forEach((pizza)  => {
    cartItemsEl.innerHTML += `
            <div class="list-pizza-selected">
                <div class="pizza-info">
                    <div class="pizza-selected-text">
                        <h2>${pizza.nombre}</h2>
                        <h3>${pizza.subtitulo}</h3>
                        <p>
                            ${pizza.descripcion}
                        </p>
                        <button>Add Toppings</button> <!--botón sin funcionalidad-->
                    </div>
                </div>
                <div class="pizza-selected-quantity">
                    <button onclick="changeQuantity('RESTA', ${pizza.id})">-</button>
                    <p>${pizza.quantity}</p>
                    <button onclick="changeQuantity('SUMA', ${pizza.id})">+</button>
                </div>
                <div class="pizza-selected-price">
                    <button onclick="removeFromCart(${pizza.id})">x</button>
                    <p>
                        Price: $${pizza.precio}
                    </p>
                </div>
            </div>
    `
    })
}

function printprice(){
    document.querySelector(".precio").innerText = `$${pizzas[numero].precio[size]}`
}

let subtotalEl = document.querySelector(".subtotal");
function printsubtotal(){
    let totalPrice = 0;
    carrito.forEach((pizza)=>{
        totalPrice +=  pizza.precio * pizza.quantity
    })
    subtotalEl.innerText =  `Total price: $${totalPrice.toFixed(2)}`
}

printhtml(0);
printsection(0);

function adelantar() {
    numero<pizzas.length-1 ? numero++ : '';
    printhtml(numero);
    printsection(numero)
    
}

function retroceder() {
    numero>0 ? numero-- : '';
    printhtml(numero)
    printsection(numero)
}

function addToCart(id){
    let item  = pizzas.find((pizza) =>  pizza.id === id)
    console.log(item)
    carrito.some((pizza) => pizza.id  ===  id)? changeQuantity('SUMA', id) : carrito.push(item);
    changeprice(id)
    updateCart()
}

function removeFromCart(id){
    carrito = carrito.filter(pizza => pizza.id !== id)
    updateCart();
}

function changeprice(id){
    let cartItem = carrito.find((pizza)  => pizza.id === id)
    cartItem.precio = cartItem.precio[size]
}

function changeQuantity(action, id){
    carrito = carrito.map((pizza) => {
        let oldquantity = pizza.quantity
        
        if (pizza.id  === id){
            if (action  === "RESTA" && oldquantity > 1){
                oldquantity--
            }
            else if(action === "SUMA"){
                oldquantity++
            }
        }
        // if (pizza.id  === id){
        //     switch(action){
        //         case  "SUMA" :
        //             oldquantity++
        //         break;
        //         case  "RESTA" :
        //             oldquantity--
        //         break;
        //     }
        // }

        
        return {
            ...pizza,
            quantity: oldquantity
        }
    })
    updateCart()
}

function updateCart(){
    printCartItems()
    printsubtotal()
}

function updateListeners () {
    document.querySelector(".scroll-right").addEventListener("click", adelantar)
    document.querySelector(".scroll-left").addEventListener("click", retroceder)
    document.querySelector(".size-m").addEventListener("click",togglesizem)
    document.querySelector(".size-l").addEventListener("click",togglesizel)
    document.querySelector(".size-s").addEventListener("click",togglesizes)
    // document.querySelector(".scroll-right").addEventListener("click", togglepizzam)
    // document.querySelector(".scroll-left").addEventListener("click", togglepizzam)
    document.querySelector(".size-m").addEventListener("click",function () {changesize("M")})
    document.querySelector(".size-l").addEventListener("click",function () {changesize("L")})
    document.querySelector(".size-s").addEventListener("click",function () {changesize("S")})
    document.querySelectorAll(".chart-link").forEach(element => {
        element.addEventListener("click",cartpage)
    });
}

function changesize(value){
    size = value
    printprice()
    printsection(numero)
}



function togglesizel(){
    document.querySelector(".size-l").classList.toggle("active", true)
    document.querySelector(".size-m").classList.toggle("active", false) 
    document.querySelector(".size-s").classList.toggle("active", false)
}
function togglesizes(){
    document.querySelector(".size-s").classList.toggle("active", true)
    document.querySelector(".size-m").classList.toggle("active", false) 
    document.querySelector(".size-l").classList.toggle("active", false) 
}
function togglesizem(){
    document.querySelector(".size-m").classList.toggle("active", true)
    document.querySelector(".size-s").classList.toggle("active", false)
    document.querySelector(".size-l").classList.toggle("active", false)
}

function togglepizzas(){
    document.querySelector(".position1").className = ""
    document.querySelector(".position1").classList.toggle("pizza-m", false)
    document.querySelector(".position1").classList.toggle("pizza-l", false)
}

// function togglepizzal(){
//     document.querySelector(".position1").classList.toggle("pizza-l", true)
//     document.querySelector(".position1").classList.toggle("pizza-m", false)
//     document.querySelector(".position1").classList.toggle("pizza-s", false)
// }

// function togglepizzam(){
//     document.querySelector(".position1").classList.toggle("pizza-m", true)
//     document.querySelector(".position1").classList.toggle("pizza-s", false)
//     document.querySelector(".position1").classList.toggle("pizza-l", false)
// }
function cartpage(){
    document.querySelector(".main-page").classList.toggle("redirect")
    document.querySelector(".cart-page").classList.toggle("redirect")
}



window.onload = function() {

    // alert(Object.values(pizzas));

     //yourFunction(param1, param2);
  cargarDatosIniciales();
 
     //functionTest();

};
   function printquantity(){
       // Sobreescribir P
     document.querySelector('.q-number').innerText = pizzas[numero].quantity;
   }

   function control_cantidadPizzas(operacion){
    // let cantidadPizas =  pizzas[numero].quantity;
        switch(operacion){
    
            case 'SUMA':
                //
                pizzas[numero].quantity = pizzas[numero].quantity + 1;
            break;
 
            case 'RESTA':
                //
                if (pizzas[numero].quantity > 1)
                pizzas[numero].quantity = pizzas[numero].quantity - 1;
            break;
     }
    printquantity()
  }

function cargarDatosIniciales(){}


