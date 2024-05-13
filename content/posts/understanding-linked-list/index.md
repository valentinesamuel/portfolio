+++
title = 'Understanding the Basics of Linked List'
date = 2022-01-13T10:38:35-04:00
draft = false
categories = ['data-structures', 'python', 'linked-list', 'computer-science', 'algorithms']
keywords = [
  'Valentine Samuel',
   'Linked list',
   'Data structures',
   'Python',
   'Computer science',
   'Programming',
   'Algorithms'
]
+++

In the world of technology, there is no computer or software that operates without data. This means that computers or software all have their different ways of storing data as well as type of data which they store. Join me as I explain the basics of a linked list in computer science.

![Thumb nail](thumb-ll.jpg)

## **Introduction**

Every piece of data in a computer is stored as a number. For example, letters are converted to numbers, and photographs are converted to a large set of numbers that indicate the color and brightness of each pixel. One way that a computer program stores data is by using a linked list.

## **Prerequisites**

To properly understand how a linked list works, you must have a basic idea of the following:

- How a computer memory stores data
- Array data structure
- Object Oriented Programming (OOP) concepts

## **What is a Node?**

A node is a unit of a linked list data structure, these several nodes come together to form a linked list. A node consists of two parts. The first part stores the element(data) of the node, and the second part stores a pointer that points to where the next node is located in memory.

![node.png](./node.avif)

## **What is a linked list?**

A linked list is a linear data structure that consists of a group of nodes that are linked together. The first node in the list is called the head node. The last node in the list is called the tail node. Various operations can be performed on a linked list. Some of which are:

- Inserting
- Deleting
- Searching
- Traversing
- Displaying

## **Linked Lists VS Arrays**

Linked lists are a more efficient data structure than arrays. Linked lists are more efficient because they use less memory. Let us look at some major differences between arrays and linked lists.

![array.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1642094820715/rTetnvhGW.png)

An example of an array

![ll.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1642094861234/OhfjxZ4bG.png)

## Linked lists Usage

### Storing of Data
Arrays are a data structure that stores a collection of data in a contiguous block of memory. A linked list is a data structure that stores a collection of data in a non-contiguous block of memory. This means that in an array, data is stored next to each other, but in a linked list, data is stored in a chain of nodes at random points in the memory, that is why we need a pointer to locate the place in memory where the next value is stored.

![array in memory](https://cdn.hashnode.com/res/hashnode/image/upload/v1642094958945/-aP7WFqQ_.png?auto=compress,format&format=webp)
This is how an array is stored in memory

![linked list in memorty](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095010678/rdzCCDUEc.png?auto=compress,format&format=webp)
This is how a linked list is stored in memory

### Accessing Random elements
 In arrays, we can access any element in the array by using an index. In a linked list, we can access any element in the linked list by using a pointer so we have to traverse through the list until we find what we are looking for.
![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095101999/pEuMwSPez.png?auto=compress,format&format=webp)
An array can be accessed from anywhere, so long as we have the index
![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095183588/cOPO1leH_.png?auto=compress,format&format=webp)
To access a node, we have to traverse through the list till we reach the node we are searching for

### Insertion and Deletion
In arrays, we can insert and delete elements at any index. In a linked list, we to traverse through the list and find what we are looking for but after deletion or insertion, we do not need to move the data to make room or close the gap, we only reassign the pointers.
![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095248790/xFuaeWOLs.png?auto=compress,format&format=webp)

Since we have the index, we can delete but we have to shift the remain elements to cover the gap.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095542103/N50RIf6-g.png?auto=compress,format&format=webp)
In a linked list, we simply change the pointer to the next node.

## **Types of linked list**

### Single Linked List
A linked list that has only one pointer pointing to the next node.

![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095581674/CTV06WsXD.png?auto=compress,format&format=webp)

### Double Linked List
 A linked list that has two pointers pointing to the next and previous node.

![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095629475/ys32VXYkLC.png?auto=compress,format&format=webp)

### Circular Linked List
A linked list that has a pointer pointing to the next node and a pointer pointing to the previous node.

![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1642095668918/Eezve1KiK.png?auto=compress,format&format=webp)

## **Implementation of a Node Class In Python**
 Earlier in this article, we established the basic idea of a node. Now, we will implement the node class in Python. This node class has methods to get data of the current node, set data of the current node, get the next node, set the next node, and get the previous node.

```python
class Node:
      def __init__(self, init_data):
            self.data = init_data
            self.next = None

      def get_data(self):
            return self.data

      def get_next(self):
            return self.next

      def set_data(self, new_data):
            self.data = new_data

      def set_next(self, new_next):
            self.next = new_next

```

The `__init__` method is the constructor of the class. It initializes the data and the next node. The `get_data` method returns the data of the current node. The `get_next` method returns the next node. The `set_data` method sets the data of the current node. The `set_next` method sets the next node.

## **Implementation of a Linked List Class In Python**
We will implement the linked list class that has methods to:
1.  check if the linked list is empty
2. insert a node at the beginning of the linked list
3. insert a node at the end of the linked list
4. get the size of a linked list
5. Search for a node in the linked list
6. remove a node from the linked list
7. traverse the linked list

<br/>

```python
Class Linked_List:
# Constructor for the class
      def __init__(self):
            self.head = None

# Check if the linked list is empty
      def is_empty(self):
            return self.head == None

# Insert a node at the beginning of the linked list
      def add_node(self, node):
            latest_node = Node(node)
            latest_node.set_next(self.head)
            self.head = latest_node

# Insert a node at the end of the linked list
      def append(self, node):
            current = self.head
            while current.get_next() != None:
                  current = current.get_next()
            current.set_next(Node(node))

# Get the size of the linked list
      def size(self):
            current = self.head
            count = 0
            while current != None:
                  count = count + 1
                  current = current.get_next()
            return count

# Search for a node in the linked list
      def search_list(self, target_node):
            current_node = self.head
            while current_node is not None and current_node.get_data() is not target_node:
                  current_node = current_node.get_next()
            return current_node is not None

# Remove a node from the linked list
      def remove_node(self, target_node):
            previous_node=None
            current_node=self.head
            while current_node is not None and current_node.get_data() is not target_node:
                  previous_node= current_node
                  current_node = current_node.get_next()

            if current_node is not None:
                  if current_node is self.head:
                        self.head = current_node.get_next
                  else:
                        previous_node.set_next(current_node.get_next())

# Traverse the linked list
      def traverse(self):
            current_node = self.head
            while current_node != None:
                  print(current_node.data)
                  current_node = current_node.get_next()
```

 
**Note**: The `if current_node is self.head` block is to check if the target node is the head node. If it is, then we need to reassign the head pointer to the next node(the node after the head).

## **Time Complexity of a Linked list**
Generally, the time complexity of a linked list is `O(n)` where n is the number of nodes in the linked list. The time complexity of a linked list is `O(n)` because we have to traverse through the entire linked list to find the element we are looking for in the worst case. Linked lists are great at insert at delete operations and arrays are better at randomly reading data from a list. However, various linked list operations have their own time complexity which is represented in a tabular form below.

![bigo.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1642096232993/H6-0Q_u5X.png)

## **Conclusion**
Conclusively, we have seen how to implement a linked list in python, the differences between a linked list and an array as well as the time complexity for different linked list operations. Thanks for reading!


<br>_Comments or questions? <a href="mailto: valentinesamuel2580@gmail.com">Send me a message</a>_
