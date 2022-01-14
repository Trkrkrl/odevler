//HATA YONETİMİ - TRY AND CATCH

//burada itemsi array olarak düzgün tanımlaamadık, ahatıl yeri buldu, eğer hata yönetimi yapmazsak adaha aşağı inemeyiz
//eğer hatayı yakalarsan error uçallıştır ve bilgi ver

let products;

try{
    
    products.forEach(item => console.log(item))

}catch(error){
    console.log("error:",error)

}

console.log("hata yonetimi duzgun calisiyor ")
let info ="kodluyoruz"
console.log(info)