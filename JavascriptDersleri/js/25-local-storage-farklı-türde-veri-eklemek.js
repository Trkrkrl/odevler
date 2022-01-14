//local storage işlemleri
let user ={userName:"hakan yalçınkaya",isActive:true}// gidip konsolda user.isActive dersen true döner
console.log(user)

localStorage.setItem('userinfo',JSON.stringify(user))//içerisindeki bilgileri obje değil de string olarak kaydetsin diye json

let userinfo=localStorage.getItem('userinfo')//bilgiyi al
userinfo=JSON.parse(userinfo)
console.log(userinfo)

///stringifydan sora konsoldan userinfo çağırsan sitringler halinde gelir ve ttrue fals u göremez


//