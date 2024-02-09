// object desctusture

const detail={
    fullname:'friedrich',
    lastname:'neitzsche'

}
console.log(detail)
// detail.fullname--accessing components is difficult 
const {fullname:ns}=detail
console.log(ns)