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

// Defecto Lógico: El cálculo matemático está mal implementado
function calcularTotal() {
  const precioMonitor = 200;
  const precioTeclado = 50;
  const subtotal = precioMonitor + precioTeclado; // 250

  // El error está en cómo se aplica el porcentaje del IVA.
  // Se está sumando 0.21 (centavos) en lugar de sumarle el 21% al subtotal.
  const totalFalso = subtotal + 0.21;

  // CORRECCIÓN: Comentá la línea de arriba y descomentá esta para hacer el cálculo correcto:
  // const totalCorrecto = subtotal + (subtotal * 0.21);

  // Mensaje con el error expuesto
  document.getElementById("resultado-logico").innerText =
    "El total a pagar es: $" + totalFalso ;

  // CORRECCIÓN: Comentá la línea de arriba y descomentá esta para borrar el mensaje de error:
  // document.getElementById("resultado-logico").innerText = "El total a pagar es: $" + totalCorrecto;
}
