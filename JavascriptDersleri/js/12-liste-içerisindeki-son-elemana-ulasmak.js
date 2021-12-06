//*************************************Liste içerisindeki son elemana ulaşmak */
let lastChild=document.querySelector("ul#list>li:last-child")// id si list olan ul lerin li lerinden sonuncu demek
lastChild.innerHTML="son oge degistirildi"

let firstChild=document.querySelector("ul#list>li:first-child")// id si list olan ul lerin li lerinden sonuncu demek
firstChild.innerHTML="son oge degistirildi"

console.log(firstChild)

let ulDOM=document.querySelector("ul#list")// uldom bu id ye sahip ul dir

let liDOM= document.createElement('li')//liDOM yaratırken create element li dedik bir li oluşturdu, ama nereye koyacağını bilmiyor

liDOM.innerHTML="kendi oluşturduğumuz öğe"//bu yerleştrimediğimiz ama oluşturduğumuz li nin içeriğini değiştirdik /ayarladık


ulDOM.append(liDOM)//Bu lidom u uldom a append et dedik
//appen dışında da bikaç fonksiyonvar

//APPEND EN SONA EKLERKEN
//PREPENDE BAŞA EKLER
ulDOM.prepend(liDOM)


