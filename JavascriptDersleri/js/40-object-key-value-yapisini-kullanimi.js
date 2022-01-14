// OBJECT ANAHTAR  -DEGER YAPISI- ---- KEY VALUE İLİŞKİSİ YANİ-------------------------
//key1:1, key2:2, key3:3, key4:4, key5:5

let laptop={
    //burada adlandırma kurallarina dikkat et ,rakam ile başlama, camelcase sadikkal
    brand:"Apple",
    model:"MacBook Pro",
    agirlikKg:2

     

}
//Doğru anahatar bilgisi Oluşturmak
console.log(laptop.brand)
console.log(laptop.model)
console.log(laptop.agirlikKg)

//Anahtar Bilgisine Yeni Değer eklemek
laptop.brand="Mac"
console.log(laptop)


//yeni bilgi eklemek 
laptop.version="10.15.7"
console.log(laptop)


//FARKLI ŞEKİLLERDE ULAŞTIK BURALARDA
//Anahtar Bilgilerine ulasmak (keys)->object.keys(item)
keys=Object.keys(laptop)
console.log()
console.log(Object.keys(laptop))

for(const key in keys){

    console.log(key)

}


//veya
keys.forEach(keyInfo=>{
    console.log(keyInfo)
    console.log(laptop[keyInfo])
})
//bu şekilde Ulaşabilirsiniz




// value bilgisine ulaşmak

console.log(Object.values(laptop))//sadaece değerlerin olduğu bir list geldi

let values=Object.values(laptop)

values.forEach(value=>{
    console.log("value", value)
})