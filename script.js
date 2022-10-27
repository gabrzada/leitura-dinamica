// Declarações iniciais
var pontuação = document.getElementById('score');
var num = document.getElementById('num');
var score = 0;

// Declarações dos botões
var n1 = document.getElementById('n1'); 
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
n1.addEventListener("click", verify, false);
n2.addEventListener("click", verify, false);
n3.addEventListener("click", verify, false);

// Inicialização dos botões.
n1.value = (rand(num))
n2.value = (rand(num))
n3.value = (rand(num))

// Funções
function verify()
{
    if(event.target.value >= n1.value && event.target.value >= n2.value && event.target.value >= n3.value)
    {
        event.target.value = ("Acertou!")
        quadrado.style.background = '#Bee6c7'
        score++
        setTimeout(function() {
            reset();
          }, 250);
    } 
    else 
    {
        event.target.value = ("Errou!")
        quadrado.style.background = '#f99494'
        score = 0
        setTimeout(function() {
            reset();
        }, 250);
    }
}

function rand()
{
    let num = Math.floor(1000 + Math.random() * 9000);
    return num
}

function reset()
{
    quadrado.style.background = '#ffffff'
    pontuação.innerHTML = `Pontuação: ${score}`
    n1.value = (rand(num))
    n2.value = (rand(num))
    n3.value = (rand(num))
}