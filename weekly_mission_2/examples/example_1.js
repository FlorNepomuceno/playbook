console.log("2. Creación de objeto con propiedades")

const explorer = {
    name: "Flor",
    edad: "28",
    mission: "Node JS",
    stack: ["js", "vue", "python"],
    blog: {url: "https://flornepomuceno.github.io/my_launchx_blog/"},// esto es un objeto
    posts: 5
}
console.log("Ejemplo:3 Objeto con métodos!")
console.log(explorer)
console.log("Accediendo a las propiedades del obbjeto")
console.log(explorer.name)
console.log(explorer["name"])

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

console.log("Ajolonauta:")
console.log(Ajolonauta)
Ajolonauta.sayHelloToExplorers()

console.log(Ajolonauta.tellMeMore())