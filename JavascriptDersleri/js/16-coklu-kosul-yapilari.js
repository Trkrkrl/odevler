//*******************************************ÇOKLU KOŞUL YAPISI */
let userName=prompt("Kullanici Adiniz:")
let age=prompt("Yasiniz:")
let info=document.querySelector("#info")

if (userName&& age>=18 ){
    info.innerHTML("ehliyet alabilirsiniz")
}else if(!userName){
    info.innerHTML="Kullanici Adiniz Yok"

}else if(!(age>=18)){
    info.innerHTML="Yas Biginiz yok veya 18Yasindan Kucuksunuz!!."
}
