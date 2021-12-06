// bölüm sonu egzersizi


// 1:prompt ile alınan bilgiye göre aşapıdaki yapıya göre not bilgisini infoya yazdı

//0-49 ff
//50-59 fd
//60-64dd
//65-69dc
//70-74cc
//böyle gidiyor

// 2.girilen veri istenilen aralıkta mı kontrol et
//3- ff üzgün surat olsun
//ff class bilgisi text-danger , diğerleri text-primary

//hatta bootstrapten aldığımız  smile ve sad face kodununu ekleyelim


const SMILE=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
</svg>`

const SADFACE=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-dizzy-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
</svg>`


let examGrade= prompt("Puani Girin")
let info= document.querySelector("#info")

let textInfo;
//100DEN BÜYÜK OLMAMASI  VE SIFIRDAN BÜYÜK OLMASINI SAĞLAYAN KAPSAYICI BLOK
if (examGrade>=0 && examGrade<=100 ){
    textInfo=SMILE
    info.classList.add('text-primary')
    if(examGrade>=90){
        textInfo+=" AA"
    }else if(examGrade>85){
        textInfo+=" BA"
    }else if(examGrade>80){
        textInfo+=" BB"
    }else if(examGrade>75){
        textInfo+=" CB"
    }else if(examGrade>70){
        textInfo+=" CC"
    }else if(examGrade>65){
        textInfo+=" DC"
    }else if(examGrade>60){
        textInfo+=" DD"
    }else if(examGrade>50){
        textInfo+=" FD"
    }else if(examGrade<50){
        textInfo=`${SADFACE} FF`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }

}else{
    textInfo="Yanlış şekilde bilgi girişi yaptınız."
}

info.innerHTML=`${textInfo}-> ${examGrade}`