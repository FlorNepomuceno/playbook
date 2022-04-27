const Ajolonauta = require('./../app/Ajolotauta')

describe("Prueba de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        //Aqui tu puedes usar el código como o deseas utlizar
        const woopa = new Ajolonauta("Woopa")

        // Validad el resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})