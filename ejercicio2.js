const nota = parseInt(prompt('Ingrese su nota.'))
if(nota >= 0 && nota <= 2){
    alert('Su nota es Muy deficiente')
}else if(nota == 3 || nota == 4){
    alert('Su nota es Insuficinete')
}else if(nota == 5 || nota == 6){
    alert('Su nota es Suficiente')
}else if(nota == 7){
    alert('Su nota es Bien')
}else if(nota == 8 || nota == 9){
    alert('Su nota es Notable')
}else if(nota == 10){
    alert('Su nota es Sobresaliente')
}else{
    alert('Introduce un Numero valido')
}





