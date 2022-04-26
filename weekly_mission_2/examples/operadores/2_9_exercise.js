const numbers9 = [1, 2, 3, 4, 5]

const result_of_reduce = numbers9.reduce((acc, Element) => acc + Element, 0) //siempre agregar acc y el valor iniciar del acumulador
console.log("Ejemplo 9. Uso de reduce para alcular la suma de los elementos de una lista")
console.log(result_of_reduce)