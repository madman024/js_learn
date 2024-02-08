const philo=["neitzsche","camu",'sartre']
const phinemo=['heideger','husserel','hannah']

console.log(philo)
console.log(phinemo)
// philo.push(phinemo)
// console.log(philo)

console.log(philo.concat(phinemo))
console.log(philo)

// spread operator --glass example
const new_phil=[...philo,...phinemo]
console.log(new_phil)


/*
if ther is nested array structure use flat(),it will separate in each element ,u can give depth =Infinite

.isArray()
.fromArray()
Array.of()
*/