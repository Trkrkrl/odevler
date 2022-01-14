//fetch api ile çalışmak
//JSON DOSYADAN VERI CEKME VE KONSOLA YAZDIRMA
fetch("/JavascriptDersleri/data/settings.json").then(
    response => {
        return response.json()
    }
).then(responseJson => {
    console.log(responseJson)
}
)
//API UZERINDEN VERI YANI WBTEKİ BİR SITEDEN CEKTIK


fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json() 
).then(rJson => {
    rJson.forEach(item => {
        console.log(item)
    })
})


/*fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
  responseJson.forEach(item => {
    console.log(item)
  })
})*/