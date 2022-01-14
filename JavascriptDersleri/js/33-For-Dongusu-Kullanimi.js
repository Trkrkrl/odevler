//FOR DONGUSU
// MOZİLLA SİTESİ LOOPS AND İTERATİONS


//for({başlangıç Ataması}); [koşul ifadesi]; [arttırım ifadesi]{}//c#taki gibi mi lan

let users=["lorem", "ipsum", "Dolor"]//bir listemiz var
//bu listeyi indextek bir listeye atayalım

//for alternatif 1

// for(let index=0; index<10; index++){
//     console.log(index)
// }

//for alternatif 2


// let index=0;
// for(;index<10; index++){
//     console.log(index)
// }
//for alternatif 3

const userListDom=document.querySelector('#userList');//indexteki elemana ulaştık

for(let index=0;index<users.length; index++){
    const liDOM=document.createElement('li')// burada li elementi yarattırıyoz, döngü sayesinde her bir eleman için bir tane  yaratacak
    liDOM.innerHTML=users[index]//bundan sonra ise her sefeerinde buradaki userlistDOma  bunu eklememiz lazım
    userListDom.appendChild(liDOM)


    
}//bu konsola yazdırdı



