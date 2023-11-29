export default function navegacaoPorTab(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')
    

    function activeTab(index){
        tabContent.forEach((section) => {
            section.classList.remove('ativo','show-down','show-right')
        })//removendo a class de todas 

        const dataAnime = tabContent[index].dataset.anime;

        tabContent[index].classList.add('ativo',dataAnime)// adicionando a class na img clickad

        console.log(tabContent[index])
        

    }// criando a função para add a class na img clicada



    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
            
            
        })
    })//  add o evento em todas as imgs 


}
navegacaoPorTab();
