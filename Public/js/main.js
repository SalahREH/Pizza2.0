
let pizzas = [
    {
        id: 1,
        nombre: "PIZZA PEPPERONI",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Mild and creamy cheese, black olives, zesty, pepperoni & our <br>signature Italian-Style Pizza Sauce.",
        precio: 14.99,
        imagen: "laimagen",
        size:''
    },
    {
        id: 2,
        nombre: "PIZZA de jamon y yogur",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Spiced tomato, onion, parsley, sausage, pickles, mozzarella.",
        precio: 69.99,
        imagen: "laimagen"
    },
    {
        id: 3,
        nombre: "PIZZA de patatas",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "Tomato, olives, artichoke, onion, bacon, mozzarella, cheddar.",
        precio: 42.09,
        imagen: "laimagen"
    },
    {
        id: 4,
        nombre: "PIZZA DE pan",
        subtitulo: "PIZZA OF THE MONTH",
        descripcion: "pan.",
        precio: 1.99,
        imagen: "laimagen"
    },
    
]

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
                    <button class="q-minus">-</button>
                    <input class="q-number" type="text" value="1"  readonly onmousedown="return false"></input>
                    <button class="q-plus">+</button>
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
            <button class="add-chart"><img src="img/iconobotonpricing.png">Add to box</button>
        </div>
    </div>
</div>`
    updateListeners()
}

let numero = 0
printhtml(0);

function adelantar() {
    numero<pizzas.length-1 ? numero++ : '';
    printhtml(numero);
    
}

function retroceder() {
    numero>0 ? numero-- : '';
    printhtml(numero)
    
}


function updateListeners () {
    document.querySelector(".scroll-right").addEventListener("click", adelantar,)
    document.querySelector(".scroll-left").addEventListener("click", retroceder)
    document.querySelector(".size-m").addEventListener("click",togglesizem)
    document.querySelector(".size-l").addEventListener("click",togglesizel)
    document.querySelector(".size-s").addEventListener("click",togglesizes)
    document.querySelector(".size-m").addEventListener("click",togglepizzam)
    document.querySelector(".size-l").addEventListener("click",togglepizzal)
    document.querySelector(".size-s").addEventListener("click",togglepizzas)
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
    document.querySelector(".position1").classList.toggle("pizza-s", true)
    document.querySelector(".position1").classList.toggle("pizza-m", false)
    document.querySelector(".position1").classList.toggle("pizza-l", false)
}

function togglepizzal(){
    document.querySelector(".position1").classList.toggle("pizza-l", true)
    document.querySelector(".position1").classList.toggle("pizza-m", false)
    document.querySelector(".position1").classList.toggle("pizza-s", false)
}

function togglepizzam(){
    document.querySelector(".position1").classList.toggle("pizza-m", true)
    document.querySelector(".position1").classList.toggle("pizza-s", false)
    document.querySelector(".position1").classList.toggle("pizza-l", false)
}

window.onload = function() {

    // alert(Object.values(pizzas));

     //yourFunction(param1, param2);
  cargarDatosIniciales();
 
     //functionTest();
 
 
};
 
 
 
   function functionTest(){
 
      // comando para escribir sobre p   
      document.getElementById('cantPizzas').innerText = "1000";
      
      // comando para capturar p
     var cantidadPizas_temporal =  document.getElementById('cantPizzas').innerText;
   }
 
 
   function control_cantidadPizzas(operacion){
 
     var cantidadPizas_temporal =  document.getElementById('cantPizzas').innerText;
     cantidadPizas_temporal = parseInt(cantidadPizas_temporal);
     
          switch(operacion){
    
             case 'SUMA':
             //
             cantidadPizas_temporal = cantidadPizas_temporal + 1;
             break;
 
             case 'RESTA':
             //
             if (cantidadPizas_temporal != 0)
                 cantidadPizas_temporal = cantidadPizas_temporal - 1;
             break;
     }
     // Sobreescribir P
     document.getElementById('cantPizzas').innerText = cantidadPizas_temporal;
     
  }
function cargarDatosIniciales(){}
