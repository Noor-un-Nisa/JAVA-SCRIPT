// For Each Loop 
// High order array loop
// it is injected in arrays by default
// it is like a method
// languages.forEach()
// call back function ka naam nahi hota
// forEach loop mai function ko call kiya jata ha
const languages = ['Java Script','Cpp','Hyper Text Markup Language','Cascading Style Sheet']

// with simple function
// ArrayName.forEach( function (parameter){definition})
languages.forEach( function (langs){
    console.log(`${langs}`)
 })
// with arrow function
// ArrayName.forEach( (parameter)=> definition)
languages.forEach((langs) => {console.log(`${langs}`)})

function langs(coding){
    console.log(coding)
}
languages.forEach(langs)

// objects within an array

let data = [
    {
        name:'noor',
        semester:3
    },
    {
        name:'mehru',
        semester:5
    },
    {
        name:'faiez',
        semester:'graduated'
    }
]

data.forEach( (user)=>{
    console.log(`${user.name} : ${user.semester}`);
})