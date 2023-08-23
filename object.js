

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = function(){
        console.log(nome + ' Andou');
    }

}


const henrique = new Pessoa('henrique', 19)
const maia = new Pessoa( 'maia', 25)
const joao  = new Pessoa('joao', 30);

//  crie uma contrução de função para manipular dom


function dom( seletor ) {

    const elementList = document.querySelectorAll(seletor)
    console.log(elementList)

}
