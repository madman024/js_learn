/*
string interpolation
(` ${variable} `)--back ticks ,dollar ,placeholder,variable++++++++++++++++++

string is an object so many methods are available


*/
const name=new String("Madman")
console.log(name)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(4))
console.log(name.indexOf('m'))

console.log(name.substring(1,4))
// .slice() can pass negative values
// .trim() remove spaces white 

const url="http://madman.org"
console.log(url.replace('org','io'))

console.log("I Think Therefore I Am".split(' '))

