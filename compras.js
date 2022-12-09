var formCartao = document.querySelector('#cartao')
var formPix = document.querySelector('#pix')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnCartao')
  .addEventListener('click', () => {
    formCartao.style.left = "20px"
    formPix.style.left = "400px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnPix')
  .addEventListener('click', () => {
    formCartao.style.left = "-400px"
    formPix.style.left = "20px"
    btnColor.style.left = "76px"
})