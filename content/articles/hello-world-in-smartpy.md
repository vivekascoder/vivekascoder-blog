---
title: "Hello World in SmartPy."
description: "In this article we'll see how can you guys write a super simple program in smartpy, which is a lanuage used to make smart contracts."
author: "vivekascoder"
tags: 
  - SmartPy
  - Tezos
---
# What is smart.py
Smartpy is a python library which allows you to write smart contracts in python for `Tezos` Network. It converts your python code into `Michelson` which is a functional language used to write smart contracts for `Tezos` Blockchain.

## Full code example.
```python
import smartpy as sp

class SimpleOperation(sp.Contract):
    def __init__(self):
        self.init(storedValue=0)
    
    @sp.entry_point
    def set_value(self, op):
        self.data.storedValue = op
    

@sp.add_test(name="Simple Operations")
def testSimpleOperation():
    contract = SimpleOperation()
    
    scenario = sp.test_scenario()
    scenario.h1("Simple Operations")
    scenario += contract
    
    contract.set_value(3)
    contract.set_value(6)

sp.add_compilation_target("Simple Operation", SimpleOperation())
```

<!-- 
import smartpy as sp

class Summarize(sp.Contract):
    def __init__(self):
        self.init(
            storage=0
        )
    
    @sp.entry_point
    def sum(self, params):
        sp.verify(params > 5)
        sp.for i in sp.range(1, params+1):
            self.data.storage += i

@sp.add_test(name="Second Test")
def test():
    scenario = sp.test_scenario()
    second_contract = Summarize()
    
    scenario.register(second_contract, show = True)
    scenario += second_contract.sum(20)


 -->