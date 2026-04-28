// Defecto No Funcional: El sitio tarda 11 segundos en estar disponible
setTimeout(() => {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "none";
}, 11000);
// CORRECCIÓN: Para solucionarlo, cambiá el 11000 por 0 (o directamente sacá el setTimeout).
// }, 0);

// Defecto Funcional: El botón dispara un error y no cumple su función
function agregarAlCarrito() {
  // Error forzado en consola para que los alumnos lo busquen
  console.error("Uncaught ReferenceError: cartService is not defined");
  document.getElementById("mensaje-carrito").innerText =
    "Error: El botón no responde.";

  // CORRECCIÓN: Comentá las dos líneas de arriba y descomentá estas para que funcione bien:
  // alert("Producto agregado con éxito");
  // document.getElementById("mensaje-carrito").innerText = ""; // Limpiamos cualquier texto previo
}

// Defecto Lógico: El cálculo es incorrecto
function calcularPromedio() {
  const notas = [10, 8, 6];
  const suma = 10 + 8 + 6; // Podrías sumar iterando el array, pero dejamos esto simple

  // El error está en el divisor (debería ser 3)
  const promedioFalso = suma / 2;

  // CORRECCIÓN: Comentá la línea de arriba y descomentá esta para usar la longitud del array:
  // const promedioCorrecto = suma / notas.length;

  // Mensaje con el error expuesto
  document.getElementById("resultado-logico").innerText =
    "El promedio es: " + promedioFalso + " (Error: debería ser 8)";

  // CORRECCIÓN: Comentá la línea de arriba y descomentá esta para borrar el mensaje de error:
  // document.getElementById("resultado-logico").innerText = "El promedio es: " + promedioCorrecto;
}
