//1. how to declare a variable using let and const
const myName='Ishtiaque Ahmed';
let season='summer';
season='winter'

//2. 6 basic conditions in javascript
// >,<,===,!==,<=,>=
// multiple conditions &&,||
if(fatherName==='rakib'||season==='rainy'){

}
else if(fatherName==='jahir'){

}
else{

}
//3.array declare
//index,length,push

const numbers=[2,34,56,78];
numbers[0]=98;

//4.for loop
for(let i=0;i<=numbers.length;i++){
 const number=numbers[i];
 console.log(number)
}

//5.function
function subtract(num1,num2){
 const res=num1-num2;
 return res;
}
const number=subtract(23,11);
// console.log(number)


//6. object
//access property
const student={
 name:'sajib',
 age:'45',
 movies:['king khan','mastan']
}
const myVar='age';
console.log(student.name)//access by property
console.log(student['age'])//access by string
console.log(student[myVar])//access by property name in variable