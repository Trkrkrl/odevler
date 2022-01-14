// FOR EACH  İLE ARRAY İÇERİSİNDEKİ OGELERİN ÇAĞRILMASI

const  PRODUCTS =["Laptop","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard"]
//arrow function daşimize yarayacak
//PRODUCTS.forEach((product, index, array)=>console.log(product, index, array))

//PRODUCTS.forEach((product, index, array)=>console.log(array[index]=`${product.toUpperCase()}`))

PRODUCTS.forEach((product, index, array)=>array[index]=`${product.toUpperCase()}`)
console.log(PRODUCTS)





/*33 ten aldık
for(let index=0;index<users.length; index++){
    const liDOM=document.createElement('li')// burada li elementi yarattırıyoz, döngü sayesinde her bir eleman için bir tane  yaratacak
    liDOM.innerHTML=users[index]//bundan sonra ise her sefeerinde buradaki userlistDOma  bunu eklememiz lazım
    userListDom.appendChild(liDOM)
    */

    const userListDOM=document.querySelector('#userList')

    PRODUCTS.forEach((item)=>{
        const liDOM=document.createElement('li')
        liDOM.innerHTML=item
        userListDOM.append (liDOM)



    }
    )