// Definición de variables
let pedido = prompt('Qué producto desea?');
let cantidad = Number(prompt('Qué cantidad desea?'));
let mensaje = 'Deberá abonar $';
let precioProducto = 0;

// Condicionales de productos
if (pedido == 'remera') {
    precioProducto = 200;  
} else if(pedido == 'jean') {
    precioProducto = 900;
} else if (pedido == 'camisa') {
    precioProducto  = 600;
} 

// Operación
if (precioProducto === 0){
    mensaje = 'el producto que ingresó no existe!';
} else {
    let precioTotal = cantidad * precioProducto; 
    mensaje += precioTotal;
}

console.log(mensaje);

