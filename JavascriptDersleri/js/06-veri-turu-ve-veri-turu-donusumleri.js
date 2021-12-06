//  VERİ TÜRÜNÜ ÖĞRENMEK VE VERİ TÜRÜ DÖNÜŞÜMLERİ



// *********** VERİ TÜRÜNÜ ÖĞRENMEK TYPE OF:
let price=111
let stringPrice="111"
let hasPassword=true

console.log(
   "price:",
    typeof(price)
)
console.log(
    "stringPrice:",
     typeof(stringPrice)
 )
 console.log(
    "hasPassword:",
     typeof(hasPassword)
 )
 // ***********metinselden int veya float a çevirmek****************/
 let number1="11"
 number1=parseInt(number1)
 console.log("number1:",number1,"ve number1 ın tipi:",typeof(number1))

 let number2="11px"
 number2=parseInt(number2)
 console.log("number2:",number2,"ve number2 ın tipi:",typeof(number2))

 let number3="11px"
 number3=Number(number3)
 console.log("number3:",number3,"ve number3 ın tipi:",typeof(number3))

 let number4="11.4PX"
 number4=parseFloat(number4)
 console.log("number4:",number4,"ve number4 ın tipi:",typeof(number4))
 
 let number5=55
 number5=number5.toString()

 console.log(number5,typeof(number5))