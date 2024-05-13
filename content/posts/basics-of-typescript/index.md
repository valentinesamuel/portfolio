+++
title = 'A Quick Introduction To Types In Typescript'
date = 2023-03-11
draft = false
categories = [
    'Software Engineering',
    'Computer Science',
    'Typescript',
    'Basics',
]
keywords = [
  'Typescript',
    'Types',
    'Type System',
    'Type Safety',

]
+++

Typescript is a superset of JavaScript that adds static typing to the language. This means that you can define the types of variables, function parameters, and return values in your code. In this article, we'll explore the basics of types in Typescript and how they can help you write safer and more maintainable code.

![Thumb Nail](./thumb-nail.png)

Typescript is a superset of JavaScript that provides more robust features and error checking at compile time. One of the primary features of Typescript is its strong typing system, which provides support for various types. Understanding the types available in Typescript is essential for any developer to write clean, reliable, and bug-free code. In this article, we will explore all the types in Typescript and categorize them into basic types and advanced types.

## Basic Types:

1. **Number**: The Number type represents both integer and floating-point numbers. It supports all standard mathematical operations, such as addition, subtraction, multiplication, and division. Here is an example.
    
    ```typescript
    let num: number = 5;
    console.log(num); // Output: 5
    ```
    
2. **String**: The String type represents a sequence of characters. It is enclosed in quotes, either single or double. Here is an example:
    
    ```typescript
    let str: string = 'Hello, World!';
    console.log(str); // Output: Hello, World!
    ```
    
3. **Boolean**: The Boolean type represents a logical value, either true or false. Here is an example:
    
    ```typescript
    let isTrue: boolean = true;
    console.log(isTrue); // Output: true
    ```
    
4. **Null**: The Null type represents an intentional absence of any object value. Here is an example:
    
    ```typescript
    let nullValue: null = null;
    console.log(nullValue); // Output: null
    ```
    
5. **Undefined**: The Undefined type represents a variable that has been declared but has not been assigned a value. Here is an example:
    
    ```typescript
    let undefinedValue: undefined = undefined;
    console.log(undefinedValue); // Output: undefined
    ```
    

## Advanced Types:

These are types that are made up of one or more basic types.

1. **Array**: The Array type represents a collection of elements of the same type or different types, it is recommended to make arrays hold only a collection of one particular type. It can be declared using square brackets. Here is an example:
    
    ```typescript
    let arr: number[] = [1, 2, 3, 4, 5];
    console.log(arr); // Output: [1, 2, 3, 4, 5]
    ```
    
2. **Tuple**: The Tuple type represents an array with a fixed number of elements, each with its type. For tuples, the order of appearance must match. A number cannot come in the position of a string. Here is an example:
    
    ```typescript
    let tuple1: [string, number] = ['John', 25];
    // let tuple1: [string, number] = [25, 'John'];❌
    console.log(tuple1); // Output: ['John', 25]
    ```
    
3. **Enum**: The Enum type is a way of giving more friendly names to sets of numeric values. Here is an example:
    
    ```typescript
    enum Color {Red, Green, Blue};
    let c: Color = Color.Green;
    console.log(c); // Output: 1
    ```
    
4. **Any**: The Any type represents any value, and it can be assigned to any variable without a type check. Any type is equivalent to writing plain javascript and its usage is very much discouraged. Here is an example:
    
    ```typescript
    let anyValue: any = 'Hello, World!';
    console.log(anyValue); // Output: Hello, World!
    ```
    
5. **Void**: The Void type represents the absence of any type at all. It is commonly used as the return type of function that does not return a value. Here is an example:
    
    ```typescript
    function logMessage(): void {
      console.log('Hello, World!');
    }
    logMessage(); // Output: Hello, World!
    ```
    

In conclusion, Typescript provides a rich set of types that enable developers to write more reliable code. Basic types are the fundamental types that are commonly used in everyday programming, while advanced types are more specialized and provide more functionality. As a beginner, understanding these types is essential to mastering Typescript and writing better code.

Don't forget to leave a like or comment. Till next time guys.

❤️❤️❤️