export function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', handleClick);
    })
    function handleClick(Event){
        this.classList.toggle('active');
    }
}
