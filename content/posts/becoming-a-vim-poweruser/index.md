+++
title = 'Becoming a Vim Poweruser'
date = 2022-08-19
draft = false
categories = ['computer-science', 'vim', 'productivity', 'programming']
keywords = [
  'Valentine Samuel',
   'Computer science',
   'Programming',
    'Vim',
    'Productivity',
    'Text Editor',
    'IDE',
    'Vim Poweruser',
]
+++

Vim is a clone of the vi text editor,  designed for use both from a command line interface and as a standalone application. 

![thumbnail](./thumb-nail.jpg)



## Background Story
I remember the first time I saw Vim being used in a YouTube tutorial. The first thing I unconsciously said was 'God Forbid' 😂😂. I got discouraged because I was already used to VSCode. After some years, I began falling in love with Linux and I managed to use Emacs. But the only thing I knew how to do was open and save files. My friend later told me Vi was easier and I refused to believe until I tried it. I am never going back😍.

![1_qM-Y5x3pcnzdl0R4uDPKNA.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1660907210173/iMlEY9Qdc.jpg)

# What is Vi?
It is a screen-oriented text editor originally written in C and created for the Unix operating system by Bill Joy in 1976. If you love history, check the *[wikipedia page](https://en.wikipedia.org/wiki/Vi)*. It is also important to know that Vim is just flavor of Vi that stands for VI Improved. Vim and Vi pretty much uses the same commands.

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1660907493226/KGrnvcOXp.webp)


## Why Should I Use Vim?
It is free, open-source and cross platform. It has a large community because it has been around for a very long time. It is extremely customizable. It uses less system resource. Vim supports multiple File Formats and Programming Languages and lots more.


![exit_vim_meme.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1660907654691/SB9PKwP0L.jpg)
Okay, let's get started so that you can understand these memes😂😂..

# Modes in Vim
Vim has a total of 12 modes, although you will mostly use the following:
- ### Insert Mode
	This mode is used to insert text by typing, like you would do on any other text editor. To enter insert mode, type **`i`** while in command mode.
- ### Command Mode
	Also named Normal Mode, this mode is used to type Vim commands such as those you’ll find in the Vim Cheat Sheet below. To exit insert mode and enter command mode, hit the **`Esc`** key of your keyboard.
- ### Visual Mode
	Similar to command mode, but used to highlight areas of text. Normal commands are run on the highlighted area, which, for instance, can be used to move or edit a selection. Press the **`v`** key to start visual mode. To exit visual mode, press the **`Esc`** key.

# Vim Shortcuts
Don't forget that these shortcuts are to be entered in [command mode](#command-mode). Because this is very long list. I have decided to group them into the following categories:
- Basic Operation
- Cursor Movement
- Searching
- Bookmark
- Deleting
- Editing
- Replacing
- Case Switching
- Text Indentation
- Copying and Moving
- Read and Write
- Interacting with Unix
- Alignment

## Basic Operation
With the commands listed below, you can get up and running. However, to become a poweruser:sunglasses:, you can see other commands below this section.
- vi *filename* | Open or create *filename* in vim
- `:w` | Save the current file 
- `:q` | Exit vim
- `:q!` | Quit without saving the current file
- `:x` | Write/Save file (if changes has been made) and exit 
- `:sav` *filename* | Save current file as filename 
- `.` *filename*  | Repeat the last change made in normal mode
- `n.` *filename* | Repeat the last change made in normal mode *n* times

## Cursor Movement
The following commands are used to manipulate the position of the cursor.  

- `h` | move cursor left
- `j` | move cursor down
- `k` | move up 
- `l` | move right 
- `w` | jump to start of word (punctuation are considered as words)
- `W` | jump to start of word (punctuation are not considered as words) 
- `e` | jump to end of word (punctuation are considered as words)
- `E` | jump to end of word (punctuation are not considered as words) 
- `b` | jump to beginning of previous word (punctuation are considered as words)
- `B` | jump to beginning of previous word (punctuation are not considered as words) 
- `ge` | jump to end of previous word 
- `0` | beginning of current line 
- `^` | first non-blank character of current line 
- `$` | end of current line 
- `$` | end of current line 
- `-` | move cursor down on the first non blank character 
- `+` | move cursor up on the first non blank character 
- <kbd>Enter</kbd> | move cursor down on the first non blank character 
- `gg` | go to first line 
- `G` | go to last line 
- n`gg` | go to line *n* 
- n`G` | go to line *n* 
- `:`n | go to line *n* 
- `)` | move the cursor forward to the next sentence 
- `(` | move the cursor backward to the previous sentence 
- `{` | move the cursor backward to the previous paragraph 
- `}` | move the cursor forward to the next paragraph 
- `]]` | move the cursor forward to the next section 
- `[[` | move the cursor backward to the previous section 
- `<Ctrl>` + `f` | move the cursor forward by a screen of text 
- `<Ctrl>` + `b` | move the cursor backward by a screen of text 
- `<Ctrl>` + `u` | move the cursor up by half a screen 
- `<Ctrl>` + `d` | move the cursor down by half a screen 
- `H` | move the cursor to the top of the screen 
- `M` | move the cursor to the middle of the screen 
- `L` | move the cursor to the bottom of the screen 

## Searching
The following commands are used to search for patterns in the current file.
- `f`x | search current line forward for 'x' 
- `F`x | search current line backward for 'x' 
- `t`x | search current line forward and place cursor before 'x' 
- `T`x | search current line backward and place cursor before 'x' 
- `/`word | search *word* from top to bottom 
- `?`word | search *word* from bottom to top 
- `*` | search the word under cursor 
- `*` | search the word under cursor 
- `/\c`string | search STRING or string, case insensitive 
- `/`jo[ha]n | search john or joan 
- `/\<` the| search *the*, *theatre* or *then*
_ `/`the`\>`| search *the* or *breathe*
- `/\<`the`\>`| search *the*
- `/`fred`\|`joe`| search *fred* or *joe*
- `/\<\d\d\d\d\>`| search exactly 4 digits 
- `/^\n\{`3`}`| Find 3 empty lines 
- `bufdo %s/`something`/`somethingelse`/g`| Search *something* in all the open buffers and replace it with *somethingelse*

## Bookmarks
The following commands are used to manipulate bookmarks in the current file.
- `:marks` | list all current bookmarks 
- `m` d | mark current cursor position as *d*
- `d` | move to position of bookmark *d*
- `'`d | move to line with bookmark *d*
- `.` | move to last edited line 

## Deleting
The following commands are used to perform deletion in the current file.
- `x` | delete current character
- `X` | delete previous character 
- `dW` | delete current word 
- n`dd` | delete n lines 
- `dd` | delete (cut) a line 
- `dt`f | until the next *f* character on the line 
- `D` | delete from cursor to end of line 
- `:[range]d` | delete [range] lines 
- `:[range]d` | delete [range] lines 
- `:g/`string`/d` | delete all lines containing string 
- `:v/`string`/d` | delete all lines not containing string
- `:%S/^\(.*\)\n\1$/\1/` | delete lines that appear twice 

## Editing
The following commands are used to edit the current file.
- `J` | join line below to the current one 
- `xp` | transpose two letters (delete and paste, technically) 
- `u` | undo 
- `<Ctrl>` + `r` | redo 
- `.` | repeat last command 

## Replace
The following commands are used to replace words with other words in the current file.
- `cc` | change (replace) an entire line 
- `cw` | change (replace) to the end of word 
- `C` | change (replace) to the end of line 
- `ct`s | change (replace) until the s character 
- `r` | replace a single character (does not use insert mode) 
- `R` | enter Insert mode, replacing characters rather than inserting 
- `s` | delete character at cursor and substitute text 
- `S` | delete line at cursor and substitute text (same as cc) 
- `:%s/`old`/`new`/g` | replace all occurrences of *old* with *new* in file
- `:s/`Bill`/`Steve`/` | replace the first occurrence of Bill with Steve in current line 
- `:s/`Bill`/`Steve`/g` | replace Bill with Steve in current line 
- `:%s/`onward`/`forward`/gi`  replace onward with forward, case insensitive 
- `:%s/`old`/`new`/gc` | replace all occurrences of old with new. With confirmation 
- `:` 2`,` 35 `s/`old`/`new`/g` | replace all occurrences of old with new between lines 2 and 35   
- `:`5, `$s/old/new/g` | replace all occurrences of old with new from line 5 to EOF 
- `:%s/^/`hello`/g` | replace the beginning of each line by hello   
- `:%s/$/`Harry`/g` | replace the end of each line by Harry    

## Case Switching
The following commands are used to switch cases of words.
- `~` | switch case 
- `g~~` | Invert case 
- `g~iW` | switch case of current word 
- `gUiW` | make current word uppercase 
- `gUiw` | make current word lowercase 
- `gU$` | make uppercase until end of line 
- `gu$` | make lowercase until end of line 
- `:%s/.*/\u&` | Sets the first character of the line to lowercase
- `:%s/.*/\l&` | Sets the first character of the line to uppercase
- `:%s/\<./\l&/g` | Sets the first non-blank character of each word to lowercase 
- `:%s/\<./\u&/g` | Sets the first letter of each word to uppercase 
- `:r` *filename* | insert the *filename* below the cursor. 
- `:r !`{cmd} | execute {cmd} and insert its standard output below the cursor.

## Text Indentation
The following commands are used to indent lines.
- `>>` | indent line one column to right 
- `<<` | indent line one column to left 
- `==` | auto-indent current line 
- `:%retab` | fix spaces / tabs issues in whole file 

## Copying and Moving
The following commands are used to copy and move content in the current file.
- `yw` | copy word 
- `yy` | copy a line 
- `yy` | copy a line 
- n`yy` | copy n lines 
- `y$` | copy to end of line 
- `p` | put (paste) the clipboard after cursor/current line 
- `P` | put (paste) the clipboard before cursor/current line 
- `:set paste` | avoid unexpected effects in pasting 
- `:registers` | display the contents of all registers 
- `"`x`yw` | yank word into register x 
- `"`x`yy` | yank line into register x 
- `:`[range]`y`  `x` | yank [range] lines into register x 
- `"xp` | put the text from register x after the cursor 
- `"xP` | put the text from register x before the cursor 
- `"xgp` |  just like "p", but leave the cursor just after the new text 
- `"xgP` |  just like "P", but leave the cursor just after the new text 
- `:` [line] `put` x |  put the text from register x after [line] 
- `ddp` | swap current line with next line 
 `ddkp` | swap current line with previous line 

## Read and Write
The following commands are used to perform read and write operations on files.
- `:` 1`,`10 `w` *outfile* | Save lines 1 to 10 in *outfile* 
- `:` 1`,`10 `w >>` *outfile* | Append lines 1 to 10 in *outfile* 
- `:r` *infile* | Insert the content of *infile* 
- `:`23 `r` *infile* | Insert the content of *infile* under line 23

## Interacting with Unix
The following commands are used to interact with Unix.
- `:!` pwd | Execute the *pwd* unix command, then return to Vi  
- `!!` pwd | Execute the *pwd* unix command and insert output in file 
- `:sh` | 	Temporary return to Unix  
- `$exit` | 	Return to Vi  

## Alignment
The following commands are used to align lines in Vim.
- `:%!fmt` | Align all lines 
- `!}fmt` | Align all lines at the current position 
- 5`!!fmt` | Align the next 5 lines 

There are more commands so feel free to check online for other resources.

> Please note that you do not have to memorize everything

## Conclusion
Vim is a powerful text editor that can be used to edit text files, configuration files, and source code. It is highly customizable and has a large community. It is also free, open-source, and cross-platform. I hope you have learned something new today

