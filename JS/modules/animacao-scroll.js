export  function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anima="scroll"]')// pegando todos os elementos que vão ser animados pelo scroll
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.7 // pegando 70% da tela do usuário 
        function animaScroll() { // criando a função de animação
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade // pegando o topo do elemento por essa nova funcionalidade menos a porcentagem da tela do usuário.
                if (sectionTop < 0) {
                    section.classList.add('ativo') // quando passar, ativar a animação.
                } else {
                    section.classList.remove('ativo') // quando voltar, desativar a animação.
                }
            })
        }
        animaScroll() // EVITAR BUGS DE INICIO
        window.addEventListener('scroll', animaScroll) // ADD O EVENTO AO WINDOW 
    }
}
initAnimacaoScroll();