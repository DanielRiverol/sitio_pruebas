// Defecto No Funcional: El sitio tarda 11 segundos en estar disponible
setTimeout(() => {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "none";
}, 11000);

// Defecto Funcional: El botón dispara un error y no cumple su función
function agregarAlCarrito() {
  // Error forzado en consola para que los alumnos lo busquen
  console.error("Uncaught ReferenceError: cartService is not defined");
  document.getElementById("mensaje-carrito").innerText =
    "Error: El botón no responde.";
}

// Defecto Lógico: El cálculo es incorrecto
function calcularPromedio() {
  const notas = [10, 8, 6];
  const suma = 10 + 8 + 6;

  // El error está en el divisor (debería ser 3)
  const promedioFalso = suma / 2;

  document.getElementById("resultado-logico").innerText =
    "El promedio es: " + promedioFalso + " (Error: debería ser 8)";
}
