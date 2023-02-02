var secretNumber = parseInt(Math.random() * 1001)
var count = 1
var tries = 9

while(count <= 10) {
    var guess = prompt('Digite um número de 0 a 1000')
    
    if(guess == secretNumber){
        alert('Parabéns! Você acertou o número em ' + count + ' tentativas')
    }
    else if (guess < secretNumber){
        alert('Errou! o valor é maior que ' + guess)
        alert('Cuidado... Você tem mais ' + tries + ' tentativas')
    }
    else if (guess > secretNumber){
        alert('Errou! o valor é menor que ' + guess)
        alert('Cuidado... Você tem mais ' + tries + ' tentativas')
    }

    count = count + 1
    tries = tries - 1
}

if(count => 10){
    alert('Você gastou todas as chances, o número era: ' + secretNumber)
}