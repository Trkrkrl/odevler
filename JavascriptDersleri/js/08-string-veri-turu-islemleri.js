//************* string veritürü işlemleri */
let email="hakanyalçınkaya@gmail.com"
let firstName="hakan"
let lastName="Yalçınkaya"


// string karakter sayisi--> length

console.log(email.length)

//   ilk karakter bulmak  [0] ıncı index element bulmak , bu arraylerden geliyo

console.log(firstName[0])
console.log(firstName.charAt(0))

// büyük harf küçük harf yapmak
firstName=firstName.toUpperCase()
console.log(firstName)


lastName=lastName.toLowerCase()
console.log(lastName)

//string içerisnde kelime aramak bilgi aramak
console.log("aranıp bulnan  ifade . ncı değerdir",email.search("@"))
console.log(email[15])

//olmayan bir şey aratırsam -1 cevabı verir

//belirli bir dilimi almak istersek---slice
console.log(email.slice(1,10)) 
//@ den sonrasını nasıl alırız domain yani


//MESELA SADECE G MAİL YAZISINI ALMAK İSTİYORUZ
// DOMAİN İ SEÇ VE . YA KADAR OLAN KISMI AL DİYECEĞİZ


let DOMAIN=email.slice(email.search("@")+1)// burada emailde @ i arat: ka.ıncı ifadeyse +1 ekle / 
//o uncu elementten sonrasını slice et gösterir
console.log(DOMAIN)
console.log(
DOMAIN.slice(0,DOMAIN.indexOf("."))
)

/// bilgiyi değigşti ->replace
email=email.replace('gmail.com','kodluyoruz.org')
console.log(email)
// 'kelime' tek tırnak kullandık

// içeriyor mu  includes
console.log(
email.includes('@')//true false ile çalışır
)
// istediğimiz bilgiyle başladı mı bitti mi-- startsWith , endsWith

console.log(
    email.startsWith("h"),
    email.endsWith("q")
)
// ilk veya son harfi büyük küçük yapmak
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].
    toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName )




