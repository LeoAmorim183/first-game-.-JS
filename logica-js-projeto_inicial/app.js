alert('Bem vindo ao jogo do número secreto!');
let numeroMaximo = 400
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log ('o número secreto é',numeroSecreto);
let  chute;
let  tentativas = 1 ;

//Enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Se o chute for igual ao numero secreto
    if (numeroSecreto == chute) {
            break;
    }  else    {
        if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    }       else{
        alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1
    tentativas++
}

}
let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
alert(`isso ai voce acertou! O número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}. `);

//if (tentativas > 1 ) {
//    alert(`isso ai voce acertou! O número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`isso ai voce acertou! O número secreto é ${numeroSecreto} com ${tentativas} tentativa`);
//}
