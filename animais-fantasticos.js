'use strict'

// const imgs = document.querySelectorAll('img')

// imgs.forEach((item) => {
//     console.log(item)
// });


// const p = document.querySelectorAll('p')

// p.forEach(element => {
//     console.log(element.innerText)
// });


// const img = document.querySelector('img').offsetTop


// console.log(img)



// const imagens = document.querySelectorAll('img')

// let soma = 0
// imagens.forEach((item) => {
    
//     soma+= item.offsetWidth
//     console.log(soma)
    

// })



// const links = document.querySelectorAll('a')

// console.log(links)


// links.forEach((item) => {
//     const linkWidth = links.offsetWidth;
    

//     if(linkWidth >= 48 ){
//         console.log('possui acesssibilidade !')
//     }else{
//         console.log('não possui acesssibilidade !')
//         console.log(item)

//     }

//  })





// const img = document.querySelector('img')

// function callback(){
//    document.body.classList.toggle('azul')
// }

// /*  crie uma função sempre fora do evento para que seja mais facil de debugar o codigo posteriormente */



// // img.addEventListener('click', callback)

// function backAzul(event) {
//     if (event.key === 'f'){
//         document.body.classList.toggle('azul')
//     }
// }

// window.addEventListener('keydown', backAzul)


// const imagens = document.querySelectorAll('img')

// imagens.forEach((item)=>{
//     item.addEventListener('click', callback )
// })



// // ----------------- EXERCICIOS --------------------

// const linksInternos = document.querySelectorAll('a[href^="#"')



// function ativar(event){
//     event.preventDefault() //impedir comportamento do link

//     linksInternos.forEach((item) => {
//         item.classList.remove('ativo')
//     }
//     )// remover de todo a class ativo 


//     event.currentTarget.classList.toggle('ativo') // adicionando a class no item clicado
// }         



// linksInternos.forEach((link) => {
//     link.addEventListener("click",ativar)
// })

// // ----------------- EXERCICIOS --------------------


// const todosElementos = document.querySelectorAll('body *')
// console.log(todosElementos)

// function elementoClicado(event) {
    
//     // event.currentTarget.remove();
//     console.log(event.currentTarget)

// }

// todosElementos.forEach((elementos) => {
//     elementos.addEventListener('click', elementoClicado)
// })

// // ----------------- EXERCICIOS --------------------


// function clicouNoT(event){
//     console.log(event.key);
//     if(event.key === 't'){
//         document.documentElement.classList.toggle('textoMaior')
        
        
//     }
// }
// window.addEventListener('keydown', clicouNoT)








// const mapa = document.querySelector('.mapa')
// const faq = document.querySelector('.faq')


// const h1 = document.querySelector('h1')

// const cloneH1 = h1.cloneNode(true)



// // ----------------- EXERCICIOS --------------------


// const menu = document.querySelector('.menu')
// const copy = document.querySelector('.copy')


// const cloneMenu = menu.cloneNode(true);

// // // copy.appendChild(cloneMenu)



// // ----------------- EXERCICIOS --------------------


// const primeiroDt = document.querySelector('.faq dl dt')
// console.log(primeiroDt.innerHTML)

// // ----------------- EXERCICIOS --------------------

// const primeiroDD = primeiroDt.nextElementSibling
// console.log(primeiroDD.remove)
// // primeiroDD.remove()






//  NAVEGAÇÃO POR TAB

function navegacaoPorTab(){
    const tabMenu = document.querySelectorAll('.js-tabMenu li')
    const tabContent = document.querySelectorAll('.js-tabContent section')
    

    function activeTab(index){
        tabContent.forEach((section) => {
            section.classList.remove('ativo')
        })//removendo a class de todas 

        tabContent[index].classList.add('ativo')// adicionando a class na img clickad
        

    }// criando a função para add a class na img clicada



    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
            
            
        })
    })//  add o evento em todas as imgs 


}
navegacaoPorTab(); //ativação da função de navegação por tab 




//  NAVEGAÇÃO POR LISTA


function navegacaoPorLista(){
    const accordionList = document.querySelectorAll('.js-accordion dt')//Pegando todos os DT com as perguntas 


    function activeAccordion(event){ // criando a função para add/remover quando for clicado no item.

        this.nextElementSibling.classList.toggle('ativoFaq') // add/remove class do elemento com clicarem nele.
    }


    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
        
    }) // add a função em todos os elmentos necessários 


}
navegacaoPorLista(); // ativando a função






 //  SCROLL SUAVE  ATUALIZADO 


function initScrollSuave(){
  

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')// pegando todos os links internos do site


//criando a função do scroll

function scrollToSection(event){
  event.preventDefault();  // desliga a função dos links 

  const href = event.currentTarget.getAttribute('href') //pegando o link de dentro do href selecionado 

  const section = document.querySelector(href) // pegando a section que tiver o link que a função selecionou

  console.log(href)
  console.log(section)

  const topo = section.offsetTop;  //pegando o topo de cada sessão paracalculo do scroll





  window.scrollTo({
    top: topo-130, //definindo onde o scroll vai parar 
    behavior:'smooth', //definindo a velociodade do scroll
  })




}


linksInternos.forEach((link)=>{
  link.addEventListener("click",scrollToSection)
})

}
initScrollSuave()



// ANIMAÇÃO DE SCROLL NOS ELEMENTOS 
function initAnimacaoScroll(){

      
    const sections = document.querySelectorAll('.js-scroll')// pegando todos os elementos que vão ser animados pelo scroll

    if (sections.length){

      const windowMetade = window.innerHeight * 0.7 // pegando 80% da tela do usuário 

      function animaScroll() { // criando a função de animação

        sections.forEach((section)=>{
          const sectionTop = section.getBoundingClientRect().top-windowMetade // pegando o topo do elemento por essa nova funcionalidade menos a porcentagem da tela do usuário.

          if (sectionTop < 0){
            section.classList.add('ativo') // quando passar, ativar a animação.
          }else{
            section.classList.remove('ativo') // quando voltar, desativar a animação.
          }
          
        })

      }
      animaScroll() // EVITAR BUGS DE INICIO
      window.addEventListener('scroll', animaScroll) // ADD O EVENTO AO WINDOW 
    }

}
initAnimacaoScroll()