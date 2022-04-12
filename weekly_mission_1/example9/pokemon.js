class Pokemon{
    constructor (name){
        this.name = name
    }
    sayHello(){
        console.log(`${this.name} te saluda`)
    }
    sayMessage(msg){
        console.log(`${this.name} dice: ${msg}`)
    }
}

module.exports = Pokemon


