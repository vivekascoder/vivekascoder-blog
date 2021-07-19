---
title: "Crazy Bash Symbols"
description: "In this article I've covered some of the common commands and symbols used in bash, these are from a book 'GNU Linux tools', You'll find it intresting."
author: "vivekascoder"
tags: 
  - Bash
---

# Some Bash Command 
- From the book: GNU Linux tools summary.

### whatis <name>
- Give info about <name>

### apropos string
- Search a string in man databse and give you the result.

## Direction
1. `>` Direct the statndard output to somewhere.
2. `<` Insert info from somewhere,
3. `2>` Pipe the errors somewhere. 
    - Example: `2> /dev/null`
4. `>>` Append the output.
5. `<<` Append the input.
6. `tee` print the output to standard output.
    - as well as to a file.
    - `ls ./ | tee ls.log`
7. `&>` pipe the output and errors to somewhere.

## Command Substitution.
- Can be done using pipes as well.

### How to do it.
```bash
ls $(cat filename.txt)
```

```bash
cat filename.txt | ls
```

## Performing more than one command.
1. `cmd1 && cmd2`
    - `cmd2` will run if `cmd1` is successful and not if `cmd1` fails.
2. `cmd1 || cmd2`
    - `cmd2` will run if `cmd1` fails and not if it's successful.
3. `cmd1; cmd2`
    - Run both.

## Working woth files

### ln
- Hard Links:
    - The link to file.
    - If you delete the original file.
    - But have it's hard link.
    - So the file can be accessible after delteion.
- Symbolic Link
    - When you delete the original file the symbolic link breaks.

- `shred`: 
    - Permanent delete a file.
    - After deletion of files most recovery software can't recover it.
    - Haha, just the thing i need.
    - Example: 
        - `shred -n 40 -z -v <name>`
        - `-n 40` : Write the file 40 times with random content.
        - `-z` : Then fill it with zeros.
        - `-v` : Show me the progress.
- `du`: Give info about the file size.
- `stat`: Similar to du
- `split`: split a file into various files.

## Finding info about the system.
- `time`: Get the time taken by a program to run.
- `/proc`: This directory contains some really rich stuff.
- `dmesg`: Print kernal essages.
- `df`: Display Info about various mounted filesystems.
- `who`: Display who is logged in.
- `uptime`: Prints uptime.
- `cal`: Prints calender.


## Controlling the processes.
- ps: List process.
- pstree: List processes in form of a tree.
- pgrep: grep the pidof of a process.
- jobs: List all the active jobs (CTRL-Z)
- bg: background a process.
- fg: foreground a process.

## Manageing Users.
- `chfn`: Update the acc. information.
- `tac`: Combines multiple files into one.
- `cmp`: Compare the binary content of two files.
- `diff`: Compare the text of two files.
- `sdiff`: Compare in a column way.
- `comm`: Prints the common lines between two files.
- `sort`: Sort content.
- `join`: Join the line of files if they have something common.
- `cut`: Cut lines with delimiters.

