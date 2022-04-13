function verificar(){
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var res = document.getElementById("res")
    res.innerHTML = "Contando: <br>"
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert = "ERRO"
    }else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p == 0){
            window.alert("Será considerado o valor 1")
            p = 1
        }
        if (i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML +=`${c}, `
            }
        }else if (i > f){
            for (var c = i; c >= f; c -=p){
                res.innerHTML += `${c} , `
            }
        }
    }
}