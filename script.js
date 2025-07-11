
function registrar(tipo) {
  const msg = {
    plantio: "✅ Plantio registrado!",
    rega: "💧 Rega registrada!",
    sol: "☀️ Horas de sol anotadas!",
    adubo: "🌿 Adubação registrada!",
    clima: "🔥 Evento climático anotado!"
  };
  document.getElementById("mensagem").innerHTML = msg[tipo] || "Registro feito.";
  document.getElementById("historico").style.display = "none";
}
function mostrarHistorico() {
  document.getElementById("mensagem").innerHTML = "";
  document.getElementById("historico").style.display = "block";
}
