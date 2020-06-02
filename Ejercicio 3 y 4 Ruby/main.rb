#
# @Author Christopher Land Cordero Aguilar
#
class Main
    def initialize()
  
    end
  
    def mayor()
    vec = [13,2,4,35,1]
      for x in 0..(vec.length)-1
        for i in 0..(vec.length)-x-2
          if vec[i] < vec[i+1]
            aux = vec[i+1];
            vec[i+1] = vec[i];
            vec[i] = aux;
          end#Fin de primer if
        end#Fin del segundo for
      end#Fin del primer for
      puts vec.first
    end#Fin del metodo mayor 

    def histograma()
      myArray = [1,2,1,3,3,1,2,1,5,1]
      value = ["","","","",""]
      numbers = ["1: ","2: ","3: ","4: ","5: "]
      resultado = [4]
      indice = 0
      comparacion = 1
      limite = value.length

      for i in 0..limite
        for j in 0..(myArray.length)-1
          if myArray[j] == comparacion
            value[indice]=value[indice]+"*"
          end#Fin del primer if
        end#Fin del segundo for
        indice=indice+1
        comparacion=comparacion+1
      end#Fin del primer for
      for k in 0..(numbers.length)-1
        resultado[k]=numbers[k]+value[k]
      end#Fin del for de resultado
      puts "myArray:="+myArray.to_s
      puts ""
      puts "Resultado esperado:"
      puts resultado
    end#Fin del histograma

  end#Fin del Main

clase = Main.new()
clase.mayor()
clase.histograma()
gets()