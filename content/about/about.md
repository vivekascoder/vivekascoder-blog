---
# Contact Details Goes Here.
contact: 
  email: 'mailto:vivekascoder@gmail.com'
  twitter: 'https://twitter.com/vivekascoder'
  instagram: 'https://instagram.com/vivekascoder'
  github: 'https://github.com/vivekascoder'
  linkedin: 'https://www.linkedin.com/in/vivek-kumar-7a04ba1b1/'
---

# Hello 👋, I am Vivek.
Hello, I am Vivek, a tech nerd primarily interested in building digital 
products and exploring different technologies.

![](/vim.jpeg)

### My 🛠️ tech stack
I mainly use the following listed tools.
- Django
- VueJS
- NuxtJs
- Python
- Javascript

### Super simple HTTP server.
```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```