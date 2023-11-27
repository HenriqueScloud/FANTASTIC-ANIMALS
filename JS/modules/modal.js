'use strict'

export function initModal(){}


const abrir = document.querySelector('[data-modal="abrir"]')
const fechar = document.querySelector('[data-modal="fechar"]')
const modalContainer = document.querySelector('section.modal-container')

if (abrir && fechar && modalContainer){
    function clickForaModal(event){
        if (event.target === this)
            toggleModal(event);
    }
    function toggleModal(event){
        event.preventDefault();
        modalContainer.classList.toggle('ativo')
    }
    abrir.addEventListener('click', toggleModal)
    fechar.addEventListener('click', toggleModal)
    modalContainer.addEventListener('click', clickForaModal)


}



