

export default function initScrollSuave(){
    //criando a função do scroll
    function scrollToSection(event) {
        event.preventDefault();  // desliga a função dos links 
        const href = event.currentTarget.getAttribute('href') //pegando o link de dentro do href selecionado 
        const section = document.querySelector(href) // pegando a section que tiver o link que a função selecionou
        //console.log(href)
        //console.log(section)
        const topo = section.offsetTop;  //pegando o topo de cada sessão paracalculo do scroll
        window.scrollTo({
            top: topo - 130, //definindo onde o scroll vai parar 
            behavior: 'smooth', //definindo a velociodade do scroll
        })
    }
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')// pegando todos os links internos do site
    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })
}
initScrollSuave();
