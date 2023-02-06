var player1 = {
    name:'Paulo',
    wins: 0,
    ties: 0,
    loses:0,
    score:0
};

var player2 = {
    name:'Matheus',
    wins: 0,
    ties: 0,
    loses:0,
    score:0
};

var elementTable = document.getElementById('tabelaJogadores');

showInScreen();

function showInScreen() {
    elementTable.innerHTML = `
        <tr>
            <td>${player2.name}</td>
            <td>${player2.wins}</td>
            <td>${player2.ties}</td>
            <td>${player2.loses}</td>
            <td>${player2.score}</td>
            <td><button onClick="addVictory(player2)">Vitória</button></td>
            <td><button onClick="addTie(player2)">Empate</button></td>
            <td><button onClick="addLose(player2)">Derrota</button></td>
        </tr>
    `
};

function addVictory(player) {
    player.wins++
    player.score = player.score + 3
    showInScreen()
};

function addTie(player) {
    player.ties++
    player.score++
    showInScreen()
};

function addLose(player) {
    player.loses++
    showInScreen()
};