// Alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor =  "#F9F3D3" //setar valores
console.log(element.style.backgroundColor) //pegar valores
 
// classList
const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active') // interruptor on/off adiciona e remove