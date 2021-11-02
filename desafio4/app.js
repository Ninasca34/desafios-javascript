//Mensaje de bienvenida, solicito al usuario que ingrese el producto y la cantidad que desea comprar
const tomarPedido = () => {
    const producto = Number(prompt(`Bienvenido/a a I migliori vestiti! 
    Qué desea llevar?

    1- Remera, 350
    2- Jean, 600
    3- Cinturón, 150
    4- Blazer, 900`));


//antes de enviar pedido valido que sea un producto de la lista
    if (validarProducto(producto)) {
    
//si existe el prodcuto, solicito cantidad deseada
const cantidad = Number(prompt('Ingrese la cantidad de productos que desea llevar'));
        //si es valido el producto, preparo el pedido
        prepararPedido(producto, cantidad);

    } else {
        alert("El producto que ha ingresado, no se encuentra actualmente en stock")
        tomarPedido();
    }

}

//Validación del producto
const validarProducto = (productoIngresado) => {
    if ((productoIngresado == 1) || (productoIngresado == 2) ||  (productoIngresado == 3) || (productoIngresado == 4)) {
        return true;
    } else {
        return false;
    } 
}
   
    
//Dependiendo del pedido del cliente, se calcula el costo y se responde un mensaje diferente
function prepararPedido(prod, cant){
    let mensaje = '';
    let precio = 0;
    let entregarPedidoT = false;

    switch (prod) {
        case 1:
            mensaje = 'Usted seleccionó remera, ';
            precio = 350;
            precio = multiplicar(precio, cant);
            entregarPedidoT = true;
            break;
        case 2:
            mensaje = 'Usted seleccionó jean, ';
            precio = 600;
            precio = multiplicar(precio, cant);
            entregarPedidoT = true;
            break;
        case 3:
            mensaje = 'Usted seleccionó cinturón,  ';
            precio = 150;
            precio = multiplicar(precio, cant);
            entregarPedidoT = true;
            break;
        case 4:
            mensaje = 'Usted seleccionó Blazer, ';
            precio = 900;
            precio = multiplicar(precio, cant);
            entregarPedidoT = true;
            break;
        default:
            mensaje = 'Disculpe, este producto no se encuentra en stock';
            break;
    }

    
    if (entregarPedidoT) {
        entregarPedido(mensaje, precio);
    }
}

//Operación para calcular el costo del pedido
const multiplicar = (a, b) => {
    return a * b;
}


//Muestro al usuario el costo total del pedido realizado
function entregarPedido(mensaje, precio) {
    alert(`${mensaje} el total es ${precio}`);
    cobrar(precio);
}


//Se pedirá realizar el pago hasta que el usuario ingrese el importe correcto
const cobrar = (importe) => {
    let pago = 0;

    while (importe > 0 && pago != importe) {
        pago = Number(prompt(`Ingrese ${importe}`));
    }
    alert('Muchas gracias por su compra!');
}

//Inicio de la ejecución
tomarPedido();




