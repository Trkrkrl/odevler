//ARRAY -DİZİLER


//ARRAY PLUŞTURMAK
let domain="kodluyoruz"
let isActive=false
let items=[15, 25, 33, isActive, domain]
console.log(items)
 

let emptyArray=[]//boş array

// arraydeki eleman sayisini oğrenmek
console.log(items.length)
document.querySelector('#info').innerHTML=items.length 


// arraydeki ilk elemanın çağrılması
console.log(items[0])

// son elemana nasıl ulaşırızz


console.log("items in son elemanı",items[items.length-1])

//değişken içreisindeki bilgignin array oolup oolmaıdğınn kontrl edilmesi

console.log(typeof(items))// object olarak ıktı veriyor


console.log(
    Array.isArray(items)
    )
    // hnagileri isArray ->true verir? array mi değil mi mesela number veya bool bişey verirsen false verecek
    console.log(    
        Array.isArray("[]",[])
    )

    console.log(  "1:"  ,
        Array.isArray([])
    )
    console.log(  "true"  ,
        Array.isArray([])
    )
//ortadaki eleman

console.log(items[Math.floor(items.length/2)])