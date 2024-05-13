+++
title = 'Caesar Cipher Algorithm in Python'
date = 2022-03-24
draft = false
categories = ['python', 'computer-science', 'algorithms', 'cryptography']
keywords = [
  'Valentine Samuel',
   'Python',
   'Computer science',
   'Programming',
   'Algorithms',
    'Cryptography',
    'Caesar Cipher',
    'Encryption',
    'Decryption',
    'Security',

]
+++

The Caesar Cipher can also be called **_Shift Cipher_**, **_Substitution Cipher_**, **_Caesar's Code_**, or **_Caesar's Shift_**. This is going to be a short tutorial on how to create a Caesar Cipher in Python.

![thumbnail](./thumb-nail.jpg)

## What is Caesar Cipher?

Caesar Cipher is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet. For example, with a shift of 1, **A** would be replaced by **B**, **B** would become **C**, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

## A Brief History of Caesar Cipher

This is the first and well-known cipher that was used by [Julius Caesar](https://en.wikipedia.org/wiki/Julius_Caesar). It was said to have been developed around 100 BC. He shifted each letter in his messages in order to make the messages meaningless should the enemy intercept them. Although the shift key varies, he originally used it with a shift of three. Therefore **A** becomes **D** when encrypting, and **D** becomes **A** when decrypting. A diagrammatic representation of the cipher system that uses a left shift value of 3 is shown below.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1661240941452/7D2PDev_B.png)

## Implementation in Python

In order to make our cipher more flexible, we would allow the user to determine the shift value. I encountered this problem when I was trying to solve an assessment question. Below is the function

**Next, I am going to explain what is happening on every line**

1. In line 1, we create the function
2. In line 3, we used the ordinal(ASCII) value of lowercase a to z alphabet in a list comprehension.
3. In line 4, we converted the input string to lowercase in order to match with the list of lowercase alphabets that we created
4. In line 6, we create an empty string to store the ciphered string
5. In line 7, we loop through the input string that we converted to lowercase
6. In line 8, we determine the position of the current alphabet
7. In line 9, we get the offset position by subtracting the shift value(offset) from where the alphabet is located
8. In line 10, the ciphered alphabet will be the value of the position where the shift has landed us
9. In line 11, we add the ciphered alphabet to the ciphered string
10. In line 12, we return the ciphered string

_So, we are not only restricted to the left shift offset of 3, we can use any value we like._

**_Note:_** _The Caesar Cipher is not a secure encryption method. It can be easily broken even by hand. It is just a fun way to learn about encryption and decryption._
