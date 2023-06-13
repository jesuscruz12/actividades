
function limpiarFormulario() {
  document.getElementById("pesos").value = "";
  document.getElementById("dolares").value = "";
}

function convertirMoneda() {
  var pesos = document.getElementById("pesos").value;
  var dolares = document.getElementById("dolares").value;
  var tipoCambio = document.getElementById("tipo-cambio").value;

  if (pesos !== "") {
    // Convertir de pesos a dólares
    var conversion = pesos / tipoCambio;
    document.getElementById("dolares").value = conversion.toFixed(2);
  } else if (dolares !== "") {
    // Convertir de dólares a pesos
    var conversion = dolares * tipoCambio;
    document.getElementById("pesos").value = conversion.toFixed(2);
  }
}
