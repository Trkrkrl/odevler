// ************************* Prompt il Kullanicidan  bilgil Alalim**********************************/
//mozillanınn sitesinde prompt ile ilgili bilgi var

let fullName=prompt("Lütfen adınızı giriniz:")   
console.log(fullName)
let greeting=document.querySelector("#greeting")//bu girişte indexteki başlığın id si

greeting.innerHTML=`${greeting.innerHTML}<small style="color:red">${fullName}</small>`//bu sayede stye ve template literal kullandık
//inner html içerisine yeni bir bilgi ekleyebildik
