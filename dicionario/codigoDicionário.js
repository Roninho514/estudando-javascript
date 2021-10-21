function traduz(){
    let colecaoPalavras = [
        ["green","verde"],
        ["red","vermelho"],
        ["blue","azul"],
        ["gray","cinza"]
    ];
    palavra = document.getElementById("campoPalavra").value;
    for(let i = 0; i < colecaoPalavras.length;i++){
        palavraPesquisa = colecaoPalavras[i][0].toString();
        if (palavra.toLowerCase() == palavraPesquisa){
            palavraTraduzida = colecaoPalavras[i][1].toString()
            document.getElementById("campoTradutor").innerHTML = palavraTraduzida
            break
        }
    }
    if (palavra.toLowerCase() != palavraPesquisa){
        for(let i = 0; i < colecaoPalavras.length;i++){
            palavraPesquisa = colecaoPalavras[i][1].toString();
            if (palavra.toLowerCase() == palavraPesquisa){
                palavraTraduzida = colecaoPalavras[i][0].toString()
                document.getElementById("campoTradutor").innerHTML = palavraTraduzida
                break
            }
        }
    }
    if (palavra.toLowerCase() != palavraPesquisa){
        document.getElementById("campoTradutor").innerHTML = "Não existe essa palávra no dicionário"
    }
}