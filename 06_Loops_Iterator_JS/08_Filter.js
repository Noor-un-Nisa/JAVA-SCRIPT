// filter works the same as for each it also returns the value. 
// filter true  false pe depend hota ha
// filter mai jo value condition ke mutabiq true ho ri ho sirf woh return ya pass hogi
let Numbers = [1,2,3,4,5,6,7,8,9,10]

let divisible = Numbers.filter( (Nums) => Nums%2==0 )
console.log(`Divisible numbers between 1 to 10 are: ${divisible}`);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let displayBook = books.filter( (Book)=> {
     return Book.genre==='Science' && Book.publish>=2000 && Book.edition<=2015
})
console.log(displayBook);

