class Producto {
    constructor(nombre, color, talle, precio){
        this.nombre = nombre; 
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
}

class Ordenar{

    constructor(coleccionProductos){
        this.coleccionProductos = coleccionProductos
    }

    ordenarPrecio(tipoOrden){
    
        //Validación
        if(tipoOrden == "desc"){
            //mayor a menor precio
            this.coleccionProductos.sort((a, b) => {
                return b.precio - a.precio;
            }); 
        
        } else {
            //menor a mayor precio
            this.coleccionProductos.sort((a, b) => {
                return a.precio - b.precio;
            });    
        }

        this.coleccionProductos.forEach((e) => {
            console.log(e);
        });

    }
}


const producto1 = new Producto("remera", "negro", "XL", 10.5);
const producto2 = new Producto("jean", "azul", "L", 10.70);
const producto3 = new Producto("pollera", "blanco", "M", 6.0);
const producto4 = new Producto("camisa", "verde", "S", 4.7);
const producto5 = new Producto("short", "rojo", "XS", 9.5);


arrProds = [producto1,producto2,producto3,producto4,producto5];

const coleccionProducto = new Ordenar(arrProds);

coleccionProducto.ordenarPrecio("asc");

