
document.addEventListener("DOMContentLoaded", function() {
    calcularFigura();
});

function calcularFigura() {
    const figura = parseInt(prompt("Seleccione una figura:\n1. Cuadrado\n2. Rectángulo\n3. Círculo\n4. Triángulo"));
    let resultado;

    switch (figura) {
        case 1: 
            const lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
            resultado = lado * lado;
            alert(`El área del cuadrado es: ${resultado}`);
            break;
        case 2: 
            const base = parseFloat(prompt("Ingrese la base del rectángulo:"));
            const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
            resultado = base * altura;
            alert(`El área del rectángulo es: ${resultado}`);
            break;
        case 3: 
            const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
            resultado = Math.PI * radio * radio;
            alert(`El área del círculo es: ${resultado}`);
            break;
        case 4: 
            const baseTriangulo = parseFloat(prompt("Ingrese la base del triángulo:"));
            const alturaTriangulo = parseFloat(prompt("Ingrese la altura del triángulo:"));
            resultado = (baseTriangulo * alturaTriangulo) / 2;
            alert(`El área del triángulo es: ${resultado}`);
            break;
        default:
            alert("Opción no válida.");
    }
}
