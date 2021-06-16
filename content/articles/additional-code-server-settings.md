---
title: "Additional Code Server Settings."
description: "This article is a continuation of a video that i posted on my channel about setting up code server in a virtual machine. Code-server is like Vscode but in cloud, which is really interesting if you have a low end computer."
tags: 
  - Linux
---

# Things that i forgot in the video.
![Code-Server](https://i.imgur.com/e3d6NQE.png)

Here is the link to the vide.

<iframe src="https://www.youtube-nocookie.com/embed/YEuZPNza5Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## A quick thing to mention
I forgot to tell you one important thing. You can access your code-server from any 
browser without even ssh'ing into your remote server.

See the image below.
![Screenshot](https://i.imgur.com/WxfBhfD.png)

You need to change the `bind-addr` in your config file which is located at 
- Path: `~/.config/code-server/config.yaml`
```
bind-addr: 0.0.0.0:8000
auth: password
password: SECRET_PASSWORD
cert: false
```
The `0.0.0.0` indicates that you can access using your localhost as weel as the public
IP Address of your remote machine.
So basically, it means you can use either `localhost:8000` (With port forwarding) or
`divcorn.com:8000` (without port forwarding).

### Case with `localhost` or `127.0.0.1`
It basically says that the traffic is only accessible from your local machine.

### Case with `0.0.0.0`
It basically says that the traffic is accessible from your local machine as well as 
public ip address.


## I want to access with `divcorn.com` only.
That's a good question, you can achieve it from one of the following ways.

### Using port 80
When we enter the address of a website, our web browser tries to conect to port 80 by default, that means `divcorn.com` and `divcorn.com:80` are the same.

Instead of `0.0.0.0:8000`, you can use `0.0.0.0:80` then run it

> ⚠️ Make sure to stop other services (if any) which are running on port 80.

### Using Reverse Proxy with NginX (Preferred)
Many times you might be using you port 80 for your website hosting (if any).
In those cases we can add a `CNAME` record from our domain's DNS management console.
Which is pointing to `@` or your public ip address and value will be a string example 
`code`. Then we can create a nginx config file where we will listen at port 80 from the
url `code.divcorn.com` and use the reverse proxy to direct the traffic from port 8000 to
the port 80 with `code.divcorn.com` only.



> If you want a video on it, please make sure to tell me.


