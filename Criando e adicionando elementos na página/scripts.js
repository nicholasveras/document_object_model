// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Olá Devs!"

// append prepend
//const body = document.querySelector('body')

body.append(div)  // adicionar após e prepend antes 


// insertBefore

const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)