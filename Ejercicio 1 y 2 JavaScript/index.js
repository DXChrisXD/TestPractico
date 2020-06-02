/*
*  @author Christopher Land Cordero Aguilar
*/

function multiplicacion1(){

  var a = [2,3,4,6];
  var vector = [a.length-1];
  var omitir = 0;
  var indice = 0;

  console.log("Array: [2,3,4,6]");

  for(var j = 0; j < a.length; j++){
    //console.log(a.length);
    indice = 0;
    omitir = j;
    for(var i = 0; i < a.length; i++){
      if(omitir != i){
        vector[indice] = a[i];
        //console.log(vector[indice]);
        indice=indice+1;
      }//Fin del primer if
    }//Fin del segundo for
    let total=1;
    for (var k=0; k<vector.length; k++){
      total=total*vector[k];
    }//Fin del for de calculo de multiplicación
    console.log(total);
  }//Fin del primer for

  multiplicacion2();
  multiplicacion3();
  
}//Fin del metodo multiplicacion

function multiplicacion2(){

  var a = [123,67,890,4];
  var vector = [a.length-1];
  var omitir = 0;
  var indice = 0;

  console.log("Array: [123,67,890,4]");

  for(var j = 0; j < a.length; j++){
    //console.log(a.length);
    indice = 0;
    omitir = j;
    for(var i = 0; i < a.length; i++){
      if(omitir != i){
        vector[indice] = a[i];
        //console.log(vector[indice]);
        indice=indice+1;
      }//Fin del primer if
    }//Fin del segundo for
    let total=1;
    for (var k=0; k<vector.length; k++){
      total=total*vector[k];
    }//Fin del for de calculo de multiplicación
    console.log(total);
  }//Fin del primer for
  
}//Fin del metodo multiplicacion

function multiplicacion3(){

  var a = [2,3,7,9,4,5,6,9,12];
  var vector = [a.length-1];
  var omitir = 0;
  var indice = 0;

  console.log("Array: [2,3,7,9,4,5,6,9,12]");

  for(var j = 0; j < a.length; j++){
    //console.log(a.length);
    indice = 0;
    omitir = j;
    for(var i = 0; i < a.length; i++){
      if(omitir != i){
        vector[indice] = a[i];
        //console.log(vector[indice]);
        indice=indice+1;
      }//Fin del primer if
    }//Fin del segundo for
    let total=1;
    for (var k=0; k<vector.length; k++){
      total=total*vector[k];
    }//Fin del for de calculo de multiplicación
    console.log(total);
  }//Fin del primer for
  
}//Fin del metodo multiplicacion
    
    function factorial(number){
        var resultado = 1;
        
        for (var i = 0; i < number; i++){
        
            resultado += resultado*(i);
            console.log((i+1)+"! = "+resultado);
                     
        }//Fin del primer for
            
            return console.log("La factorización de "+number+" es "+resultado);
        
    }//Fin del metodo factorial