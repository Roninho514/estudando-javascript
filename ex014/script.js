function carregar(){
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem')
   var data = new Date()
   //var hora = data.getHours()
   var hora = 9
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 0 && hora <12){
      img.src = './imagens/foto-manha-editada.png'
      document.body.style.background = '#e2cd9f'
   }else if (hora >= 12 && hora <18){
      img.src = './imagens/foto-tarde-editada.png'
      document.body.style.background = '#b9846f'
   }else{
      img.src = './imagens/foto-noite-editada.png'
      document.body.style.background = '#515154'
   }
}
