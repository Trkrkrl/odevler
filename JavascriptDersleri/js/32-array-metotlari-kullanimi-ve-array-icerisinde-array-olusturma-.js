//ÇOK KULLANILAN DİZİ METOTLARI VE ARRAY İÇERİSİNDDE ARRAY

//W3 SCHOOLS ARRAY METHOTS VEYA MOZİLLA SİTESİ

let items=[1, 2, 3, 4, 5]
let femaleUsers=["ayşe", "Hulya", "Merve"]
let maleUsers=["Ahmet","Hasan","Mehmet"]


items.unshift(femaleUsers)// female  users arrayini items in başına eklemek
items.push(maleUsers)
console.log(items)



console.log("itemsin eleman sayısı 5+1+1:",items.length)//items içerisinde 5 eleman vardı 2 tane daha ekledik 7 oldu

//Şimdi sıfırıncı elemanımız female dizisi
console.log(items[0])

console.log("içteki dizinin boyutu",items[0].length)//dersen femalin sıfırıncı elamanını seçersin
console.log("içteki dizinin 0 ıncı elemanı",items[0][0])


// array içerisinden oge ayirmak--splice(pos, item?)
let newItems=items.splice(2,4)//2den başlayarak 4 eleman
console.log("new items",newItems) 
console.log("items",items)



//array içerisindeki ogenini index bilgisini bulmak--indexof('')
items.unshift("lorem")
items.push("ipsum")

console.log("ipsum itemste kaçıncı indiste",items.indexOf('ipsum'))


//ARRAY kopyalamak--> slice ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, [ES6]
let copyItems=items

console.log("items",items)

copyItems.pop()//son ogeyi copy itemstan çıkardık

console.log("items",items) 
console.log("copy items", copyItems)
// fakat burada gördük ki sadece copyden çıkarsak da normla items dan da çikar, referans gibi
//peki nasıl kopyalarız

copyItems=items.slice()//kopyalama yaptı
copyItems.pop()//tekrardan pop yaptık
console.log("items kpya sonrası",items) 
console.log("copy items kopya sonrası", copyItems)
//yeni nesil yaklaşımda es6 te direkt içeri aynen verebiiliyoruz
let es6Items=[...items]//es6  ve sonrasında gelen kopyalama işlemi
console.log(es6Items)


//iki array bilgisini birleştirmek-->[ES6,ES6]

let allUser=[...femaleUsers,...maleUsers]//es6 ile birden fazla array yapısını birleştirmek
console.log(allUser)


//ARRAY İçerisindeki bilgiyi Stringe çevrimek-->to string  join

console.log(allUser.toString())

//veya join ile

console.log(allUser.join(" -- "))

//  İstediğimiz İndex Bilgisine oge eklemek---> splice(index, 0, value)
//buradaki sıfır parçalama demek?
 allUser.splice(allUser.length-1,0,"melisa")//en sondan bir öncekine
 //tam ortasına?
 allUser.splice(Math.floor(allUser.length/2),0,"Loremortayaeklenen")
 console.log(allUser)


