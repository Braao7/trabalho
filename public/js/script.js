
function trocarFoto() {

    var imagem = document.getElementById('imagem');

    var campo = document.getElementsByClassName("personal-avatar")[0];

    if (imagem.files.length > 0) {

        var file = imagem.files[0];

        if (file.type.startsWith('image/')) {

            var reader = new FileReader();

            reader.onload = function (e) {
                campo.src = e.target.result;
            };

            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecione um arquivo de imagem.');
        }
    } else {

        alert('Nenhum arquivo selecionado.');
    }
}