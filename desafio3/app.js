let entrada = prompt("Ingresa tu nombre y apellido: ");
while(entrada != "ESC" ) {
    alert("Hola "+ entrada);

    entrada = prompt("Ingresa tu edad: ");
    alert("Muchas gracias, el formulario ha sido completado");
    
    entrada = prompt("Presione esc para finalizar: ")
    break;
}