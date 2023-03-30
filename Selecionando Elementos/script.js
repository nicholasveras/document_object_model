// getElementByID()
const element = document.getElementById('blog-title')
console.log(element)


// getElementsByClassName()
const element = document.getElementsByClassName('one');
console.log(element)


// getElementsByTagName()
const element = document.getElementsByTagName('head');
console.log(element)


// querySelector()
const element = document.querySelector('[src]');
console.log(element)


// querySelectorAll()
const element = document.querySelectorAll('.one');
console.log(element)


// Qual usar ?

// getElementByID {element}
// getElementsByClassName {HTMLCollection}
// getElementsByTagName {HTMLCollection}
// querySelector {element}
// querySelectorAll {Nodelist}