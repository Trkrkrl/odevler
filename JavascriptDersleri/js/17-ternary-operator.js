//**************** ternary operaator ile short if kullanimi************ */
//*****Eğer kullanıcı adı bilgisiv arsa yazdır -yoksa kulanıcı bilginiz bulunamadı yaz */

let userName=prompt("Kullanıcı bilginizi giriniz:")
let info=document.querySelector("#info")

//ternary kullanımı
// kosul ? doğruyssa : yanlişsa


info.innerHTML=`${userName.length >0 ? userName:"Kullanıcı bilginiz bulunamadi!"}`