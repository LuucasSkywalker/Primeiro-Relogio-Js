function carregar(){
   let msg = document.getElementById('msg')
   let img = document.getElementById('imagem')
   let horario = new Date()
   let hora = horario.getHours()
    
 //msg.innerHTML = `Agora sao ${hora} hrs.`

 if (hora >= 7 && hora < 12){
    img.src = 'dia.jpg'
    document.body.style.background = 'wheat';
    document.body.style.color = '#DAA520'
    msg.innerHTML = `<strong>BOM DIA</strong>, agora são ${hora} hrs`
 } else if (hora >= 12 && hora <= 18){
    img.src = 'tarde.jpg'
    document.body.style.background = 'orange';
    document.body.style.color = 'orange'
    msg.innerHTML = `<strong>BOA TARDE</strong>, agora são ${hora} hrs`
 } else {
    img.src = 'noite.jpg'
    document.body.style.background = '#363636';
    document.body.style.color = '#2F4F4F'
    msg.innerHTML = `<strong>BOA NOITE</strong>, agora são ${hora} hrs`
 }
}
