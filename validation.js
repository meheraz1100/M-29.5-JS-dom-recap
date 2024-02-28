const number = '23';
// string , number, boolean
if(typeof number === 'number'){
    console.log('value is a number');
}
else{
    console.log('value is not a number');
}

const numbers = [1, 2, 3, 4, 5, 6 ];
const student = {name : 'John', age : 23, isStudent : true};


console.log(Array.isArray (numbers));
console.log(Array.isArray (student));