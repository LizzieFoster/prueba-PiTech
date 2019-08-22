function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function crearProblema(){
    primero = Math.floor(Math.random()*90000) + 10000;
    segundo = Math.floor(Math.random()*90000) + 10000;
    aux = Math.floor(Math.random()*90000) + 10000;
    resultado = [primero + segundo, (primero + segundo)+aux, primero + aux, segundo+aux];
    resultado = resultado.sort(function() {return Math.random() - 0.5});
    var suma = {
        "instruction": "Selecciona el resultado de la siguiente suma.",
        "problem": [
            formatNumber(primero),
            formatNumber(segundo)
        ],
        "options": [
            formatNumber(resultado[0]),
            formatNumber(resultado[1]),
            formatNumber(resultado[2]),
            formatNumber(resultado[3])
        ],
        "result": formatNumber(primero+segundo)
    };
    return suma;
}
console.log(crearProblema());
