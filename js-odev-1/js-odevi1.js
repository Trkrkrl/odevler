/******Kodluyoruz  merhaba      #kullaniciadih2id  hoşgeldin
 * 
*/
let adGirin=prompt("Kullanıcı Adiniz")
console.log(adGirin)


let info=document.querySelector("#info")//kulllanıcı adını alıp yazdırdığımız kısım
info.innerHTML=`Merhaba , ${adGirin} ! Hoş Geldin!`
console.log(info)
//*******************************zaman  */
let datess=document.querySelector("#myClock")// zamanın yazılacağı elementi seçtik

var currentDate= new Date();//zaman için yeni bir eleman olşturduk.S
var dayString = [ 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi' ,'Pazar',];//haftanın günlerini dizi halinde yazdık ki getdate de sayıolarak ver,yor o sayı sırasını çekebilsin

var d = new Date(dayString);//günü çekmesi için



var gunsayi=(currentDate.getDay()-1);

console.log("bugün haftanın kaçıncı günü:" + (gunsayi+1))//consoleda sayıyı görmeye yarar

var gunAdi=dayString[gunsayi]//gün adı dizi içerisindeki  getDAy den gelen sayınaki eleman

var getDate="Bugün "+ currentDate.getDate() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear() +" günlerden:"+ gunAdi
+" Saat:"+ currentDate.getHours()+ ":"+currentDate.getMinutes() ;


datess.innerHTML=getDate



