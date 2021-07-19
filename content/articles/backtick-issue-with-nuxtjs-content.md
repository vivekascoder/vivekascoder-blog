---
title: "Backtick Issue with NuxtJS Content Module"
description: "In this article, I've adressed a small issue that you might face while using the nuxtjs content module, which can be annoying, This article explains how to style the inline code tag."
author: "vivekascoder"
tags: 
  - VueJs
  - CSS
---

## The Problem.

![Backtick Issue](https://i.imgur.com/WlH90wF.png)

This problem arises because the `@tailwindcss/typography` module does not style the inline code block. So we need to manually style it by use css/scss/postcss. 

## The Solution
The following css code, fixes the issue, you can tweek it the way you like to suite 
your needs.
```css
li > code, 
h1 > code,
h2 > code,
h3 > code,
h4 > code,
h5 > code,
p > code {
  @apply px-2 py-1 rounded-md bg-gray-200;
  &::after, &::before {
    display: none;
  }
}
```

### Result after the code.
![Result](https://i.imgur.com/FwAyNfy.png)