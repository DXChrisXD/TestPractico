/*
*  @author Christopher Land Cordero Aguilar
*/

public class Main {

  public static void main(String[] args) {
    repetidos();
    moda();
  }//Fin del main

  private static void repetidos(){
    // Parte 1 sacar repetidos
    int numbers[]={1,2,2,5,4,6,7,8,8,8};
    int ocasiones[] = new int[10];
    int reserva=0; //Usado en Parte 2
    for(int i=0; i<numbers.length; i++){
        ocasiones[numbers[i]]+=1;
    }//Fin del primer for

    //  Imprimiendo para pruebas
    //    for(int i=0; i<ocasiones.length; i++){
    //      System.out.println(ocasiones[i]);
    //    }

    // Parte 2 acomodar el más repetido
    for (int j=0; j<ocasiones.length; j++){
      for (int k=0; k<ocasiones.length-1; k++){
          if(ocasiones[k]>ocasiones[k+1]){
            reserva=ocasiones[k];
            ocasiones[k]=ocasiones[k+1];
            ocasiones[k+1]=reserva;
          }//Fin del primer if
      }//Fin del segundo for
    }//Fin del primer for
    System.out.println("Ocurrencias: "+ocasiones[ocasiones.length-1]);
  }//Fin del metodo repetidos

  /*****************Entrando en metodo moda*****************/

  private static void moda(){
      int numbers[]={1,2,2,5,4,6,7,8,8,8};
      int ocasiones= 0;
      int numero = 0;

        for(int i=0; i<numbers.length; i++){
          int numRepeticiones= 0;
            for(int j=0; j<numbers.length; j++){
                if(numbers[i]==numbers[j]){
                  numRepeticiones++;
                }//Fin del primer if
                if(numRepeticiones>ocasiones){
                  numero = numbers[i];
                  ocasiones = numRepeticiones;
                }//Fin del segundo if
            }//Fin del segundo for
        }//Fin del primer for
        System.out.println("Número: "+numero);
    }//fin del metodo moda

}//Fin de la clase Main
