console.log("Iniciando con el proyecto")

const modelos = ["Tesla", "Ford", "Dodge"]

let teslaModels = ["Model 3", "Model S", " Model X"]
let forModels = ["Mustang", "Explorer", "F-150"]
let dodgeModels = ["Charger", "Challenger", "Durango"]

let anios = [2017, 2018, 2019, 2020, 2021, 2022]

// Función constructor 
function auto( marca, modelo, anio){
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
}

function generar_auto( cantidad_generar ){

    for( let i = 0; i < cantidad_generar; i++){
        marca = Math.floor( Math.random() * modelos.length )
        modelo = ""
        switch( marca ){
            case "Tesla" :
                modelo = Math.floor( Math.random() * teslaModels.length )
            break
            case "Ford" :
                modelo = Math.floor( Math.random() * teslaModels.length )
            break
            case "Dodge" :
                modelo = Math.floor( Math.random() * teslaModels.length )
            break
            
        }
        year = Math.floor( Math.random() * anios.length )
        auto(modelo)
    }
}