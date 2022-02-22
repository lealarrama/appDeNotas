const fs = require('fs')
const tareaParse = JSON.parse(fs.readFileSync('./tareas.json','utf8'))


function tareas (myArgs){
    switch (myArgs[2]){
        case 'listar':
            tareaParse.forEach(function (valor){
                console.log(`Titulo: ${valor.titulo}`)
            });
            break
        case "crear":
            const tarea = [{titulo: myArgs[3], estado:"Pendiente"}]
            guradarTarea(tarea)
            break
        case undefined:
            console.log('Atención - Tienes que pasar un accion.')
            break
        default:
            console.log('No entiendo que queires hacer')
    }
}
function escribirJASON(array){
    fs.writeFileSync('./tareas.json', array)
}

function guradarTarea(arrayTareas){
    const jsonStrigify = JSON.stringify( [...tareaParse, ...arrayTareas ] )
    escribirJASON( jsonStrigify )

}

module.exports = tareas;