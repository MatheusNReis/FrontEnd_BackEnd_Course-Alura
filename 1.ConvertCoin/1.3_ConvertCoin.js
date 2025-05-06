valorWons = prompt("Digite um valor em wons:")
/* alert(valorwons) */
umWon = 0.0040;
valorReais = valorWons * umWon;
valorReaisFormatado = valorReais.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
alert("R$" + valorReaisFormatado);
