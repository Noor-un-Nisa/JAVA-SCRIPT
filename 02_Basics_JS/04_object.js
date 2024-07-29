// object using a constructor
// singleton method
const information = new Object()
information.name = 'noor'
information.semester =  2
information.age = 19
console.log(information)

// nesting of objects
const userData = {
    name:{
        yourName:{
            firstName:'noor',
            middleName:'un',
            lastName:'nisa'
        },
        fatherName:{
            firstName: 'muhammad waqas',
            lastName: 'malik'
        }
    }
}
console.log(userData.name.yourName.firstName)

// combining different object there are 3 ways but spread operator way is most reliable.

const obj1 = {1:'34', 2:'35'}
const obj2 = {3:'36', 4:'37'}
const obj3 = {5:'38', 6:'39'}

const obj4 = {obj1,obj2,obj3}// it should not be used at all
console.log(obj4)
const obj5 = Object.assign(obj1 , obj2 , obj3)//first one is the target object means in that all other objects are stored.
console.log(obj5)
const obj6 = {...obj1 , ...obj2 , ...obj3}
console.log(obj6)

// methods
console.log(Object.keys(information))
console.log(Object.values(information))
console.log(Object.entries(information))
console.log(information.hasOwnProperty("name"))