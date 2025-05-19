// Criar lista com 3 jogadores
personagem = ["", "", ""]

viloes = ["", "", ""]

forcaPersonagem = 0
forcaViloes = 0
alert("O array Personagem contém: " + personagem)
for(let i=0; i<3; i++){
  escolhaPersonagem = prompt("Digite o nome do personagem" + (i + 1))
  personagem[i] = escolhaPersonagem
  // Calcular a força de cada jogador, e depois somar para saber a força do time
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1
  // forcaPersonagem += Math.floor(Math.random() * 10) + 1 // Maneira avançada de fazer a mesma coisa
}
console.log("Agora o array personagem contém: " + personagem)
console.log("inicio viloes:" + viloes)
for(let i=0 ; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Itachi", "Coringa", "Majin Boo", "Amon" , "Abbu"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  // Calcular a força de cada jogador do time do jogador
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
}
console.log("final viloes:" + viloes)

// Comparar os dois times para saber quem venceu
if(forcaPersonagem > forcaViloes){
  alert("Seu time é muito forte, Você ganhou a disputa de cabo de guerra! Sua força foi: " + forcaPersonagem)
}
  else{
    if(forcaPersonagem < forcaViloes){
     alert("Seu time é fraquinho. O computador venceu o cabo de guerra com força de " + forcaViloes)
      }
      else{
      alert("Os dois times tem a mesma força! Vocês empataram.")
      }
  }

