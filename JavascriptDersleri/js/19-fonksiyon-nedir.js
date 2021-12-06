//* fonksiyonu tanimlamak
function hello() {
        console.log("Hello")
        helloWorld()//parantezi unutma--aşağıdaki fonksiyonu da içerisine aldık
}
hello()//bu parantezi aç kapa yapmazsan  calişmaz
function helloWorld(){
    console.log("helloWorld")
}
// function userCheck(){//16.ders kodunu direkt içerisine aldık-girdi elementlerini çekmemiz gerek
//     if (userName&& age>=18 ){
//         info.innerHTML("ehliyet alabilirsiniz")
//     }else if(!userName){
//         info.innerHTML="Kullanici Adiniz Yok"
    
//     }else if(!(age>=18)){
//         info.innerHTML="Yas Biginiz yok veya 18Yasindan Kucuksunuz!!."
//     }
// }