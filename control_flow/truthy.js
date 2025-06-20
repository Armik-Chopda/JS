// falsy values
// false , ""  , 0 , null , undefined,-0 , BigInt -> 0n , NaN


//truthy values
if (true);
if ({}); //empty object
if ([]);//empty array
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);


// Ternary Operator Conditional Operator) javascript

//syntax
// condition ? trueExpression : falseExpression
let marks=90
let result=(marks>=40)?'pass':'fail'
console.log(result);

function checkAge(age) {
  return (age >= 18) ? 'Adult' : 'Minor';
}

console.log(checkAge(20)); // Output: Adult
console.log(checkAge(15)); // Output: Minor
