//*************  Template Literals  Kullanımı****** */

// hoca bir web adresi yazmış onu ders scriptinden alabilirsin istersen

let username= "hakan"
const DOMAIN="kodluyoruz.org"

let email=username + "@" +DOMAIN
console.log("Merhaba",username,"sitemize hoşgeldin"," mail adresin:",email)

let info=`Merhaba ${username} sitemize hoşgeldin. Mail adresin : ${email}
mail adresinin uzunluğu: ${email.length}

kisa isminiz: ${username[0]}.

günün saat bilgisi: ${new Date().getHours()}
`

console.log(info) 