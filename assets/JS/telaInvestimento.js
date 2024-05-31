//Espaço fotos//
    //Variáveis
    var menuInicial = document.getElementById('campoContas');
    var divFotos = document.getElementById('divFotos');
    var menuInvestimentos = document.getElementById('investimentos');
    var menuAdicionar = document.getElementById('adicionar');
    var campoContas= document.getElementById('campoContas');
    var imagemConta = document.getElementById('divFotos');

//Espaço Edição

    //Variáveis
    var menuEditarConta = document.getElementById('menuEditarContas');
    var campoNomeEditar = document.getElementById('campoNomeEditar');
    var campoAgenciaEditar = document.getElementById('campoAgenciaEditar');
    var campoContaEditar = document.getElementById('campoContaEditar');
    var campoSenhaEditar =document.getElementById('campoSenhaEditar');
    var Nubank = document.getElementById('Nubank');
    var Rico = document.getElementById('Rico');
    var Itau = document.getElementById('Itau');
    var XP = document.getElementById('XP');
    var alterar = document.getElementById('alterar');

    //Funções 

    Nubank.addEventListener('click', function(){
        menuEditarConta.style.display = "block";
        menuInicial.style.display = 'none';
        menuInvestimentos.style.display = 'none';
        menuAdicionar.style.display = 'none';
        campoNomeEditar.value = 'Nubank';
        campoAgenciaEditar.value = '0723';
        campoContaEditar.value = '55445-5';
        campoSenhaEditar.value = '895687';
    })

    Itau.addEventListener('click', function(){
        menuEditarConta.style.display = "block";
        menuInicial.style.display = 'none';
        menuInvestimentos.style.display = 'none';
        menuAdicionar.style.display = 'none';
        campoNomeEditar.value = 'Itau';
        campoAgenciaEditar.value = '0453';
        campoContaEditar.value = '57895-5';
        campoSenhaEditar.value = '879542';
    })

    Rico.addEventListener('click', function(){
        menuEditarConta.style.display = "block";
        menuInicial.style.display = 'none';
        menuInvestimentos.style.display = 'none';
        menuAdicionar.style.display = 'none';
        campoNomeEditar.value = 'Rico';
        campoAgenciaEditar.value = '0142';
        campoContaEditar.value = '78561-5';
        campoSenhaEditar.value = '159835';
    })

    XP.addEventListener('click', function(){
        menuEditarConta.style.display = "block";
        menuInicial.style.display = 'none';
        menuInvestimentos.style.display = 'none';
        menuAdicionar.style.display = 'none';
        campoNomeEditar.value = 'XP';
        campoAgenciaEditar.value = '4751';
        campoContaEditar.value = '58241-5';
        campoSenhaEditar.value = '789159';
    })

    alterar.addEventListener('click', function(){
        menuEditarConta.style.display = 'none';
        menuInicial.style.display= 'block';
        menuInvestimentos.style.display = 'block';
        menuAdicionar.style.display = 'none';
    })


//MENU ADIÇÃO

    //VARIÁVEIS
    var campoURL = document.getElementById('campoURL');
    var campoNome = document.getElementById('campoNome');
    var campoAgencia = document.getElementById('campoAgencia');
    var campoConta = document.getElementById('campoConta');
    var campoSenha =document.getElementById('campoSenha');
    var botaoAdicionar = document.getElementById('botaoAdicionar');
    var finalizarConta = document.getElementById('finalizarConta');

    botaoAdicionar.addEventListener('click', function(){
        menuEditarConta.style.display = 'none';
        menuInicial.style.display= 'none';
        menuInvestimentos.style.display = 'none';
        menuAdicionar.style.display = 'block';
    })

    const botaoFinalizar = document.getElementById("finalizarConta"); 
    
    botaoFinalizar.addEventListener("click", function() {
        // Obter os valores dos inputs
        const urlImagem = document.getElementById("campoURL").value;
        const nomeBanco = document.getElementById("campoNomeBanco").value;
        const agencia = document.getElementById("campoAgencia").value;
        const conta = document.getElementById("campoConta").value;
    
        // Criar um novo elemento img
        const novaImagem = document.createElement("img");
        novaImagem.src = urlImagem;
        novaImagem.classList.add('imagemConta');
        novaImagem.alt = `Imagem da conta do banco ${nomeBanco}`;
    
        // Criar um novo elemento p
        //const novoTexto = document.createElement("p");
        //novoTexto.textContent = `Banco: ${nomeBanco} - Agência: ${agencia} - Conta: ${conta}`;
    
        // Criar um novo elemento div
        const novoElemento = document.createElement("div");
        novoElemento.appendChild(novaImagem);
        //novoElemento.appendChild(novoTexto);
    
        // Adicionar o novo elemento ao container
        divFotos.appendChild(novoElemento);

        menuAdicionar.style.display = 'none';
        menuEditarConta.style.display = 'none';
        menuInicial.style.display = 'block';
        menuInvestimentos.style.display = 'block';
    });
        




