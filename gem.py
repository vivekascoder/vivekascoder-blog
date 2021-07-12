#!/usr/bin/python3
"""
This script is for automating the process of creating the 
template for tags, articles, projects, etc.
Basically to automate some work.
"""

import argparse
import os
import sys

CONTENT_PATH = os.path.join(os.getcwd(), 'content')
TAG_PATH = os.path.join(CONTENT_PATH, 'tags')
PROJECT_PATH = os.path.join(CONTENT_PATH, 'projects')

def generate_tag(name: str, description: str) -> bool:
  tag_path = os.path.join(TAG_PATH, f"{name.lower()}.md")

  if os.path.isfile(tag_path):
    return False
  
  tag = f"---\n"
  tag += f"name: '{name}'\n"
  tag += f"description: \"{description}\"\n"
  tag += f"---\n"

  with open(tag_path, 'w') as tag_path:
    tag_path.write(tag)
  return True

def generate_project(name: str, description: str, repo_name: str) -> bool:
  project_path = os.path.join(PROJECT_PATH, f"{name.lower()}.md")
  if os.path.isfile(project_path):
    return False
  project = f"---\n"
  project += f"name: '{name}'\n"
  project += f"description: \"{description}\"\n"
  project += f"github: \"https://github.com/vivekascoder/{repo_name}\""
  project += f"---\n"
  # ---
  # name: "BlockFund"
  # description: "A decentralized platform to raise fund for social causes."
  # github: "https://github.com/vivekascoder/blockfund"
  # live: "https://blockfund.biz"
  # image: "/blockfund.png"

  # ---

  with open(project_path, 'w') as project_path:
    project_path.write(project)
  return True

def main():
  type = sys.argv[1]
  if type == 'tag':
    name = input("[TAG] Enter name: ")
    description = input("[TAG] Enter description: ")
    if generate_tag(name, description):
      print("[TAG] Generated !")
    else:
      print("[TAG] Already Exists.")

if __name__ == '__main__':
  main()