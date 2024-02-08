// oop

const spec=Symbol("024")
console.log(typeof spec);
const details={
    name:"hrishi",
    ['age']:12,
    spic:spec,
}

console.log(typeof details.name)
console.log(details['name'])

console.log(typeof details.age)

console.log(details.spic)
console.log(typeof details.spic)

details.name='madman'

console.log(details.name)

console.log(details)

// string interpolation `variable: ${variable}`

