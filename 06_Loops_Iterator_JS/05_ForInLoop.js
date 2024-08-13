//  object specific loop
// for in loop

let languages = {
    js : "Java Script",
    cpp : 'C++',
    html : 'Hyper Text Markup Language',
    css : 'Cascading Style Sheet',
    rb : 'Ruby'
}
for (const key in languages) {
    console.log(key);
    console.log(languages[key])
    console.log(`${key} => ${languages[key]}`)
}

// For in loop and Arrays
let Language = ['JS','CPP','HTML','CSS']
for (const key in Language) {
   console.log(key)
   console.log(Language[key])
   console.log(`${key} => ${Language[key]}`);
}// for of loop is best for arrays

// for in loop and maps

let mapLanguage = new Map()
mapLanguage.set("js" , "Java Script")
mapLanguage.set("cpp" , "C++")
mapLanguage.set("html" , "Hyper Text Markup Language")
mapLanguage.set("css" , "Cascading Style Sheet")
mapLanguage.set("rb" , "Ruby")

for (const key in mapLanguage) {
    console.log(key)
    console.log(mapLanguage[key])
    console.log(`${key} => ${mapLanguage[key]}`);
}// does not work in for in loop