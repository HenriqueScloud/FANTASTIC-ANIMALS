export function navegacaoPorLista(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    function activeAccordion(event){ 
        this.nextElementSibling.classList.toggle('ativoFaq') 
    }
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    }) 
}
navegacaoPorLista();



