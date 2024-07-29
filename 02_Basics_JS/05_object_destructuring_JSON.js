const data = {
    name:'noor',
    course:'java script',
    courseBy: 'chai aur code'
}
console.log(data.courseBy)
const {courseBy}=data
console.log(courseBy)
const {courseBy:instructor} = data
console.log(instructor)