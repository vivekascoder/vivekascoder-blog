---
title: "Can't use async data in Layout/Components"
description: 'Have you faced this issue in NuxtJs where you are not able to fetch the data which you noramally do using the asyncData method in components and layout. In this article i will tell you how to do that.'
---

# 

## Problem
The method `asyncData` in not allowed in either components and layout.
So how can we fetch the data in other components or layout.

## Solution
- Using VueX State.
  - We'll create a VueX state and use the `nuxtServerInit` method.
  - Which will be executed when you run the applicaiton.

### How `nuxtServerInit` works ?
```js
async nuxtServerInit({dispatch}) {
  await dispatch('fetchTodos')
},
```
- It's a VueX action which can fetch the data or execute a mutaion 
- During the load of every single page.

### Full Code
```js
// This is our VueX store in nuxtJS

export const state = () => ({
  // VueX State
  tags: [
  ]
})

export const mutations = {
  // VueX mutations.
  setTodos(state, tags) {
    state.tags = tags
  }
}

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('fetchTodos')
  },
  async fetchTodos(context) {
    const tags = await this.$content('tags').fetch()
    console.log('Executing fetchTodos.')
    context.commit('setTodos', tags)
  }
}
```