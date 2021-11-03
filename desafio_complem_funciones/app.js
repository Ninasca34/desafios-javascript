let parcial, final, promedio;
parcial = parseFloat(prompt("Parcial"));
final = parseFloat(prompt("Final"));
promedio = (parcial+final)/2;

if(promedio >= 7) {
    alert("El promedio es "+promedio+" Materia aprobada");
} else {
    alert("El promedio es "+promedio+" Desaprobado, debe recuperar");
}
