function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function crearProblema(){
    cantidad = Math.floor(Math.random()*9000) + 100;
    aumento = (Math.floor(Math.random()*90) + 1);
    aumentoP = aumento*0.01;
    aux = (Math.floor(Math.random()*90) + 1)*0.01;
    resultado = [cantidad+(cantidad*aumentoP), cantidad+(cantidad*aux), cantidad*aux, cantidad+aumentoP];
    resultado = resultado.sort(function() {return Math.random() - 0.5});
    var porcentual = {
        "instruction": "Completa correctamente la oración arrastrando al espacio en blanco la cantidad que corresponda.",
        "problem": "Aumentar en un "+aumento+"% la cantidad de "+formatNumber(cantidad)+" resulta en:",
        "options": [
            formatNumber(resultado[0]),
            formatNumber(resultado[1]),
            formatNumber(resultado[2]),
            formatNumber(resultado[3])
        ],
        "result": formatNumber(cantidad+(cantidad*aumentoP))
    };
    return porcentual;
}
console.log(crearProblema());