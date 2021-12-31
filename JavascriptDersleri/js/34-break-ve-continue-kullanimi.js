//BREAK VE CONTİNUE
// w3 schools  js_break

// hem while hem continue

const LOREM_LIST=[
    'lorem','ipsum','dolor','amet','consectetur','sit','kem','küm'
]

let counter=0;  
// for(;counter<10;counter++){
//     if (counter===5) {break}//break nredeyse oraya kadar oluyor
//     //log aşağıdaysa 4 , log yukardaysa 5 i de kapsayacak kadar

    
//     console.log(counter)
// }
for(;counter<10;counter++){
    console.log(counter)
    if (counter===5) {continue}/// 5 gelince atlar devam eder--logda 5 olmaz


    
    
}

const UL_DOM=document.querySelector('#userList')

let index=0;

for(;index<LOREM_LIST.length;index++){
    if (LOREM_LIST[index]=="dolor"){continue}//ok
    //hatanın sebepleri 1. ya create li yapamıyoz-2.bu createe let lıdom a aktarılamıyo 3-lidom.nnerhtml çalışmıyor kim bu değil sorun
    // 
    let LI_DOM=document.createElement('li')
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.append(LI_DOM)


    
    console.log(LOREM_LIST[index])

}