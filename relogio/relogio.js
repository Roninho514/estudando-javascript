setInterval(function hora(){
   let  horarioAtual = new Date()
   let hora = horarioAtual.getHours()
   let minutos = horarioAtual.getMinutes()
   let segundos = horarioAtual.getSeconds()
   minutos = zero(minutos)
   segundos = zero(segundos)
   document.getElementById('hora').textContent = hora+':'+ minutos + ':' + segundos 
},1000)

function zero(x){
   if(x < 10){
      x = '0' + x

   }return x
}