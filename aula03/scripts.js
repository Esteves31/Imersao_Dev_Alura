var filmsList= [];
filmsList[0] = 'https://waltermattos.com/site2/wp-content/uploads/2014/11/tut_Analise_Grafica_Cartaz_Interstellar_05_011.png';
filmsList[1] = 'https://images.justwatch.com/poster/301689406/s718/o-jogo-da-imitacao.%7Bformat%7D';
filmsList[2] = 'https://img.elo7.com.br/product/zoom/26FCC69/poster-filme-vingadores-ultimato-avenger-endgame-cinema.jpg';

for(var i = 0; i < filmsList.length; i++) {
    document.write('<img src=' + filmsList[i] + '>')
};