//ARRAY MAP KULLLANIMI
const USERS=["AYSE","MehMet","TugCE","AkSEL"]

// userName içerisinde orjinal isim kalsin
//  shortName içerisinde ilk harf BÜyük ve .
//newname içerisinde ilk harf büyük
////{userName:"AYSE",shortName: "A.",newName: "Ayse"}

const NEW_USERS=USERS.map(user=>user.toLowerCase())
console.log(NEW_USERS)
//*************************************** */
const USERS_OBJ=USERS.map(item=>
    {
        return{
            userName:item,shortName: `${item[0]}.`,newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }
    }
)
console.log(USERS_OBJ)
//---------------------------------------------------------------- 