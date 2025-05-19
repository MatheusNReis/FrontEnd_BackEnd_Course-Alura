idade = prompt("Quantos anos você tem?")

if(idade <= 18) {
  alert("Você NÃO pode jogar jokenpo!")
}

// Jogo para maiores de idade
if(idade >= 18) {
  EscolhaJogador = prompt("Digite 1-Pedra, 2-papel ou 3-tesoura?")
  
  EscolhaComputador = Math.floor(Math.random() * 3) + 1;
  
   if(EscolhaJogador == EscolhaComputador){
   alert("Empate!!")  
   }
  
   if(EscolhaJogador == 1){
     if(EscolhaComputador == 2){
        // Jogadore Pedra, Computador Papel --> Computador vence
        alert("Computador venceu, escolheu papel!")
     }
     if(EscolhaComputador == 3){
       // Jogador Pedra, Computador Tesoura --> Jogador vence 
       alert("Jogador vence, computador tesoura!")
     }
     
     if(EscolhaJogador == 2){
     if(EscolhaComputador == 1){
        // Jogadore Papel, Computador Pedra --> Jogador vence
        alert("Jogador venceu, computador pedra!")
     }
     if(EscolhaComputador == 3){
       // Jogador Papel, Computador Tesoura --> Computador vence 
       alert("Computador venceu, escolheu tesoura!")
     }
       
     if(EscolhaJogador == 3){
     if(EscolhaComputador == 1){
        // Jogador Tesoura, Computador Pedra --> Computador vence
        alert("Computador venceu, escolheu pedra!")
     }
     if(EscolhaComputador == 2){
       // Jogador Tesoura, Computador Papel --> Jogador venceu 
       alert("Jogador venceu, computador papel!")
     } 
   }
  
  
  alert("A escolha do computador foi " + EscolhaComputador + ".")
}

  
