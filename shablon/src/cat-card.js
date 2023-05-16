import Handlebars from "handlebars"
import template from './cat-card.template'

window.addEventListener('load', ()=>{
    const rootNode = document.getElementById('root');
    const handlebarsTemplateDelegate = Handlebars.compile(template);
    rootNode.innerHTML = handlebarsTemplateDelegate({title: 'Three raining days',text: 'Gleb Victorov'});

})