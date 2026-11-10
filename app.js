// Imprimir el titulo del documento
console.log("El titulo del documento es: ", document.title);

// guardar el contenido de la id "titulo-principal" en una variable
let titulo = document.querySelector("#titulo-principal");

console.log(titulo);

// Extraer y editar propiedades
console.log(titulo.textContent);
titulo.textContent = "Editado desde JavaScript";
titulo.style.color = "blue";
titulo.style.backgroundColor = "green"
titulo.style.fontSize = "1.5rem"; 

titulo.textContent += " Texto nuevo";

let parrafo = document.querySelector("#parrafo-principal");

parrafo.innerHTML += " Nuevo texto <i> Este texto esta en cursiva </i>";
let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p>Producto muestra: $1200</p>";

/*
let presupuesto = prompt("Introduce tu presupuesto: ");
if(presupuesto>= 1200){
    caja1.classList.add("aprobado");
}
else{
    caja1.classList.add("no-aprobado");
}
    */

const bodega = [
    {nombre: "Producto 1", precio: 100, stock: 3},
    {nombre: "Producto 2", precio: 50, stock: 10},
    {nombre: "Producto 3", precio: 200, stock: 7},
    {nombre: "Producto 4", precio: 75, stock: 0},
    {nombre: "Producto 5", precio: 500, stock: 8}
];
let caja = document.querySelector(".caja-vacia");
bodega.forEach(item =>{
    let claseColor = "";
    if(item.stock>0){
        claseColor = "aprobado";
    }
    else{
        claseColor = "no-aprobado";
    }

    caja.innerHTML += `
    <div class = "caja-producto ${claseColor}">
    <h2> Producto: ${item.nombre}</h2>
    <p> Precio: $${item.precio}</p>
    <p> Stock: ${item.stock}</p>
    </div>
    `;

});