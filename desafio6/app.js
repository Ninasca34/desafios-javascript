let producto = ["remera", "negra", 6];

//Recorrer un arreglo
function mostrarProducto() {
    for (let i = 0; i < producto.length ; i++){
        console.log(producto[i]);
    }
}

producto.push("logo");
console.table(producto);

mostrarProducto();
