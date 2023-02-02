const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const userName = document.querySelector("#name");
    const name = userName.value;

    const givenValue = document.querySelector("#value");
    const value = givenValue.value;

    const coinType = document.querySelector("#cointype")
    const coin = coinType.value

    var dollar = 5.10;
    var euro = 5.56;
    var libra = 6.33;

    if(coin == "Dolar"){
        var brl = dollar*value;
    }
    else if(coin == "Euro"){
        var brl = euro*value;
    }
    else{
        var brl = libra*value;
    }
    
    brl = brl.toFixed(2);

    alert('Olá '+ name + ', o seu valor convertido é R$ ' + brl);
});