//Creo un objeto e incluyo constructor con datos
class Producto {
    constructor(nombre, color, stock, cantidadSolicitada){
        this.nombre = nombre; 
        this.color = color;
        this.stock = stock;
        this.cantidad = cantidadSolicitada;
    }

    //método
    controlStock(){

        if(this.cantidad > this.stock) {

            alert("El stock se encuentra agotado. ")
        }
        else if (this.cantidad < this.stock && this.cantidad > 0){

            this.stock = this.stock - this.cantidad
            alert("Usted ha ingresado: " + this.cantidad + "\nStock disponible: " + this.stock);
        } 
    } 
}

//Pido al cliente que ingrese cantidad de producto
let compraCliente = Number(prompt("Bienvenido, ingrese la cantidad que desea comprar: "));
const objeto1 = new Producto("remera", "negra", 6, compraCliente);

objeto1.controlStock()