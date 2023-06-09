var lado1=0,lado2=0,lado3=0,a=0,s=0

function captura1() {
    lado1=document.getElementById("lado1").value
    lado1=Number.parseFloat(lado1)
}

function captura2() {
    lado2=document.getElementById("lado2").value
    lado2=Number.parseFloat(lado2)
}   
function captura3() {
    lado3=document.getElementById("lado3").value
    lado3=Number.parseFloat(lado3)

}
function perimetro(){
    document.getElementById("perimetro").innerHTML="el perimetro del triangulo es: "+(lado1+lado2+lado3)
 
}
function area(){
    s=(lado1+lado2+lado3)/2
    a=Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3))
    
        var v1=lado1+lado2
        var v2=lado1+lado3
        var v3=lado2+lado3
        if(v1>lado3 && v2>lado2 && v3>lado1)
        {
          
            document.getElementById("area").innerHTML="el area del triangulo es:  "+a
        }
        else
        {
            document.getElementById("area").innerHTML="triangulo no validado"
        }
}
function tipo(){
    var v1=lado1+lado2
        var v2=lado1+lado3
        var v3=lado2+lado3
        if(v1>lado3 && v2>lado2 && v3>lado1)
        {
            if(lado1==lado2 && lado1==lado3){
                document.getElementById("titr").innerHTML="es un traingulo equilatero "
            }
            else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
                document.getElementById("titr").innerHTML="es un traingulo isoseles "
            }
            else {
                document.getElementById("titr").innerHTML="es un traingulo escaleno "
            }
        }
        else
        {
            document.getElementById("titr").innerHTML="triangulo no validado"
        }
    
}