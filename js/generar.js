console.log("Iniciando con el proyecto")

const modelos = ["Tesla", "Ford", "Dodge"]

let teslaModels = ["Model 3", "Model S", " Model X", "Model Y", "Rocket"]
let fordModels = ["Mustang", "Explorer", "F-150"]
let dodgeModels = ["Charger", "Challenger", "Durango"]

let anios = [2017, 2018, 2019, 2020, 2021, 2022]

// Función constructor 
function auto( marca, modelo, anio){
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
}

function generarAuto( cantidad_generar ){
    listaAutos = []
    for( let i = 0; i < cantidad_generar; i++){
        marca = modelos[ Math.floor( Math.random() * modelos.length ) ]
        modelo = ""
        switch( marca ){
            case "Tesla" :
                modelo = teslaModels[ Math.floor( Math.random() * teslaModels.length ) ]
            break
            case "Ford" :
                modelo = fordModels[ Math.floor( Math.random() * fordModels.length ) ]
            break
            case "Dodge" :
                modelo = dodgeModels[ Math.floor( Math.random() * dodgeModels.length ) ]
            break
            
        }
        year = Math.floor( Math.random() * anios.length )
        // creando los objetos 
        let automovil
        automovil = new auto(marca, modelo, year)
        listaAutos.push(automovil)   
    }
    return listaAutos
}

listaAutomoviles = generarAuto( 20 )
console.log( listaAutomoviles)