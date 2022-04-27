const Ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function(){
        console.log("Soy el ajolonauta, qué onda!")
    },
    tellMeMore: function(){
        return `Ajolonauta: ${this.name}`
    }
}

console.log("objeto que recibe parámetros")
console.log("Ajolonauta:")
console.log(Ajolonauta)
Ajolonauta.sayHelloToExplorers()

console.log(Ajolonauta.tellMeMore())