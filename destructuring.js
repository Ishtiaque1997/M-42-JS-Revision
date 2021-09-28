//array destructuring
const numbers=[234,567]
//const x=numbers[0];
//const y=numbers[1];
const [x,y]=numbers;

function boxify(num1,num2){
 const nums=[num1,num2];
 return nums;
}
const [first,second]=boxify(90,34)

console.log(boxify(90,45))


const student={
 name:'rahim',
 age:34,
 movies:['dfgh','hjbj']
}
const [firstM,secondM]=student.movies;
// console.log(firstM,secondM)


//object destructuring

const {name,age}={name:'alu',age:78}
const {name,age}={id:12,name:'alu',age:78}

const employee={
 ide:'vs code',
 designation:'developer',
 languages:['html','css','python'],
 specification:{
  height:66,
  weight:90,
  address:'kumargonj',
  drink:'water',
  watch:{
   color:'black',
   price:500,
   brand:'casio'
  }
 }
}
const {machine,ide}=employee;
const {weight,height}=employee.specification;
const {brand}=employee.specification.watch;