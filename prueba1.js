var fs = require('fs');

function extraer(str){
    var res = str.toString().split(',',1);
    res = res[0].split('-');
    res = res[0].concat(res[1].concat(res[2]));
    return parseInt(res,10);
}
function salida(arr){
    file = '';
    arr.forEach(element => {
        file += element.concat('\n');
    });
    fs.writeFile('salida.csv', file, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    }); 
    
}
function OrdenarCedula(){
    fs.readFile('./cedulas.txt', function (err, data) {
        if (err) throw err;
        filearr = data.toString().split('\n');
        for (let i = 1; i < filearr.length; i++) {
            for (let j = 0; j < filearr.length-i; j++) {
                if (extraer(filearr[j]) > extraer(filearr[(j+1)])){
                    aux = filearr[j];
                    filearr[j] = filearr[(j+1)];
                    filearr[(j+1)] = aux;
                }
            }
        }
        salida(filearr);
    });
}
OrdenarCedula();
