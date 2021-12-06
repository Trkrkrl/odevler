//ARROW FONKSİYON KULLANIMI
//mozilla linkş reference functions arrow function

function hello(firstName){
    console.log(` Merhaba ${firstName}`)

}
hello("javascript")
//-------------------------
//bir nevi değişken tanımala gibi çalıştı
//= ile paramatreyi belirttik ve => fat arror ile bir fonksiyon gibi  ççalışması gerektiğini belirttik
//return ü de süslününü içerisine yazdık
//
const helloFuncV1=(firstName)=>{console.log(` Merhaba ${firstName}`)}
helloFuncV1("hellofuncv1 çıktısı")

//tek parametre gelcek ,se parantezegerek yok, eğer süsülünün içerisinde tek işlem olacaksa süslüye de gerek yok

const helloFuncV2=firstName=>console.log(` Merhaba ${firstName}`)
helloFuncV2("hellofuncv2 çıktısı")


//------
const helloFuncV3=(firstName,lastName)=>console.log(` Merhaba ${firstName} ${lastName}`)
helloFuncV3("hellofuncv3 çıktısı","lastname info")

//------------------fat  arrow burada birden fazla iş yüklendiğinden süslü parantez ister
const helloFuncV4=(firstName,lastName)=>{
    let info=` Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info;
}
helloFuncV4("helloFuncV4 input name","hellofucV4 input lastname")
///-----------------------------------------------------------------
 


