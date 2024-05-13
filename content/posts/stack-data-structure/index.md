+++
title = 'Understanding the Basics of Stack Data Structure'
date = 2022-02-08T10:38:35-04:00
draft = false
categories = ['data-structures', 'python', 'stack', 'computer-science', 'algorithms']
keywords = [
  'Valentine Samuel',
   'Stack',
   'Data structures',
   'Python',
   'Computer science',
   'Programming',
   'Algorithms'
]
+++

Stack data structure is one of the most common and most used data structure in computer science. It could be implemented using a python list or a linked list. However, we are going to use a python list in this tutorial. In this article, we are going to learn about the stack data structure, its operations, and how to implement it using python.

![Screenshot of the post](thumb-stack.jpg)

## **Introduction**

Stack data structure is one of the most common and most used data structure in computer science. It could be implemented using a python list or a linked list. However, we are going to use a python list in this tutorial.

## **Prerequisites**

* Understanding of Python list
    
* A Programming language, *preferably python*
    
* Object Oriented Programming (OOP) concepts
    
* Logical Reasoning
    

## **What is a Stack Data Structure?**

In a stack, elements are accessed in a LIFO manner — Last In First Out. A user may insert objects into a stack at any time, but may only access or remove the most recently inserted object that remains (at the so-called “top” of the stack). A good analogy is a stack of plates. In this case, the fundamental operations involve the “pushing” and “popping” of plates on the stack. When we need a new plate from the dispenser, we “pop” the top plate off the stack, and when we add a plate, we “push” it down on the stack to become the new top plate.

![istockphoto](https://cdn.hashnode.com/res/hashnode/image/upload/v1644305771009/Bt5iyhe0Y.jpeg)

## **Real World Examples of A Stack Data Structure**

* Web browsers stores the address of recently visited sites in a stack, when a new address is visited, the address is pushed on top of the stack of addresses. When the user clicks the back button, the browser pops the current site and the last visited site becomes the current site.
    
* A stack of plates in the cafeteria.
    
* In text editors, editing operations are kept in a stack so that when the user performs undo operation, the most current operation is removed and the previous operation becomes the most current operation.
    

## **Stack Operations**
The primary operations performed on stacks are:
* **is_empty**: Check if the stack is empty
* **Push** : Add an element to the stack
* **Pop**: Remove and element from the top of the stack
* **Length**: Return the number of items in the stack
* **Peek**: Get the top element in the stack without removing it
* **Print Item**: Prints all the items in the stack
        
# **Implementation of Stack Data Structure**

In order for us to implement a stack data structure, we need to implement a stack data type using the code below

```python
class Stack:
    def __init__(self):
        self.data = []
```

Then we implement other functionality(operations) of the stack class.

### **Check if the class is empty**

```python
    def is_empty(self):
        return len(self.data) == 0
```

### **Add items to the stack**

```python
    def push(self, item):
        return self.data.append(item)
```

### **Pop item from the stack**

```python
    def pop(self):
        if self.is_empty():
            raise Exception('The Stack is Empty!')
        return self.data.pop()
```

### **Check length of items in the stack**

```python
    def __len__(self):
        return len(self.data)
```

### **Peek at an item in the stack**

```python
    def peek(self):
        if self.is_empty():
            raise Exception('There is no item to peek at')
        return self.data[-1]
```

### **Print all the items in the stack**

```python
    def print_stack(self):
        return [x for x in self.data]
```

## Final Implementation

```python
class Stack:
    def __init__(self):
        self.data = []

    def is_empty(self):
        return len(self.data) == 0

    def push(self, item):
        return self.data.append(item)

    def pop(self):
        if self.is_empty():
            raise Exception('The Stack is Empty!')
        return self.data.pop()

    def __len__(self):
        return len(self.data)

    def peek(self):
        if self.is_empty():
            raise Exception('There is no item to peek at')
        return self.data[-1]

    def print_stack(self):
        return [x for x in self.data]
```

## Time Complexity of Stack Operations

| Operation | Runtime |
| --- | --- |
| push() | O(1) |
| pop() | O(1) |
| peek() | O(1) |
| is_empty() | O(1) |
| len() | O(1) |
| print_stack() | O(n) |

# **Conclusion**

Conclusively, we have seen how to implement a stack data structure using a python list, the different operations and their time complexity. Thanks for reading!