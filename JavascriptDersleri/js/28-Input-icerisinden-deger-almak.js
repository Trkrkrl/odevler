//FORM SUBMİT
let formDOM=document.querySelector('#userForm')
formDOM.addEventListener('submit',formSubmit)



function formSubmit(event){
    //ben söyleyene kadar hibir şey yapmasın diye
    event.preventDefault()
    console.log("işlem gerçekleşti")



    //spesifik bir bilgi almak istiyoruz
let scoreInputDOM=document.querySelector('#score')
//WEB aplikasyonlarında prompt yerine input u kullanmalıyız bunu öğrenmeliyizz
console.log(scoreInputDOM.value)
localStorage.setItem('score',scoreInputDOM.value)
}