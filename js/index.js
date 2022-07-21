
function agregarProducto() {
    prenda = prompt("¿Que tipo de prenda sera?")
    marca = prompt("¿Que marca seran?")
    modelo = prompt("¿Y que modelo?")
    precio = prompt("¿Que precio tendran?")
    stock = prompt("¿Cuantos pares habra?")
    producto.push(new Productos(marca, prenda, modelo, precio, stock))
}

const botonConsultar = document.getElementById("botonConsultar")
botonConsultar.addEventListener("click", consultarProductos)
function consultarProductos() {
    const consulta = document.getElementById("ConsultarProducto").value;
    const resultado = producto.find((el) => el.prenda === consulta)
    resultado ? toastswa("Si, tenemos!", "success")
        : toastswa("No hemos encontrado lo que buscas :C", "error")
}

// const compraAsistida = document.getElementById("compraAsistida")
// compraAsistida.addEventListener("click", asistentedeCompra)
// const botonConsulta = document.getElementById("botonConsulta")
// botonConsulta.addEventListener("click", consultar)
// function consultar() {
//     let consulta = prompt("Bienvenido a nuestra tienda de Ropa, podes consultarnos por cualquier prenda de ropa y te respondemos si tenemos!")
//     const resultado = producto.find((el) => el.prenda === consulta)
//     resultado ? alert("Si, tenemos!") + resultado1 : alert("No, no tenemos")
// }
function asistentedeCompra() {
    let cliente = prompt("Gracias por apretar este boton, Soy Kal y te mostraremos las Zapatillas que tenemos!\n¿De que marca estas buscando?\n ¿Nike o Vans?")
    switch (cliente) {
        case "Nike":
            let modelo = prompt("¿Que modelo te gustaria?\n 1- Air Jordan 1 Mid\n 2- Air Jordan 1 High OG\n 3- Air Jordan 1 Retro High")
            modelo = parseInt(modelo)
            switch (modelo) {
                case 1:
                    asistente("¿Entonces compraras las Air Jordan 1 Mid?")
                    // confirm("¿Entonces compraras las Air Jordan 1 Mid?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 2:
                    asistente("¿Entonces compraras las Air Jordan 1 High OG?")
                    // confirm("¿Entonces compraras las Air Jordan 1 High OG?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 3:
                    asistente("¿Entonces compraras las Air Jordan 1 Retro High?")
                    // confirm("¿Entonces compraras las Air Jordan 1 Retro High?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                default:
                    swa("Error", "Ingrese un numero existente", "error")
                    // alert("Error, ingrese un numero existente.")
                    break;
            }
            console.table(producto)
            break;
        case "nike":
            let modelo1 = prompt("¿Que modelo te gustaria?\n 1- Air Jordan 1 Mid\n 2- Air Jordan 1 High OG\n 3- Air Jordan 1 Retro High")
            modelo1 = parseInt(modelo1)
            switch (modelo1) {
                case 1:
                    asistente("¿Entonces compraras las Air Jordan 1 Mid?")
                    // confirm("¿Entonces compraras las Air Jordan 1 Mid?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 2:
                    asistente("¿Entonces compraras las Air Jordan 1 High OG?")
                    // confirm("¿Entonces compraras las Air Jordan 1 High OG?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 3:
                    asistente("¿Entonces compraras las Air Jordan 1 Retro High?")
                    // confirm("¿Entonces compraras las Air Jordan 1 Retro High?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                default:
                    swa("Error", "Ingrese un numero existente", "error")
                    // alert("Error, ingrese un numero existente.")
                    break;
            }
            console.table(producto)
            break;
        case "Vans":
            let modelo2 = prompt("¿Que modelo te gustaria?\n 1- Vans Old School\n 2- Vans Authentic\n 3- Vans Classic")
            modelo2 = parseInt(modelo2)
            switch (modelo2) {
                case 1:
                    asistente("¿Entonces compraras las Vans Old School?")
                    // confirm("¿Entonces compraras las Vans Old School?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 2:
                    asistente("¿Entonces compraras las Vans Authentic?")
                    // confirm("¿Entonces compraras las Vans Authentic?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 3:
                    asistente("¿Entonces compraras las Vans Classic?")
                    // confirm("¿Entonces compraras las Vans Classic?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                default:
                    swa("Error", "Ingrese un numero existente", "error")
                    // alert("Error, ingrese un numero existente.")
                    break;
            }
            console.table(producto)
            break;
        case "vans":
            let modelo3 = prompt("¿Que modelo te gustaria?\n 1- Vans Old School\n 2- Vans Authentic\n 3- Vans Classic")
            modelo3 = parseInt(modelo3)
            switch (modelo3) {
                case 1:
                    asistente("¿Entonces compraras las Vans Old School?")
                    // confirm("¿Entonces compraras las Vans Old School?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 2:
                    asistente("¿Entonces compraras las Vans Authentic?")
                    // confirm("¿Entonces compraras las Vans Authentic?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                case 3:
                    asistente("¿Entonces compraras las Vans Classic?")
                    // confirm("¿Entonces compraras las Vans Classic?")
                    // alert("Gracias por su compra, que las disfrute!")
                    // alert("Para agradecer su compra le permitiremos agregar un producto!")
                    // agregarProducto()
                    break;
                default:
                    alert("Error, ingrese un numero existente.")
                    break;
            }
            console.table(producto)
            break;
        default:
            swa("Error", "Ingrese un numero existente", "error")
            // alert("Error, ingrese el nombre correcto.")
            break;
    }
}

// function listarProductos() {
//     producto.forEach((producto) => {
//         const fila = `<div class="producto">
//                     <div class=container-item>${producto.prenda} </div>
//                     <div class=container-item>${producto.marca} </div>
//                     <div class=container-item>${producto.modelo} </div>
//                     <div class=container-item>${producto.precio} </div>
//                     </div>
//                     `
//         document.getElementById("container").innerHTML += fila
//     })

// }
// listarProductos()
// const pedido = document.getElementById("pedido")
// const formulario = document.getElementById("formulario")
// formulario.addEventListener("submit", validarFormulario)
// function validarFormulario(e) {
//     if (formulario[0].value == 0) {
//         // alert("Error")
//         e.preventDefault()
//         swa("Escriba algo", "", "error")
//     } else {
//         e.preventDefault()
//         swa("", "Tu peticion: " + formulario[0].value + " sera tomada en cuenta. Muchas gracias!", "success",)
//     }
// }


const opcionesPrenda = document.querySelector("#opciones-prenda")
const opcionesMarcas = document.querySelector("#opciones-marcas")
const opcionesModelo = document.querySelector("#opciones-modelo")
const opcionesPrecio = document.querySelector("#opciones-precio")

opcionesMarcas.innerHTML = cargarMarcas()

function cargarMarcas() {
    let opcion
    producto.forEach(element => {
        opcion += `<option>${element.prenda} ${element.marca}  ${element.modelo} ${element.precio}</option>`
    })
    return opcion
}

const guardarLocal = (clave, valor) => { sessionStorage.setItem(clave, valor) };
guardarLocal("productos", JSON.stringify(producto))

const swa = (titulo, mensaje, icono,) => {
    Swal.fire({
        title: titulo || '',
        text: mensaje,
        icon: icono,
    })
}
const toastswa = (titulo, icono) => {
    Swal.fire({
        title: titulo,
        showConfirmButton: false,
        timer: 2500,
        position: 'top',
        icon: icono,
    })
}
const asistente = (titulo) => {
    Swal.fire({
        title: titulo,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Gracias por su compra!',
                icon: 'success',
                text: 'Disfrutela!'
            })
        }
    })
}

const url = "js/ropa.json"
containerRopa = document.getElementById("container-ropa")
fetch(url)
    .then(Response => Response.json())
    .then(data => {
        data.forEach((post) => {
            const div = document.createElement("div")
            div.className = "container-product"
            div.innerHTML = ` 
                            <img src="./images/${post.imagen}">
                            <div class="container-text">
                            <p>${post.prendas}</p>
                            <p>${post.marcas}</p>
                            <p>${post.modelos}</p>
                            <p>${post.precios}</p>
                            </div>
                            <button class="boton-compra comprarrProducto">Agregar al carrito</button>
                            `
            containerRopa.append(div)
        })
    })


contadorCarrito = document.getElementById("numero-cart")
let valor = 0
const selectorProducto = document.getElementById("container-ropa")
selectorProducto.addEventListener("click", () => { valor++; contadorCarrito.innerHTML = valor })
const comprarProducto = document.getElementById("comprarProducto")
comprarProducto.addEventListener("click", () => {
    toastswa("Gracias por su compra!", "success",)
    contadorCarrito.innerHTML = ""
})
const comprarProducto1 = document.getElementById("comprarProducto1")
comprarProducto1.addEventListener("click", () => {
    toastswa("Gracias por su compra!", "success",)
})
const robotAsistente = document.querySelector(".robotAsistente")
robotAsistente.addEventListener("click", asistentedeCompra)