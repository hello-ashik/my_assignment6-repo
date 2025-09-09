#### 1) What is the difference between var, let, and const?

1. var:
   It comes from old JavaScript (before ES5).
   Function scoped means it works throughout the entire function.
   Hoisting it moves up, but remains undefined until a value is assigned.
   It can be re-declared with the same name (sometimes causing problems).
2. let:
   New in ES6 (2015).
   Block scoped limited within {}.
   Hoisting is OK, but there is a Temporal Dead Zone using it before assigning a value will result in an error.
   Cannot be re-declared, but the value can be changed.
3. const:
   This also comes from ES6.Block scoped.Once a value is assigned, it cannot be changed (constant).
   Cannot be re-declared.However, the data inside objects and arrays can be changed, because the reference is fixed,
   but the properties inside are mutable.

#### 2) What is the difference between map(), forEach(), and filter()?

1.  forEach()

    Only runs a loop, meaning it does something for each element.
    Does not return a new array.

2.  map()

    Transforms each element and returns a new array.
    The old array is not changed.

3.  filter()

    Returns a new array of values ​​that are true based on a condition.
    The old array is not changed.

#### 3) What are arrow functions in ES6?

            Arrow functions were introduced in ES6.
            Arrow functions allows a shorter syntax for function expressions.
            don't need the function keyword, the return keyword, and the  brackets

#### 4) How does destructuring assignment work in ES6?

            The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays,
            from objects, into distinct variables. It can be used in locations that receive data
            (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).

#### 5) Explain template literals in ES6. How are they different from string concatenation?

            Template literals are literals bound with back-ticks (`) allowing embedded expressions called substitutions.Template string are sometimes informally called template strings, however they are not string literals and can not be used everywhere a string literal can be used. Template literals provide us with an alternative to string concatenation .They also allow us to insert variables in to a string.
