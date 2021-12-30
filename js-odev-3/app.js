const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    //hadi bir ürürnün adınıı değiştirelim çalışıyor mu:D
    title: "İsmini değiştimeyi denediğimiz yiyecek",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Yukarıdaki kısım ödev için hazır olarak verilmiştir
//Her ne yapacaksak artık yukarıdaki kısım html dosyasındaymış gibi çalışacak

/* ------------------------------ODEV AÇIKLAMASI---------------------------------------------
Sitedeki içerik JavaScript'te menu şeklinde bir dizi içinde objeler olarak tanımlanacak.

Id, title, category, price, img ve desc bölümleri olacak.

İçeriği istediğiniz gibi değiştirebilirsiniz yalnız değiştirirken kategori isimlerine ekstra dikkat edin.

Butonlar da js dosyasından gelecek.

Site içerisinde map, reduce gibi methodları kullanmanız gerekecek. Hatırlamıyorsanız 

Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması #38 isimli videoya dönebilirsiniz.*/
//-------------------------------------------

//-----nasıl yapıldı pek?

// menü  elemanları ection-center adlı bir classta tanımlanmış, bunun querryselector ile çekelim ve section diye tanımlayalım
//buton elemanları da btn-container class ı na sahip bir konteyner de , buna da aynı şekildequerry selector yapalım ve butonConteynerim diyelim
let section = document.querySelector(".section-center")
let butonContainerim = document.querySelector(".btn-container")

/* Butonları Tanımlama */
//bir buton yaratma fonksiyonu: içerisine yazdığımız buton adını html eleman içerisde id ve düzyazı kısmına yazacak 

function createButton(buttonName) {
  let btn = `<button class="btn btn-outline-dark btn-item" id="${buttonName}">${buttonName}</button>`
  return btn
}



/* Butonları Ekleme */
// bu ise buton ekleme fonksiyonu: içer

function addButton() {
  //yukarda yarattığımıız konteyner yardımıyla btn konteyner içerisine create buton çalıştırarak, adı aşağıda verilen butonlar yaratıp ekleyecek
  //
  butonContainerim.innerHTML = createButton("All") + " " + createButton("Korea") + " " + createButton("Japan") + " " + createButton("China")
  //yaratılıp eklenen bu butonlara  tıklanınca çekilecek elemntleri veriyoruz,
  //addfoods*** şeklindekii bu fonksiyonları biraz daha aşağıda tanımladık
  document.getElementById('All').addEventListener('click',addFoodsAll)
  document.getElementById('Korea').addEventListener('click',addFoodsKorea)//ör:tıklanınca KOREAadlı butonu alaca ve addfoodskorea yı çalıştıracak
  document.getElementById('Japan').addEventListener('click',addFoodsJapan)
  document.getElementById('China').addEventListener('click',addFoodsChina)
}



/* Yemek Tanımlama */
//yemek tanımlama fonksiyonu(aşağıdaki foreach sayesinde herbir elemnt işleniyo) 
//ve bir yemek tanımlıyor-ki title ,id,img,price description en yukardaki const menu de tanımlı
//foreach sana ne gönderirse .img si , .price si vs al şu şeklide kullan, ve htmli yarat demek bu
function foodCreator(name) {
  let item = `<div class="menu-items col-lg-6 col-sm-12">
  <img src="${name.img}" alt="${name.title}" class="photo">
  <div class="menu-info">
    <div class="menu-title">
      <h4>${name.title}</h4>
      <h4 class="price">${name.price}</h4>
    </div>
    <div class="menu-text">
      ${name.desc}
    </div>
  </div>
</div>`
  return item
}



/* Tüm Menü Ekleme */
////buradaki menu en üstte const ile tanımlandı ve 9 yemeği içeriyor- foreach ile yemek yaratma fonksiyonundan
//çıkanları burada döngü şeklkinde ekliyor-- sectionun inneri her ne ise onun yanına menudeki sıradaki elementi de ekliyorum demek
//ayrıca buradaki foreach sayesinde menudeki her elementi foodcreatora atıyor ve işliyor
//bu foodall için yani:filtreleme olmadan
function addFoodsAll() {
  section.innerHTML = ""
  menu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}

/* Kore Menüsü Ekleme */
//örnek devam: addfoodskoreayı çalıştırdı:nolcak şimdi:
//korea adlı kategoriye göre filtrle ve buraddan gelen her elementi foodcreator ile işle ve inner htmle atarak seyirci karşısına çıkar
function addFoodsKorea() {
  section.innerHTML = ""
  const koreanMenu = menu.filter(x => x.category == "Korea")
  koreanMenu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}
//JAPON CE CHİNESE DE AYNI ŞEKİL VE MANTIKLA ÇALIŞIYOR

/* Japon Menüsü Ekleme */
function addFoodsJapan() {
  section.innerHTML = ""
  const koreanMenu = menu.filter(x => x.category == "Japan")
  koreanMenu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}

/* Çin Menüsü Ekleme */
function addFoodsChina() {
  section.innerHTML = ""
  const koreanMenu = menu.filter(x => x.category == "China")
  koreanMenu.forEach(element => {
    section.innerHTML += (" " + foodCreator(element))
  });
}

//BUNALR NE İŞE YARIYOR PEKİ
window.addEventListener('load',addButton)//BU açık aşağıdaki kapalı yapalım: sadece butonlar gelir butona tıklayınca uygun element gelir
//aşağıdaki kapalıyken şu olmaz: ilk başta tüm elemntler görülmez
window.addEventListener('load',addFoodsAll)