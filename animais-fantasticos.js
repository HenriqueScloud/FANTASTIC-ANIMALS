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









const tabMenu = document.querySelectorAll('.js-tabMenu li')
const tabContent = document.querySelectorAll('.js-tabContent section')
console.log(tabContent)

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


