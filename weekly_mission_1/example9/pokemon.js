class Logger{
    constructor (name){
        this.cound = 0
        this.name = name
    }
}
module.exports.Logger = Logger

export function log (sayHello){
    console.log(sayHello)
}

export function log (sayMessage){
    console.log(sayMessage)
}



