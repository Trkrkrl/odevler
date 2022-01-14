//FORM SUBMİT
let formDOM=document.querySelector('#userForm')
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    //ben söyleyene kadar hibir şey yapmasın diye
    event.preventDefault()
    console.log("işlem gerçekleşti")
}