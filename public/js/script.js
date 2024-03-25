// alert("Clique no botão TUTORIAL em caso de dúvida sobre uso da plataforma");

//CABECALHO

//menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//TROCAR FOTO DO PERFIL

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

// TUTORIAL

//inicia o modal pelo primeiro passo

var passoAtual = 1;
var modal = document.getElementById('modal');
var conteudoModal = document.getElementById('modal-content');

function iniciarTutorial() {
    exibirModal('top-left');
    atualizarConteudo();
}

function exibirModal(posicao) {
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.display = 'none';
    reiniciarTutorial();
}

function passoAnterior() {
    // Avança para o próximo passo
    if (passoAtual > 1) {
        passoAtual--;
        atualizarConteudo();
    }
    else {
        fecharModal();
    }
}

function proximoPasso() {
    // Avança para o próximo passo
    passoAtual++;
    atualizarConteudo();
    if (passoAtual > 4) {  // no momento temos 5 passos então caso seja adicionado algum esse número tem que aumentar
        fecharModal();
    }
}

function atualizarConteudo() {
    // Atualiza o conteúdo com base no passo
    switch (passoAtual) {
        case 1:
            conteudoModal.innerHTML = "<h2>Foto de perfil:</h2><p>Aqui você pode adicionar sua foto de perfil clicando sobre o avatar e selecionando uma de sua preferência</p>";
            var imagemModal = document.createElement('img');
            imagemModal.src = 'public/assets/perfil.png';
            conteudoModal.appendChild(imagemModal);
            break;
        case 2:
            conteudoModal.innerHTML = "<h2>Ordenar:</h2><p>Aqui você pode ordenar seus prontuários entre os mais antigos e mais atuais para facilitar a busca</p>";
            var imagemModal = document.createElement('img');
            imagemModal.src = 'public/assets/ordenar.png';
            conteudoModal.appendChild(imagemModal);
            break;
        case 3:
            conteudoModal.innerHTML = "<h2>Menu:</h2><p>O menu te permite ter acesso a outras funcionalidades da plataforma</p>";
            var imagemModal = document.createElement('img');
            imagemModal.src = 'public/assets/menu.png';
            conteudoModal.appendChild(imagemModal);
            break;

        case 4:
            conteudoModal.innerHTML = "<h2>Acesso aos atendimentos</h2><p> Aqui você tem acesso aos seus atendimentos</p>";
            var imagemModal = document.createElement('img');
            imagemModal.src = 'public/assets/pii.png';
            conteudoModal.appendChild(imagemModal);
            break;
        // case 5:
        //     conteudoModal.innerHTML = "<h2>Mudar tema</h2><p> ...</p>";
        //     var imagemModal = document.createElement('img');
        //     imagemModal.src = 'public/assets/tema.png';
        //     conteudoModal.appendChild(imagemModal);

        //     break;
    }
}

// Reinicia para o modal 1 caso o usuário feche

function reiniciarTutorial() {
    passoAtual = 1;
    conteudoModal.innerHTML = '';
}


//REQUICAO PARA API

// function makeRequest(url, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function () {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//                 callback(httpRequest.responseText);
//             } else {
//                 alert('There was a problem with the request.');
//             }
//         }
//     };
//     httpRequest.open('GET', url);
//     httpRequest.send();
// }


// makeRequest('src/get_atendimentos.php', function (response) {
//     let atendimentos = JSON.parse(response);
//     let listaHTML = ""
//     atendimentos.forEach(atendimento => {
//         listaHTML += `
//     <li class="prontuario">
//         <div class="preview-pront">
//             <p>Enfermeiro(a): ${atendimento.NomeEnfer}</p>
//             <p>${atendimento.Data}</p>
//         </div>

//         <div class="content-prontuario" name="conteudo-pront">
//             <div class="container metade">
//                 <label class="metade">
//                     <p>Registro no Coren</p>
//                     <p class="campo" name="coren">${atendimento.Coren}</p>
//                 </label>
//                 <label class="metade">
//                     <p>Data do Atendimento</p>
//                     <p class="campo" name="data">${atendimento.Data}</p>
//                 </label>
//             </div>

//             <div class="container metade">
//                 <label>
//                     <p>Alergias Conhecidas</p>
//                     <p class="campo" name="alergias">${atendimento.Alergias}</p>
//                 </label>
//             </div>

//             <label>
//                 <p>Sintomas Apresentados</p>
//                 <p class="campo" name="sintomas">${atendimento.Sintomas}</p>
//             </label>

//             <div class="container metade">
//                 <label class="metade">
//                     <p>Descrição do Atendimento</p>
//                     <p class="campo" name="atendimento">${atendimento.Atendimento}</p>
//                 </label>

//                 <label class="metade">
//                     <p>Hipótese Diagnóstica</p>
//                     <p class="campo" name="possivel-diagnostico"${atendimento.HipoteseDiagnostico}></p>
//                 </label>
//             </div>


//             <div class="container metade">
//                 <label for="receituario" class="metade">
//                     <p>Prescrição Médica</p>
//                     <p class="campo" name="receituario" >${atendimento.PrescricaoMedica}</p>
//                 </label>

//                 <label for="pos-atendimento" class="metade">
//                     <p>Instruções Pós-Atendimento</p>
//                     <p class="campo" name="pos-atendimento">${atendimento.PosAtendimento}</p>
//                 </label>
//             </div>
//         </div>
//     </li> `
//     });
//     document.getElementById("lista-prontuario").innerHTML = listaHTML;

//     let acc = document.getElementsByClassName("preview-pront");
//     let i;
//     console.log(i);
//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function () {
//             let panel = this.nextElementSibling;
//             if (panel.style.display === "block") {
//                 panel.style.display = "none";
//             } else {
//                 panel.style.display = "block";
//             }
//         });
//     }
// });


// makeRequest('src/get_paciente.php', function (response) {
//     let paciente = JSON.parse(response);

//     document.getElementById("nome-paciente").innerText = paciente.Nome;

// });


function formatarData(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


async function makeRequestAsync(url) {
    return new Promise(function (resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    resolve(httpRequest.responseText);
                } else {
                    reject('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    });
}

async function fetchAtendimentos() {
    try {
        const atendimentosResponse = await makeRequestAsync('src/get_atendimentos.php');
        const atendimentos = JSON.parse(atendimentosResponse);

        let listaHTML = "";
        atendimentos.forEach(atendimento => {
            listaHTML += `
        <li class="prontuario">
            <div class="preview-pront">
                <p>Enfermeiro(a): ${atendimento.NomeEnfer}</p>
                <p>${formatarData(atendimento.Data)}</p>
            </div>
    
            <div class="content-prontuario" name="conteudo-pront">
                <div class="container metade">
                    <label class="metade">
                        <p>Registro no Coren</p>
                        <p class="campo" name="coren">${atendimento.Coren}</p>
                    </label>
                    <label class="metade">
                        <p>Data do Atendimento</p>
                        <p class="campo" name="data">${atendimento.Data}</p>
                    </label>
                </div>
    
                <div class="container metade">
                    <label>
                        <p>Alergias Conhecidas</p>
                        <p class="campo" name="alergias">${atendimento.Alergias}</p>
                    </label>
                </div>
    
                <label>
                    <p>Sintomas Apresentados</p>
                    <p class="campo" name="sintomas">${atendimento.Sintomas}</p>
                </label>
    
                <div class="container metade">
                    <label class="metade">
                        <p>Descrição do Atendimento</p>
                        <p class="campo" name="atendimento">${atendimento.Atendimento}</p>
                    </label>
    
                    <label class="metade">
                        <p>Hipótese Diagnóstica</p>
                        <p class="campo" name="possivel-diagnostico">${atendimento.HipoteseDiagnostico}</p>
                    </label>
                </div>
    
    
                <div class="container metade">
                    <label for="receituario" class="metade">
                        <p>Prescrição Médica</p>
                        <p class="campo" name="receituario" >${atendimento.PrescricaoMedica}</p>
                    </label>
    
                    <label for="pos-atendimento" class="metade">
                        <p>Instruções Pós-Atendimento</p>
                        <p class="campo" name="pos-atendimento">${atendimento.PosAtendimento}</p>
                    </label>
                </div>
            </div>
        </li>`;
        });

        document.getElementById("lista-prontuario").innerHTML = listaHTML;

        let acc = document.getElementsByClassName("preview-pront");
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                let panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        };
    } catch (error) {
        console.error('Erro ao obter dados dos atendimentos:', error);
    }
}

async function fetchPaciente() {
    try {
        const pacienteResponse = await makeRequestAsync('src/get_paciente.php');
        const paciente = JSON.parse(pacienteResponse);

        document.getElementById("nome-paciente").innerText = paciente.Nome;



        // Use os dados do paciente conforme necessário
    } catch (error) {
        console.error('Erro ao obter dados do paciente:', error);
    }
}


fetchAtendimentos();
fetchPaciente();

let ordemDecrescente = true;



document.getElementById("botao-ordena").addEventListener("click", function () {
    const listaProntuario = document.getElementById("lista-prontuario");
    const prontuariosArray = Array.from(listaProntuario.children);

    if (ordemDecrescente) {
        document.getElementById("icon-ordenar").className = "fa-solid fa-arrow-up";
    }else{
        document.getElementById("icon-ordenar").className = "fa-solid fa-arrow-down";
    }

    prontuariosArray.sort(function (a, b) {
        const dataA = new Date(a.querySelector('.campo[name="data"]').innerText);
        const dataB = new Date(b.querySelector('.campo[name="data"]').innerText);

        if (ordemDecrescente) {
            return dataB - dataA;
        } else {
            return dataA - dataB;
        }
    });

    prontuariosArray.forEach(prontuario => {
        listaProntuario.appendChild(prontuario);
    });

    ordemDecrescente = !ordemDecrescente;
});
