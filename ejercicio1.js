const edad = parseInt(prompt('ingrese su edad.'))
if (edad >= 18 && edad <= 120){
alert('La persona puede conducir')
}else if (edad < 18 && edad > 0){
alert('La edad no es suficiente para conducir')
}else{
alert('El valor ingresado no es una edad')
}