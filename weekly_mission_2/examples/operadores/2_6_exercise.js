const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

const countrieFirstThreeLetters = countries6.map((country) =>
    country.toUpperCase().slice(0, 3)
)

console.log("Ejemplo 6. Uso de map para convertir las 3 primeras letras en mayusculas")
console.log(countrieFirstThreeLetters)