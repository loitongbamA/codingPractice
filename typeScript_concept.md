<!-- //https://www.educative.io/edpresso/statically-v-dynamically-v-strongly-v-weakly-typed-languages

weekly typed and strongly typeed = done
statically typed
dynamically typed
what is typescript = done
why is it needed
merit and demerit of ts
merit and demerit of js being loosly typed
diff between ts and js
whta is type inference? done
typescript config - deafult
tsc - compiler
interface
type
static type
enums
type union
extending interface
how to import types from a npm package
dos and donts in ts

weekly-typed: it eases out writing codes but unpredictable behaviour with types

//declaration > defination

"use strict literal"

in js deafult type is any

function and parameteers, and variable

 -->

# TypeScript concepts [playground](https://www.typescriptlang.org/play)

references link:
[TypesCompatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
[Strong/weak type](https://www.educative.io/edpresso/statically-v-dynamically-v-strongly-v-weakly-typed-languages
)

## What is ... ?

### Strongly typed language

> Implicit conversion is not allowed.

```python
   x = 50;
   x = x + "string"
   print(x) #throws type-error
```

### weakly typed language

> Implicit conversion happens.

```js
   x = 50;
   x = x + "string"
   console.log(x) // 50string
```

### Statically typed language

> Do type check at compile time. means we need to declare all the required types while declaration of variables/parameters/function's return/properties. It enforces strict/static restriction on mixing of values with different types. When these rules are violated compiler throws an error. E.g. `c++,c,Java` etc.

```c++
//c++ example: 
void myFunction(string test) {
  // return type of the function is void mean it doesn't return anything explicitly
  // funciton has one parameter of type string
  
  // code to be executed
}

int myFunction(string test) {
    int myNum = 15; // varibale of type integer
    bool myBoolean = true // varibale of type boolean

   // code to be executed
    return 0 // function return type is integer
}
```

### Dynamically typed language

> dynamically type means no type declaration. Type checking is done at run time e.g. `JavaScript, php` etc.

```php
// php example
// no type declaration
<?php
 $txt = "Hello world!";
 $y = 10.5;

 function add1($x) {
   return $x + 1;
 }
?>
```

```js
//JavaScript example
//no type declaration
function myFunction(test){
    let myNum = 15;
    let myBoolean = true;\
    // code to be executed
    return 0;
}
```

## What is TypeScript?

> TypeScript is strongly typed JavaScript. It enables us to make javascript a statically typed language.

The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

## Static typing Benefits

Javascript is flexible. Since we cannot provide any type information to variable, there is no restriction to what it may contain. It might begin with string but may change to other data types further down. This may make writing code in js simple and easier however when woring with large code base, there is always a high chance of unpredictable behaviour because we know js is interpreted language and it won't evaluate any type related information till runtime. It also tries to resolve mismatch data since it has also implicit type coersion. So it becomes difficult to diagnose and find the bugs.

1. Using ts we know what type of data is expected, what a function returns, the shape of an object and its properties types.
1. Has the ability to organize and manage large code base becaue of the following features ts provides:

	- `classes`: Even though ES6 now supports classes Ts class won't conflict with ES6 classes. TS can compile to js all the way back to ES3 (1999)
	- `namespaces`
	- `modules`
	- `interfaces`: declaration of expected methods and properties.
	- `inheritance`

1. `Tooling`: Besides coloring, syntax, autocompleton and refactoring. Ts can do much deeper analysis, it ensures how we are defining and using our data, we don't have unused data, detect unreachable code, suggestion of ts keywords, our own classes, methods, properties and funcitons. Link to external modules and reveal what is in there. If not compliant with the code it right away shows compile time error.
*Automatically generates source maps. Which means while running and debugging ts application, even though the browser or the process is runnign the generated js codes it automatically maps back to the equivaklent line in our ts file*

## Syntax and codes in TypeScript

### All Data types in TS

#### Buitlt-in

1. `string`
1. `boolean`
1. `number`
1. `undefined`
1. `null`
1. `array`
1. `void`
1. `unknown`
1. `any`
1. `never`

#### User defined data types

1. `enums` //enumerations
1. `classes`
1. `interfaces`
1. `array`
1. `tuple`

### Type Annotation

> type annotation means what data type is assigned to the variable.

```ts
//examples

let name:string = "Messi" // string annotation to name variable
let a:void = undefined;
let b:undefined = undefined
let c:null = null
let d:any = "blah" // or all data types are accepted except [never]
let e:{}={name: "messi", email: "messi@gmail.com"}
let f:"" =""; //only empty string is assignable
let g:[] = []
let h: number[] = [1,2,3]
let i: string[] = ["a", "b", "c"]
let j: {name:string, email: string}[] = [{name: "messi", email:"messi@gmail.com"}] // or type/interface syntax

// function examples

function sum(x: number, y: number): number {
    return x + y;
}

const result: number = sum(1,2)

// user defined data types

//tuples
// fixed array length and fixed type at specefic position/index
function tuplePair(pair: [x: number, y: string]){
    console.lgo(pair[2]) //gives error Tuple type '[string, number]' of length '2' has no element at index '2'.
}


```

> **Note: type anotation is optional. Means even if we don't give type ts will automatically read the initial type of the value and assigned to it (*type inference*). Trying to reassign a value of different type will give compiler error. *However for best practice mentioning type explicitly is recommended for clarity and readability.***

//class bluprint of methods
//keyof typeof https://www.typescriptlang.org/docs/handbook/2/keyof-types.html