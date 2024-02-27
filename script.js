let usuario=document.getElementById("usuario")
let resultado=document.getElementById("resultado")

function dolar(){
    let dolar=4.95;
    let valor=(usuario.value/dolar).toFixed(1)
    resultado.innerHTML=`USD:${valor}`
}
