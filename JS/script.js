import  {initTooltips}  from "./modules/tooltips.js";
import  {initAnimacaoScroll}  from "./modules/animacao-scroll.js";
import {initDropdownMenu} from "./modules/dropdownMenu.js";
import {initScrollSuave} from "./modules/scroll-suave.js";
import {initModal} from "./modules/modal.js";
import {navegacaoPorLista} from "./modules/accordion.js";
import {navegacaoPorTab} from "./modules/tabNav.js";

navegacaoPorLista();
navegacaoPorTab();
initTooltips();
initAnimacaoScroll();
initDropdownMenu();
initScrollSuave();
initModal();
