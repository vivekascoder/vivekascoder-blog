---
title: "Python CodeJam Qualifying Question."
description: "Python community organizes the CodeJam twice a year in order to participate you need to solve a question first, this is the question the asked in the month of June in 2021."
author: "vivekascoder"
tags: 
  - Python
---

# What is Python CodeJam
- This is there original message in the discord server.

## Python Discord 2021 Summer Code Jam
We are very excited to release the Qualifier for our 2021 Summer Code Jam! 

### What is the Code Jam?
Twice a year we host a code jam for members of our server to participate in. The code jam is an event where we place you in a team with 5 or 6 other random server members. You then have 7 days to code some sort of application or program in Python. Your program must use the specified technology/framework and incorporate the theme chosen by the server. After the 7 days is complete, your team has 2 days to finish documentation and create a video presentation showcasing and walking through the program that your team has created.

Participating in this Code Jam will give you the (very fun) opportunity to work with other members of this community to build something together. For more information visit: https://pythondiscord.com/events/code-jams/8/

## Technology
The technology for this code jam is Text User Interfaces (TUIs). We have provided a list of approved libraries and frameworks you can choose from: https://pythondiscord.com/events/code-jams/8/frameworks/. If you'd like to submit one for approval, head on over to #code-jam to chat with the Event Team about it.

## Qualifier
To compete in the Code Jam, you must complete our qualifier! We are asking you to create a function that will make a table. The Excel kind, not the furniture kind. For details and information, check out the qualifier here: https://github.com/python-discord/cj8-qualifier
The Qualifier will close on July 1st, 1400 UTC, 10 days (~240 hours) from this announcement.

## Sign-Up
To sign-up for the Code Jam, you must complete the sign-up form and upload your qualifier solution here: https://form.jotform.com/211714357615050

## The Code Jam itself
The Code Jam itself will be occurring from Friday, July 9 to Friday, July 16. You will then have 2 days after to prepare a presentation recording of your final code jam project for the judges. The top 10 projects based off of the presentation videos will receive a full code review and will be featured on our livestream.

## Sponsors and Prizes
We have several prizes we can award to the winning team(s) thanks to your sponsors: DigitalOcean, JetBrains, and Tabnine. We also have Python Discord branded prizes that will be added in the upcoming days. Read more about the prizes here: https://pythondiscord.com/events/code-jams/8/#prizes

# My Solutionn
- I will update the breakdown of the code soon, for now just check the solution.

```python
from typing import Any, List, Optional

def generate_col(col_width: List[int], col_content: List[Any], centered: bool=False):
  data = '???'
  direction = '^' if centered else '<' 
  for i in range(len(col_content)):
    data += f' {{:{direction}{col_width[i]}}} '.format(str(col_content[i])) + '???'
  return data

def generate_ending(col_width: List[Any], position:str):
  """
  positiong:List['top', 'middle', 'bottom']
  """ 
  ascii = {
    'l': { 'top': '???', 'middle': '???', 'bottom': '???' },
    'm': { 'top': '???', 'middle': '???', 'bottom': '???' },
    'r': { 'top': '???', 'middle': '???', 'bottom': '???' },
  }
  data = ascii['l'][position]
  for i in range(len(col_width)):
    data += '???'*(col_width[i]+2)
    if i != len(col_width) - 1:
      data += ascii['m'][position]
  data += ascii['r'][position]
  return data

def calculate_col_width(r, labels=None):
  rows = r.copy()
  if labels:
    rows.insert(0, labels)
  col_width = [0]*len(rows[0])
  for i in rows:
    temp = [len(str(x)) for x in i]
    for j in range(len(rows[0])):
      if temp[j] > col_width[j]:
        col_width[j] = temp[j]
  
  return col_width

def make_table(rows: List[List[Any]], labels: Optional[List[Any]] = None, centered: bool = False) -> str:
  col_width = calculate_col_width(rows, labels=labels) 

  table = ''
  table += generate_ending(col_width, position='top') + '\n'
  # Printing the head
  if labels:
    table += generate_col(col_width, labels, centered=centered) + '\n'
    table += generate_ending(col_width, position='middle') + '\n'
  
  for i in rows:
    table += generate_col(col_width, i, centered=centered) + '\n'
  
  table += generate_ending(col_width, position='bottom') + '\n'
  return table

```

