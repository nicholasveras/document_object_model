// Navegando pelos elementos
// parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentNode)

// cildNodes children
const el = document.querySelector('body')

console.log(el.childNodes) //(el.children) - HTMLCollection

// firstChild(leva em consideração o espaço vazio) firtElementChild(n leva em consideração o espaço vazio)
console.log(el.firstChild) //(el.firstElementChild)

// lastChild lastElementChild
console.log(el.lastChild) //(lastElementChild)


const el = document.querySelector('header')
// nextSibling nextElementSibling
console.log(el.nextElementSibling) // nextSibling

const el = document.querySelector('body script')
// previousSibling previousElementSibling
console.log(el.previousElementSibling)
