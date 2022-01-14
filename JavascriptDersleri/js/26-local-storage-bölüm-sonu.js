//** LOCAL STORAGE 26- BOLUM SONU EGZERSİZLERİ */
//**************23-           */

let counter=localStorage.getItem('counter')?number(localStorage.getItem('counter')):0//
//başlangıçta sıfır olmasın localde depolanan conterden al 
let counterDOM=document.querySelector('#counter')
let increaseDOM=document.querySelector('#increase')
let decreaseDOM=document.querySelector('#decrease')

counterDOM.innerHTML=counter

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)
    


function clickEvent(){
console.log(typeof(counter ))


    console.log(this.id)   
    this.id=="increase"? counter=counter+=1 :counter=counter-=1 //bu şekilde de yazabiliriz-if else yapısını

    localStorage.setItem('counter',counter)
    counterDOM.innerHTML=counter
  

}