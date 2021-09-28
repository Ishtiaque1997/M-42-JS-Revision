const products=[
 {name:'pc',price:900,brand:'dell',color:'silver'},
 {name:'phone',price:100,brand:'samsung',color:'red'},
 {name:'laptop',price:90000,brand:'hp',color:'blue'},
 {name:'watch',price:1900,brand:'omax',color:'black'},
 {name:'car',price:123900,brand:'allion',color:'pink'}
]

const productsBrand=products.map(brand=>brand.brand);
// console.log(productsBrand)
const prices=products.map(product=>product.price)
// console.log(prices)

products.forEach(product=>console.log(product.color))

products.forEach(product=>{

})

//filter
const selected=products.filter(product=>product.price>900);
// console.log(selected)

//filter containing n letter in the name

const name=products.filter(product=>product.name.includes('n'));
// console.log(name)

//find

const special=products.find(pd=>pd.name.includes('n'));
// console.log(special)