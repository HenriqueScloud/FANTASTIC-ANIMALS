export default function initTooltips(){

        
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item)=> {
        item.addEventListener('mouseover', onMouseOver)

    })


    function onMouseOver(event){
        const tooltipBox= criarTooltipBox(this);

        this.addEventListener('mouseleave',onMouseLeave)
        this.addEventListener('mousemove',onMouseMove)

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseMove.tooltipBox = tooltipBox;
    }

    const onMouseLeave = {
        tooltipBox:'',
        handleEvent(){
            this.tooltipBox.remove();
            this.removeEventListener('mouseleave',onMouseLeave)

        }
    }
    const onMouseMove = {
        handleEvent(event){
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';

        }
    }

    function criarTooltipBox(element){
        const tooltipbox = document.createElement("div");
        const text = element.getAttribute('aria-label');
        tooltipbox.classList.add("tooltip");
        tooltipbox.innerHTML = text;
        document.body.appendChild(tooltipbox);
        return tooltipbox;
    }
}
initTooltips();

