alert("Clique no botão TUTORIAL em caso de dúvida sobre uso da plataforma");


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

//inicia o modal pelo primeiro passo
var passoAtual = 1;
var modal = document.getElementById('modal');
var conteudoModal = document.getElementById('modal-content');

function iniciarTutorial() {
    exibirModal('top-left'); 
    atualizarConteudo();}

function exibirModal(posicao) {
    modal.style.display = 'block';

    
}

function fecharModal() {
    modal.style.display = 'none';
    reiniciarTutorial();
}

function proximoPasso() {
    // Avança para o próximo passo
    passoAtual++;
    atualizarConteudo();


    if (passoAtual > 5) {  // no momento temos 5 passos então caso seja adicionado algum esse número tem que aumentar
        fecharModal();
    }
}

function atualizarConteudo() {
    // Atualiza o conteúdo com base no passo
    switch (passoAtual) {
        case 1:
           conteudoModal.innerHTML = "<h2>Foto de perfil:</h2><p>Aqui você pode adicionar sua foto de perfil clicando sobre o avatar e selecionando uma de sua preferência</p>";
           var imagemModal = document.createElement('img');
           imagemModal.src = 'public/assets/user-icon.png'; 
           conteudoModal.appendChild(imagemModal);
           break;
        case 2:
            conteudoModal.innerHTML = "<h2>Ordenar:</h2><p>Aqui você pode ordenar seus prontuários entre os mais antigos e mais atuais para facilitar a busca</p>";
            var imagemModal = document.createElement('img');
           imagemModal.src = 'fa-solid fa-arrow-down'; 
           conteudoModal.appendChild(imagemModal);
            break;
        case 3:
            conteudoModal.innerHTML = "<h2>Menu:</h2><p>O menu te permite ter acesso a outras funcionalidades da plataforma</p>";
            break;
            case 4:
                conteudoModal.innerHTML = "<h2>Configurações</h2><p> ...</p>";
                
                break;
                case 5:
                    conteudoModal.innerHTML = "<h2>Acesso aos prontuários</h2><p> ...</p>";
                    break;
             

    }
}

   // Reinicia para o modal 1 caso o usuário feche
function reiniciarTutorial() {

    passoAtual = 1;
    conteudoModal.innerHTML = '';
}