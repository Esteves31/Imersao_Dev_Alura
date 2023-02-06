function addFilm() {
    var film = document.getElementById('filme').value
    var elementsList = document.getElementById('listaFilmes')

    elementsList.innerHTML = elementsList.innerHTML + '<img src=' + film + '>';
    document.getElementById('filme').value = ''
}