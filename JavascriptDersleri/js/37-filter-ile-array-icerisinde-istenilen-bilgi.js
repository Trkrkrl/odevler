//FİLTER KULLANIMI

const  PRODUCTS =["Mic","kable","Phone","Speaker","Desktop PC","Server","Mouse","Keyboard"]

//5ten fazla harfi olanlar
const NEW_PRODUCTS =PRODUCTS.filter(item=> item.length>5)//productsa git filtre uygula ve elemanın boyu 5 ten uzun olanları göster
console.log(NEW_PRODUCTS)



//aktif kullanıcılar 

const USERS =[
    {fullName: "Ayse Sumer", isActive:false},
    {fullName: "Ahmet Urgan", isActive:true},
    {fullName: "Asya Basar", isActive:true},
    {fullName: "Aksel Durmaz", isActive:false},

]
//aktife users diye bir element -->buna aktif mi cevabu true olanları ver
const ACTIVE_USERS = USERS.filter(user=> user.isActive===true)
console.log(ACTIVE_USERS)
//----------

