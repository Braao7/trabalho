
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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




async function fetchPaciente() {
    try {
        const pacienteResponse = await makeRequestAsync('src/get_paciente.php');
        const paciente = JSON.parse(pacienteResponse);

        document.getElementById("principal-dados").innerHTML =  `
        <h1>Informações Pessoais</h1>
        <div class="main">
            <div class="container dois-um">
                <label class="dois-terços">
                    <p>Nome Completo</p>
                    <p class = "campo" name="nome">${paciente.Nome}</p>
                </label>
                
                <label  class="um-terço">
                    <p>Sexo</p>
                    <p class = "campo" name="sexo">${paciente.Sexo}</p>
                </label>

                <label class="dois-terços">
                    <p>Nome Social</p>
                    <p class = "campo" name="Nome Social">${paciente.NomeSocial}</p>
                </label>
            </div>

            <div class="container metade">
                <label class="metade">
                    <p>CPF</p>
                    <p class = "campo" name="CPF">${paciente.CPF}</p>

                </label>
    
                <label class="metade">
                    <p>Data de nascimento</p>
                    <p class = "campo" name="Data de nascimento">${formatarData(paciente.DataNascimento)}</p>
                   
                </label>
        
                <label class="metade">
                    <p>Nome da Mãe</p>
                    <p class = "campo" name="Nome da Mãe">${paciente.NomeMae}</p>
                </label>

                <label class="metade">
                    <p>Número do Cartão do SUS</p>
                    <p class = "campo" name="Número do Cartão do SUS">${paciente.NumeroSus}</p>
                </label>

                <label for="email" class="metade">
                    <p>Endereço de E-mail</p>
                    <p class = "campo" name="Endereço de E-mail">${paciente.Email}</p>
                </label>
        
                <label class="metade">
                    <p>Telefone</p>
                    <p class = "campo" name="Telefone">${paciente.Telefone}</p>
                    
                </label>
        
                <label class="metade">
                    <p>Telefone de Emergência</p>
                    <p class = "campo" name="telefone-emergencia">${paciente.TelefoneEmergencial}</p>
                   
                </label>
        
                <label  class="metade">
                    <p>Contato de Emergência</p>
                    <p class = "campo" name="Contato de Emergência">${paciente.NomeEmergencial}</p>
                    
                </label>
            </div>

            <div class="container">
                <label class="dois-terços">
                    <p>Endereço Completo</p>
                    <p class = "campo" name="Endereço Completo">${paciente.Endereço}</p>
                </label>
    
                <label  class="um-terço">
                    <p>Nível de Escolaridade</p>
                    <p class = "campo" name="Nível de Escolaridade">${paciente.Escolaridade}</p>
                </label>
            </div>
        </div>`



        // Use os dados do paciente conforme necessário
    } catch (error) {
        console.error('Erro ao obter dados do paciente:', error);
    }
}

window.addEventListener("load", function () {
    fetchPaciente();
});
