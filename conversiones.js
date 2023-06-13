var moneda=0,resultado=0

function captura1() {
    moneda=document.getElementById("moneda").value
    moneda=Number.parseFloat(moneda)
}
function dolar(){
    resultado=moneda * 0.058
    document.getElementById("dol").innerHTML="Dolares: "+resultado
}
function pesos(){
    resultado=moneda * 17.30
    document.getElementById("dol").innerHTML="Pesos:"+resultado
}