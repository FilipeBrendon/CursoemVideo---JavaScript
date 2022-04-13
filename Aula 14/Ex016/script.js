function tabuada(){
    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")
    var n = Number(num.value)
    tab.innerHTML = ""
    for (c = 1;c <= 10; c++){
        var item = document.createElement("option")
        item.text = `${n}x${c}=${n*c}`
        tab.appendChild(item)
    }
    num.focus()
    num.value=""
}