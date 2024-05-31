var menuInicial = document.getElementById('menuInicial');
var menuMudarSenha = document.getElementById('menuMudarSenha');
var botaoMudarSenha = document.getElementById('botaoMudarSenha')
var textoEsqueciASenha = document.getElementById('textoEsqueciASenha')

textoEsqueciASenha.addEventListener('click',function(){
    menuInicial.style.display = "none";
    menuMudarSenha.style.display = "block"
})

botaoMudarSenha.addEventListener('click', function() {
    menuInicial.style.display = "block";
    menuMudarSenha.style.display = "none"
})