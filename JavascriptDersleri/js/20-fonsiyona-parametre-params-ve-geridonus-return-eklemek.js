//fonsiyona-parametre-params-ve-geridonus-return-eklemek
// parametre atamak ve geri  dönüş almak

//fonksiyonunn dışarı daha az  bağımlı olması daha iyiy olur


let firstName="Lorem"//bu ayrı bişey

function greetings(firstName="", lastName=""){//bunun içerisindeki is ayrı bişey---DEFAULT PARAMETRE ALIYOR 
    console.log(`Merhaba ${firstName}`)//firstname varsa göster yoksa boş göster
    console.log(`Merhaba ${firstName} ${lastName }`)

}
console.log(firstName)//değişken
greetings()//fonksiyona arametre göndermedik
greetings("parametre")
 

function greetings2(firstName,lastName){
    let info=`Merhaba ${firstName} ${lastName }`//fonksiyon içerisinde info dene şeyin bilgisi var ve
    return info//return ediyor//buradaki info blok içerisinde  

}
let greetingsInfo2= greetings2("Ad2","Soyad2")//buradaki info fonk içerisindekinden farklı
console.log(greetingsInfo2)

// indexteki id yi de kullaann bir fonksiyon yazalım  
//DOM
function domIdWriteInfo(id,info){//istedğim id yi bulsun nereyegirimek istediğim// info içeri girmek istediğim bilgi
    let domObject=document.querySelector(`#${id}`)//id yi seçtik
    domObject.innerHTML=info//bu fonk id bilgisini alır ve alınca infoyu içeri işler
}

// mesela aşağısı için yapay bir info
let htmlInfo=`<span style="color:red"> color redddd</span>`

domIdWriteInfo('greeting', htmlInfo) //id yi  verip infoyu girince direk t içine bilgi gönderebiliyoruz


