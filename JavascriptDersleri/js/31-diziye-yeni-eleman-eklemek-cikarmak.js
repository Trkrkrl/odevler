///**********************      Array yapısına Oge eklemek ve Array içerisinden istenilen ögenini çikarilması */


let items=[10, 20, 30, 40]
console.log("items -ilk hali:",items)


// ARRAY : SONA ÖGE EKLEMEK->PUSH



items.push(50)
console.log("50:",items)


//ARRAY:BAŞA OGE EKLEMEK-->Unshift

items.unshift(5)
console.log("5:",items)

//Array: sondaki ogeyi Çikarmak --> POP
let lastItem=items.pop();//sondan çektiğimiz elemanı lastitem içerisine ekledik 

console.log("lastitem:",lastItem,"items:",items)//yazdırdık bak önceki halin son elemanı buyfu , dizinin şu anki hali de bu diye


// Array: baştaki öğeyi Çikarmak--> shift
let firstItem=items.shift();// items daki ilk elemanı seçip firstItem a atadık

console.log("firstitem:",firstItem,"items:",items)


//  bir ögenin bilgisini degistirmek
items[0]=73;//ilk eleman
items[items.length-1]=232;//son eleman
console.log(items)
//10000. eleman da ekleyebiliriz-- arada kalan yere boş der



