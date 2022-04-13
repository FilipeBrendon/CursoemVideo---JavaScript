function carregar(){
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerText = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    // BOM DIA !
    img.src = "demanha.png.jpg"
    document.body.style.background = "#e2cd9f"
    
 } else if(hora >= 12 && hora < 18){
    // BOA TARDE!
    img.src = "detarde.png.jpg"
    document.body.style.background = "brown"
    
    } else {
    // BOA NOITE!
    img.src = "denoite.png.jpg"
    document.body.style.background = "#515154"
}
}