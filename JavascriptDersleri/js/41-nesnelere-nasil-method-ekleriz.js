//NESNELERE NASIL METHOD EKLERNİR?     

let user1={
    firstName:"Bilgin",
    lastName:"Uzman",
    score:[1,2,3,4],
    isActive: true,
    shortName:function(){return `${this.firstName[0].toUpperCase()} ${this.lastName.toUpperCase()}`} 

}
console.log(user1)