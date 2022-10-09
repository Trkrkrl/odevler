//consolda girilen değerleri  alır - array yapar
const  radius=process.argv.slice(2)[0]*1
//string çektiğinden *1

//lambda ile yani foreach ile, girilmiş olan 2. değeri kullanır
//pi.r^2
function areaCircle(radius){
    let  area=Math.PI.toFixed(2)*Math.pow(radius,2)

    //hesapladığını da geri konsola yazdırır
    console.log(area)
}
//yukardaki fonksiyonun öçalışması için
areaCircle(radius)

//çalıştırmak için konsola node circleArea 2
//circle areaburada dosya adı
//dikkat node dosya adlarına çok takar,  camel cae olmaı, - olmamalı, node yazıdı içermemeli