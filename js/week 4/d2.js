// variables

//  it is case sensitive, 'Hello' and 'hello' are different strings

// variables we use only digits, letters, and underscores
//  $hello is a valid variable name
//  hello123 is a valid variable name
//  hello_world is a valid variable name
//  1hello is not a valid variable name
//  hello is not a valid variable name

// reserved words cannot be used as variable names , for exapmle, 'var', 'let', 'const', 'function', 'class', 'interface', 'package', 'private', 'protected', 'public', 'abstract', 'static', 'extends

//  let hello = 'Hello World!'; // declaration and initialization of a variable
//  console.log(hello); // output: Hello World!

//  hello = 'Hello Universe!'; // re-assigning a value to a variable
//  console.log(hello); // output: Hello Universe!

//  const world = 'Hello World!'; // declaration and initialization of a constant.

//  js is dynamically typed language, it doesn't require explicit type declaration.
// datatypes: string, number, boolean, null, undefined, symbol, object, bigint,

//  number: 10, 10.5, -10, -10.5, 0, Infinity, -Infinity, NaN
// number datatype is coerced to string when used with concatenation operator (+)

// String: 'Hello', "Hello", `Hello ${name}`
//  string datatype is immutable that means once a string is created, it cannot be changed.

// null: represents no value or no object
//  undefined: variable that has not been assigned a value
//  bigInt: represents a 64-bit integer
// Symbol: unique identifier used for object properties, for example, object property names
//  symbol is used to create unique identifiers for object properties. for example, let obj = { name: 'John', [Symbol('id')]: 123 };
//  more about symbol: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

//  let scope: global, function, block
//  var scope: global, function
//  const scope: global, function, block

var name; // Hoisted declaration (value is undefined)
console.log(name); // Output: undefined
name = "Alice";
