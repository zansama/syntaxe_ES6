//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4] // affectation des  deux première entrée du tableau -> a et b de la constante  [a , b,]
// donc a = 1 et b = 2
console.log(a)
console.log(b)
console.log(c)


const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age)

//4.2 Application

console.log(data)
for (let i = 0 ; i <Object.keys(data).length; i++){
  const {dateDebut, dateFin, texte} = {
    dateDebut : Object.values(data)[i].dateDebut,
    dateFin : Object.values(data)[i].dateFin,
    texte : Object.values(data)[i].texte,
  }
    console.log('A partir de '+ dateDebut +' '+ 'jusqu\'a ' + dateFin + ' ' + texte);
}
