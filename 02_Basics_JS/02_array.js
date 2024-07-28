const Fam_NameG = ['noor','mehru','shabnam']
const Fam_NameB = ['mohid','ibrahim','waqas','faiez']

const Fam_Name = Fam_NameB.concat(Fam_NameG)//combine two or more arrays. gives a new array without modifying any existing arrays
console.log(Fam_Name)

const Family = [...Fam_NameB , ...Fam_NameG]//it is called spread operator it works same as concat()
console.log(Family)

const all_fam = ['dado','abbu',['sosi phupho',['shezy bhai','fariha baji','basmah'],'salaya phupho',['mmehak baji','mahrukh baji','furqan','mustafa'],'chachu',['ibrahim','mohid'],'papa ji',['faiez bhai','mehru','me']]]
const All_Fam = all_fam.flat(Infinity)// return a new array with all sub array elements in a new single array
console.log(All_Fam);

console.log(Array.isArray("noor"))//checks if the given data is an array or not.

console.log(Array.from("noor"))// converts into array if it is not

console.log(Array.from({name:'noor'}))// we needs to specify that from where should it makes an array from a keys or from values if not speified then in tht case it will give an empty array

let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2))//returns a new array from a set of neew elements given