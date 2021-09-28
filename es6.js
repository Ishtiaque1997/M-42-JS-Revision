const numbers=[12,23,34,45];
const student={
 name:'salim',
 agee:67,
 movies:['baer','vy','fyfy']
};
//1.template string
const about=`My name  is ${student.name} age of ${student.agee} have done ${student.movies[1]} `
// console.log(about)

//2. arrow function

const myRes=()=>67;
const addNums=num=>num+90;
const isEven=x=>x%2==0;
const addThree=(a,b,c)=>a+b+c;
const doMath=(num1,num2)=>{
 const sum=num1+num2;  
 return sum;
}

//3. spread operator

const newNumbers=[...numbers];
newNumbers.push(789);
//console.log(newNumbers)


//4. create new array from an old array and add an element

const currentNumbers=[...numbers,89];
console.log(currentNumbers)