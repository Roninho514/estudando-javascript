function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano){
      alert('[ERRO] Verifique os dados e tente novamente!')
   }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero =  ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      if (fsex[0].checked){
         genero = 'Homem'
         if (idade>= 0 && idade <10){
            img.setAttribute('src','imagens/menino.jpg')
         }else if (idade < 21){
            img.setAttribute('src','imagens/jovem-menino.jpg')
         }else if (idade < 50){
            img.setAttribute('src','imagens/homem.jpg')
         }else{
            img.setAttribute('src','imagens/idoso.jpg')
         }
      }else if (fsex[1].checked){
         genero = 'Mulher'
         if (idade>= 0 && idade <10){
            img.setAttribute('src','imagens/menina.jpg')
         }else if (idade < 21){
            img.setAttribute('src','imagens/jovem-menina.jpg')
         }else if (idade < 50){
            img.setAttribute('src','imagens/mulher.jpg')
         }else{
            img.setAttribute('src','imagens/idosa.jpg')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Idade calculada: ${idade} Gênero: ${genero}`
      res.appendChild(img)
   }
}