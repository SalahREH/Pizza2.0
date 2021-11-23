
let pizzas = [
    {
        id: 1,
        nombre: "PIZZA PEPPERONI",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Mild and creamy cheese, black olives, zesty, pepperoni & our <br>signature Italian-Style Pizza Sauce.",
        precio: 14.99,
        imagen: "laimagen",
        size:'m'
    },
    {
        id: 2,
        nombre: "PIZZA de jamon y yogur",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Spiced tomato, onion, parsley, sausage, pickles, mozzarella.",
        precio: 69.99,
        imagen: "laimagen",
        size:'m'
    },
    {
        id: 3,
        nombre: "PIZZA de patatas",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Tomato, olives, artichoke, onion, bacon, mozzarella, cheddar.",
        precio: 42.09,
        imagen: "laimagen",
        size:'m'
    },
    {
        id: 4,
        nombre: "PIZZA DE pan",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "pan.",
        precio: 1.99,
        imagen: "laimagen",
        size:'m'
    },
    
]

let carritoarray = []

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
                    <p class="q-number">1</p>
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
            <p class="precio">$${pizzas[index].precio}</p>
            <button class="add-cart"><img src="img/iconobotonpricing.png">Add to box</button>
        </div>
    </div>
</div>`
    updateListeners()
}

let section = document.querySelector("section")
function printsection(index){
    section.innerHTML =  `<img src="./img/pizza1.png" class="img-pizza1 position${pizzas[index].id} pizza-${pizzas[index].size}" alt="pizza1">
    <img src="./img/pizza2.png" class="img-pizza2 position${pizzas[index+1].id}" alt="pizza2">
    <img src="./img/pizza3.png" class="img-pizza3 position${pizzas[index+2].id}" alt="pizza3">
    <img src="./img/pizza4.png" class="img-pizza4 position4" alt="pizzaParce">`
    updateListeners()
}


let numero = 0
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


function updateListeners () {
    document.querySelector(".scroll-right").addEventListener("click", adelantar)
    document.querySelector(".scroll-left").addEventListener("click", retroceder)
    document.querySelector(".size-m").addEventListener("click",togglesizem)
    document.querySelector(".size-l").addEventListener("click",togglesizel)
    document.querySelector(".size-s").addEventListener("click",togglesizes)
    // document.querySelector(".scroll-right").addEventListener("click", togglepizzam)
    // document.querySelector(".scroll-left").addEventListener("click", togglepizzam)
    document.querySelector(".size-m").addEventListener("click",sizem)
    document.querySelector(".size-l").addEventListener("click",sizel)
    document.querySelector(".size-s").addEventListener("click",sizes)
    document.querySelectorAll(".chart-link").forEach(element => {
        element.addEventListener("click",cartpage)
    });
    document.querySelector(".add-cart").addEventListener("click",pushcarrito)
}

function sizem(){
    pizzas[numero].size = "m"
    printsection(numero)
}
function sizes(){
    pizzas[numero].size = "s"
    printsection(numero)

}
function sizel(){
    pizzas[numero].size = "l"
    printsection(numero)

}

function pushcarrito(){
    carritoarray.push(pizzas[numero])
    // localStorage.setItem("carrito",carritoarray)
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

// function togglepizzas(){
//     document.querySelector(".position1").classList.toggle("pizza-s", true)
//     document.querySelector(".position1").classList.toggle("pizza-m", false)
//     document.querySelector(".position1").classList.toggle("pizza-l", false)
// }

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
 
   function control_cantidadPizzas(operacion){
 
     var cantidadPizas_temporal =  document.querySelector('.q-number').innerText;
     cantidadPizas_temporal = parseInt(cantidadPizas_temporal);
     
          switch(operacion){
    
             case 'SUMA':
             //
             cantidadPizas_temporal = cantidadPizas_temporal + 1;
             break;
 
             case 'RESTA':
             //
             if (cantidadPizas_temporal != 1)
                 cantidadPizas_temporal = cantidadPizas_temporal - 1;
             break;
     }
     // Sobreescribir P
     document.querySelector('.q-number').innerText = cantidadPizas_temporal;
     
  }
function cargarDatosIniciales(){}

//<input class="q-number" type="text" value="1"  readonly onmousedown="return false"></input>

