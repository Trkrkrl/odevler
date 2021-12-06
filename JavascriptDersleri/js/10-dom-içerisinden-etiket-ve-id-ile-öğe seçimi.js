// bir elementi id is ile çekeceğiz
//indexte  id ye sahip bazı elementler olşturduk
//   örneğin title id li bir h2

//document.getelementby ile farklı özelliklere sahip elemntleri seçebiliriz

// console.log(document.getElementsByTagName('h2'))
let title=document.getElementById('title')
title.innerHTML="Degisen Bilgi"

console.log(title.innerHTML)

// linki seçelim
//querrt selector sadece bir eleman seçer
 let link=document.querySelector("#kodluyoruzLink")
//   link bilgisine eriştik
link.innerHTML+=" id kullanarak degisti"
link.style.color="red"
link.classList.add('btn')
 console.log(link)
