const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

const countriesContainingLand = countries7.filter((country) => 
country.includes('land')
)
console.log("Ejercicio 7. Uso de filter para filtrar una lista de elementos a partir de una instriccion")
console.log(countriesContainingLand)