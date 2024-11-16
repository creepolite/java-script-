let a  = prompt("enter the first number ")
let b = prompt("enter the second number")
if(isNaN(a)|| isNaN(b)){
throw SyntaxError("sorry this is not allowed") }
let sum =  parseInt(a)+ parseInt(b)



try {
    console.log('the sum is ', sum*x);
    return true
    
} catch (error) {
    console.log('error aagay bhai');
    return false
}
finally{
    console.log('files are being closed ');
    
}
// console.log('the sum is ', sum*x );
//x is not defined so itll give error4 so we have to handle it 
