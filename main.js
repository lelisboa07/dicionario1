let elemento = document.querySelectorAll(".elemento")
let modal = document.querySelectorAll(".modal")
let fechar = document.querySelectorAll("#fechar-modal")
let audio = document.querySelectorAll(".audio")
let botao = document.querySelectorAll(".botao")
let texto = document.querySelector(".texto")

elemento[0].addEventListener('click', (e) =>{
    modal[0].style.visibility = 'visible'
})

fechar[0].addEventListener('click', (e) =>{
    modal[0].style.visibility = 'hidden'
})

botao[0].addEventListener('mouseover', (e) =>{
    audio[0].load()
    audio[0].play()
})

botao[0].addEventListener('mouseout', (e) =>{
    audio[0].pause()
})

// _____ //

elemento[1].addEventListener('click', (e) =>{
    modal[1].style.visibility = 'visible'
})

fechar[1].addEventListener('click', (e) =>{
    modal[1].style.visibility = 'hidden'
})

botao[1].addEventListener('mouseover', (e) =>{
    audio[1].load()
    audio[1].play()
})

botao[1].addEventListener('mouseout', (e) =>{
    audio[1].pause()
})

// _____ //

elemento[2].addEventListener('click', (e) =>{
    modal[2].style.visibility = 'visible'
})

fechar[2].addEventListener('click', (e) =>{
    modal[2].style.visibility = 'hidden'
})

botao[2].addEventListener('mouseover', (e) =>{
    audio[2].load()
    audio[2].play()
})

botao[2].addEventListener('mouseout', (e) =>{
    audio[2].pause()
})

// _____ //

elemento[3].addEventListener('click', (e) =>{
    modal[3].style.visibility = 'visible'
})

fechar[3].addEventListener('click', (e) =>{
    modal[3].style.visibility = 'hidden'
})

botao[3].addEventListener('mouseover', (e) =>{
    audio[3].load()
    audio[3].play()
})

botao[3].addEventListener('mouseout', (e) =>{
    audio[3].pause()
})

// _____ //

elemento[4].addEventListener('click', (e) =>{
    modal[4].style.visibility = 'visible'
})

fechar[4].addEventListener('click', (e) =>{
    modal[4].style.visibility = 'hidden'
})

botao[4].addEventListener('mouseover', (e) =>{
    audio[4].load()
    audio[4].play()
})

botao[4].addEventListener('mouseout', (e) =>{
    audio[4].pause()
})

// _____ //

elemento[5].addEventListener('click', (e) =>{
    modal[5].style.visibility = 'visible'
})

fechar[5].addEventListener('click', (e) =>{
    modal[5].style.visibility = 'hidden'
})

botao[5].addEventListener('mouseover', (e) =>{
    audio[5].load()
    audio[5].play()
})

botao[5].addEventListener('mouseout', (e) =>{
    audio[5].pause()
})

// _____ //

elemento[6].addEventListener('click', (e) =>{
    modal[6].style.visibility = 'visible'
})

fechar[6].addEventListener('click', (e) =>{
    modal[6].style.visibility = 'hidden'
})

botao[6].addEventListener('mouseover', (e) =>{
    audio[6].load()
    audio[6].play()
})

botao[6].addEventListener('mouseout', (e) =>{
    audio[6].pause()
})

// _____ //

elemento[7].addEventListener('click', (e) =>{
    modal[7].style.visibility = 'visible'
})

fechar[7].addEventListener('click', (e) =>{
    modal[7].style.visibility = 'hidden'
})

botao[7].addEventListener('mouseover', (e) =>{
    audio[7].load()
    audio[7].play()
})

botao[7].addEventListener('mouseout', (e) =>{
    audio[7].pause()
})

// _____ //

elemento[8].addEventListener('click', (e) =>{
    modal[8].style.visibility = 'visible'
})

fechar[8].addEventListener('click', (e) =>{
    modal[8].style.visibility = 'hidden'
})

botao[8].addEventListener('mouseover', (e) =>{
    audio[8].load()
    audio[8].play()
})

botao[8].addEventListener('mouseout', (e) =>{
    audio[8].pause()
})

// _____ //

elemento[9].addEventListener('click', (e) =>{
    modal[9].style.visibility = 'visible'
})

fechar[9].addEventListener('click', (e) =>{
    modal[9].style.visibility = 'hidden'
})

botao[9].addEventListener('mouseover', (e) =>{
    audio[9].load()
    audio[9].play()
})

botao[9].addEventListener('mouseout', (e) =>{
    audio[9].pause()
})

// _____ //

botao[10].addEventListener('click', (e) =>{
    texto.style.display = 'block'
})

botao[11].addEventListener('click', (e) =>{
    texto.style.display = 'none'
})