const laHora = 300


 
function cuidado(laHora) {
   let guarderia = prompt ("ingrese horas de cuidado por dia")

     guarderia = guarderia * laHora * 20
     alert ("su cuota es de " + guarderia + " pesos al mes")

       
}
niño = prompt ("ingrese la edad del niñ@")

if (niño <= 5){

 cuidado (laHora)
 
}
else alert ("el niñ@ es mayor a lo requerido")
