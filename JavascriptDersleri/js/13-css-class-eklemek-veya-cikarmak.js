//****** css class eklemek veya çikarmak */
let greeting=document.querySelector("#greeting")//greeting i seçtik

greeting.classList.add("text-primary")//greeting e text-primary adında bir class ekledik css olmada etkisi olmaz
//ama konsolda ve html de yazar
//şimdi gidip indexte head içerisine internal css ekleyelim
greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")//bu şekilde birden fazla classekeleyebiliriz

//içerisinde nasıl class sileceğiz
// greeting.classList.remove("text-primary") //bunun la maviyi kaldırır
greeting.classList.remove("new-info","second-class","third-class")  
console.log(greeting.classList)//


