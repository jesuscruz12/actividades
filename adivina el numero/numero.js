var adivina=Math.floor(Math.random()*100)+1;//genera un numero aleatorio entre 1 y 100
var contador=0;
function numero(){
    var valor=parseInt(document.getElementById('guessInput').value);

    if(isNaN(valor)){
        document.getElementById('result').innerHTML='por favor ingrese un numero valido';
    }else{
    contador++;


        if (valor===adivina){
        document.getElementById('result').innerHTML='Numero correcto es '+adivina+' en '+contador+' intentos';
        }else if(valor<adivina){
        document.getElementById('result').innerHTML='Intenta con un numero mas grande';
        }
        else{
        document.getElementById('result').innerHTML='Intenta con un numero mas pequeño';
        }
    }
}

