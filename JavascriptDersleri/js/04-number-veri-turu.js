//number veri turu tainmlama

let price=100
let tax=0.18
let priceTax=price*tax
let total=priceTax+price
console.log(price,tax,priceTax)
// eğer kod sığmazsas alta alabilirsin
console.log(
    "Fiyat:",price,
    ", KDV Orani:",tax,
    ", KDV Tutari:",priceTax,
    "Toplam Tutar:" ,total
)

    


//artirma ve azaltma
// sayıcı
let counter=320
counter=counter+1
// veya counter+=1
// veya counter ++;
console.log(counter)

// 10 ile çarpmak için
counter *=10
console.log(counter)


//mod % kullanımı
//sayi tek mi cift
console.log(3%2)





//üs alma

console.log(2**4)


//Aşağı yuvarlama
console.log("aşağı yuvarlama",Math.floor(1.9))


// yukarı yuvarlama
console.log("yukarıyuvarlama",Math.ceil(1.1))


//yakına yuvarlama
console.log("yakına yuvarlama",Math.round(1.2))

let stringNumber="1232"
let newNumber=Number(stringNumber)
console.log(newNumber)

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!')
}