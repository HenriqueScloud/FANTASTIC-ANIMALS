export default function navegacaoPorLista(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    function activeAccordion(event){ 
        this.nextElementSibling.classList.toggle('ativoFaq') 
        this.classList.toggle('ativo')
    }
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);

    }) 
}



