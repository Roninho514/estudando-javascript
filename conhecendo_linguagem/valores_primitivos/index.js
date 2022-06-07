function avalia_dado(){
   let dado_enviado = document.getElementById('valor').value 
   let numeros = ['1','2','3','4','5','6','7','8','9','0']
   for(i=0 ,i < length(numeros), i++){
      if (numeros[i] in dado_enviado){
         dado_enviado = parseInt(dado_enviado)
      }
   }
   alert(typeof(dado_enviado))
}