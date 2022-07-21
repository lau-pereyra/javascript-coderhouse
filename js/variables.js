const carrito = []
const producto = [
    { "marca": "Vans", "prenda": "Zapatillas", "modelo": "Old Skool", "precio": "$18.000", "stock": "10" },
    { "marca": "Vans", "prenda": "Zapatillas", "modelo": "Authentic", "precio": "$10.000", "stock": "8" },
    { "marca": "Vans", "prenda": "Zapatillas", "modelo": "Classic", "precio": "$15.000", "stock": "16" },
    { "marca": "Nike", "prenda": "Zapatillas", "modelo": "Air Jordan 1 Mid", "precio": "$45.000", "stock": "5" },
    { "marca": "Nike", "prenda": "Zapatillas", "modelo": "Air Jordar 1 University Blue", "precio": "$60.000", "stock": "10" },
    { "marca": "Nike", "prenda": "Zapatillas", "modelo": "Air Jordan 1 Retro High", "precio": "$43.000", "stock": "7" },
    { "marca": "Adidas", "prenda": "Remera", "modelo": "Originals", "precio": "$10.000", "stock": "5" },
    { "marca": "Adidas", "prenda": "Remera", "modelo": "Essentials", "precio": "$14.000", "stock": "6" },
    { "marca": "Adidas", "prenda": "Campera", "modelo": "Linear", "precio": "$16.000", "stock": "4" },
    { "marca": "UnderArmour", "prenda": "Gorra", "modelo": "Clasica", "precio": "$5.500", "stock": "5" },
    { "marca": "UnderArmour", "prenda": "Gorra", "modelo": "Rock", "precio": "$9.000", "stock": "5" },
]
class Productos {
    constructor(marca, prenda, modelo, precio, stock) {
        this.marca = marca
        this.prenda = prenda
        this.modelo = modelo
        this.precio = precio
        this.stock = stock
    }
}

const adidas = document.getElementById("adidas")
const nike = document.getElementById("nike")
const vans = document.getElementById("vans")
const under = document.getElementById("under")



