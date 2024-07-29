//  there are two ways to declare an onject:
//1. constructor way => singleton is used
// object.create in constructor way
//2. literal way
// declaring an object in literal way
const anyMark = Symbol('mole on left cheek')
const user = {
    name : "noor-un-nisa",
    age : 19,
    email : "noor@gmail.com",
    semester : 3,
    institute : "university of lahore",
    languageLearnt : ["1.HTML(complete)" , "2.CPP(incomplete & on hiatus)" , "3.JS(incomplete but learning)"],
    studiesContinued : true,
    [anyMark] : "mole on left cheek",//shows that a symbol is used as a key in object
    greetings: function()
        {
            console.log(`Hello ${this.name}`)
    },
    
    welcome : function()
    {console.log("Thank you for giving your information")}
}
//accessing an object
console.log(user)
console.log(user.institute)
console.log(user["languageLearnt"])
console.log(user.greetings())
Object.freeze(user)//it likes make it a constant and now we cannot makes any changes in it