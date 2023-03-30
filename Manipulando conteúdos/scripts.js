// Manipulando conteúdo
 textContent - conteúdo de texto
const element = document.querySelector('h1');

element.textContent += " Olá Devs!"

console.log()


// innerText - texto interno 
const element = document.querySelector('h1');

element.innerText = "Olá Devs!"


// innerHTML - adicionar html diretamente do js
const element = document.querySelector('h1');

element.innerHTML = "Olá Devs! <small>!!!<small>"


// value - dar valor/atribuir valor
const element = document.querySelector('input');

element.value = "Valor que eu quiser"


// atributos - atribuir e pegar atributos
const header = document.querySelector('header');
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('id'))

header.removeAttribute('id') 