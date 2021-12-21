//KODLUYORUZ JAVASCRİPT -ODEV 2 JS DOSYASI
//
    //ODEV DETAYI
    /* 
    Kuracağınız yapı tamamen size kalmış. Birkaç tane püf noktamız var.

    Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
    Yazacağınız JavaScript kodu içerisinde ;
    element eklemeyi sağlayan bir fonksiyon, 
    element silmeyi sağlayan bir fonksiyon,
    yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.

    Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir.
    Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.

    Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha işin artistliği. Öncelikli amacını sağlıyor olması lazım.
    Yazdığınız js dosyasını projenize eklemeyi unutmayın.
    Bonus

    Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın. */


//İNDEX.HTML SAYFASINDAKİ GEREKİL ELEMENTLERİN SEÇİLMESİ
let butonDOM=document.querySelector("#liveToastBtn")
let listDOM=document.querySelector("#list")
let taskDOM=document.querySelector("#task")//task input girilen elmanın idsi
let ulLength=document.getElementsByTagName("li")//tag name i li olan element(ler)i aldık



     //ELEMAN EKLEMEK İÇİN GEREKENLER
     
        
       
     
     //bir eleman ekleme fonksiyonu gerekli

    function elemanEkle() {
        // uyarı elemanını yukarı alalım ki fonk diğer işlemlere geçmeden hata olduğu görülsün
        //Önce aşağıdan esas fonksiyonu yarat

        //--------------------- UYARI ELEMANI KISMI---------------------//
            if (taskDOM.value == "")
                {  // input değeri boş girilirse 
                    $(".error").toast("show"); //error clasını kullanarak error vermesini istiyoruz
                    // fakat burada toast yapısını bilmek gerekli
                } 
                else//input değeri boş değil ise
                {
                    $(".success").toast("show");
                }
            //---------------------UYARI ELEMANI BİTİŞ---------------------------//


            //-----------------ELEMAN EKLEME FONKSİYONU ANA KISIM BAŞLANGIÇ    ----------------------------//
 
        let liDOM = document.createElement('li') //yeni bir li elementi yaratacagız
        //  yaratacagımız li elementini liDOM değişkenine atıyoruz
        listDOM.appendChild(liDOM); // Yaratacağımız liDOM değişkeninin 
        //her seferinde mevcut listeye eklenmesi append edilmesi gerektiğini tanımladık.
        liDOM.innerHTML = taskDOM.value; //lidomun içeriği yani inner htmls i ne olsun
        // Burda ise taskDOM yani inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
        taskDOM.value = "";

           
     //-----------------ELEMAN EKLEME FONKSİYONU ANA KISIM BİTİŞ    ----------------------------//

          //SONRADAN EKLENEN MADDELERİ SİLME işlemleri-- en aşağıda
          

          liDOM.onclick = check;
          // bir check fonksiyonu gerekli fakat  başka yerlerde de kullanılacğından eleman ekleme fonksiyonunun dışarısına yaz
//en aşağıda bir silme kodu varken neden burada tekrardan yazdık
//çünkü buradaki bizim elle girdiklerimizi silebilirken
//en alttaki fonksiyon hazırda gelenleri silebilmemize olanak sunuyor
          let closeButton = document.createElement("span");
              closeButton.textContent = "\u00D7";
              closeButton.classList.add("close");
              closeButton.onclick = removeButton;

              
              liDOM.append(closeButton);
              listDOM.append(liDOM);
              taskDOM.value = ("");
    }    
    //-----------------------check fonksiyonu-------
    function check(){
        this.classList.toggle("checked"); // hangi maddede olduğumuz belli olsun checki
     }//--------------------------------------------



        //ŞİMDİ BUTONU TIKLANABİLİR YAPALIM Kİ FONKSİYONA TASK IN inputu gideblisin
       //butonun adı btnDOM idi
       //btnDOM a eventini verdik bu da click olunca elemanEkle diye tanımmladığımız fonksiyonu çalıştıracak
       butonDOM.addEventListener('click',elemanEkle)


       // ---------------bir removeButton fonksiyonu yazmamız lazım------------------------------------
       function removeButton(){
        this.parentElement.remove();  // burda maddeyi silmek için -yani çarpının bulunduğu maddeyi-
        // silmek için parentElement.remove classını kullandık.
        //çarpı butonu nu eklemeyi unutma
    }
    //--------------------------remove button bitiş--------------------------------------------------



    //------- ------------------------------mevcut listeyi silmek için ---------------------------------------------------------------------/

            

                               
            //------------------ÇARPI BUTONU----------------/
            for(let i = 0; i <ulLength.length; i++)
            {
                let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir 
            //span elemanı oluşturup ve closeButton değişkenine atadık.

            closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
            closeButton.classList.add("close"); // bu butona close class'ını ekledik.
            closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.

                ulLength[i].append(closeButton); // closeButton'u ullength'in 0, 1, 2... indexlerine ekleyerek 
                //aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
                ulLength[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik.

            }//-------------------------------ÇARPI BUTONU BİTİŞ    ---------------------------


         


        