//OBJECT VE ARRAY DESTRUCTING

//Object Destructuring:
let settings ={
    userName:"loremIpsum",
    password:"badPassword",
    isActive:false,
    ip:"127.0.0.1",
    serverName:"kodluyoruz.org"

}



//obje içerisindeki bilgilerin tek seferde çıkarılması
// let username=settings.username
// console.log(username)
let{userName: user, password, isActive, ip:serverIP, serverName} = settings//bunlar eşittir settings dedik ve  bunları değişken içerisine aldık
//ve bu sayede tek tek kullanabiliryoruz
console.log(user,password,isActive,serverIP,serverName)//ekranda görelim
console.log(settings)//bilgiler setting içerisinde var fakat aryık direkt de ulaşabiliyorz

console.log(user)//tek seferde yazdırabiilyoruz 


//obje içerisindeki bazı bilgilerin çıkarılması ve ayrıca rename gerekti
let{userName:userName2, password:password2, isActive:isActive2, ...newSettings}= settings// kalanını newsettings diye bir yapıya at dedik??
//yani ilk üç bilgiyi aldık, kalan bilgiyi de newsettings adında yeni bir arrayde tut demiş olduk
//konsolda new settings ip ve servername getirecektir
//yazdıralım
console.log(userName2, password2, isActive2, newSettings)


//objenin destructuring ile kopyalanması

// console.log("--------------------objenin destructuring ile kopyalanması-------------------------")
// console.log("settings:",settings)

// let settings2=settings
// settings2.userName="değişen bilgi"
// console.log("-------------- settings2 settingse eşitlendi ve settings2 nin  settings in username i değişen bilgi oldu")
// console.log("settings:",settings)


// console.log("settings2", settings2)

//YUKARDAKİ SÜREÇ KOPYALAMA YERİNE SETTİNGS İLE SETTİNGS 2 Yİ EŞİTLEDİ BU BÜYÜK BİR HATAYA YOL AÇABİLİR BUNUN YERİN ŞU YAPILMALI

//DESTRUCTURİNG KULLLANACAZ

let settings2={...settings}//bu settingsteki elmanları tek tek çıkart ve settings 2 ye ekle demek
settings2.userName="Değiştirlmiş userName"
console.log("settings", settings)
console.log("settings2",settings2)

//arraydeki bilginin çekimi
console.log("+++++++++++++  array örneği       +++++++++++++++")


let score=[100, 200, 300, 400]

let[score1, score2, ...otherScore]=score
console.log(score1, score2, otherScore)
//object kopyalamk ile aynı .... let settings2={...settings}
let copyOfScore=[score]
console.log(copyOfScore)




