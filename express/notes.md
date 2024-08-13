# Express

## What is Express

Express is a webframework.

It's just an NPM package which comes with a bunch of
methods and optional plugins that we can use to build 
web aplications and API's.

## Express Helps
- Start a server to listen for requests
- Parse Incoming requests
- Match those requests to particular routes
- Craft our http response and associated content


## Libraries VS Frameworks


### library
When you use a library, you are in charge.
You control the flow of the application,
code, and you decide when to use the library.

### Framework
With frameworks, that control is inverted. 
The framework is in charge, and you are
merely a participant! The framework tells
you where to plug in the code.



### Express Documentation
[Express](https://expressjs.com/)

This code is from a Node.js application using the Express.js framework. Let’s break it down:

### Explanation

```javascript
app.use((req, res) => {
  // This Creates texts on the screen
  res.send('This is a http response')
})
```

1. **`app.use`**: 
   - This is a method in Express.js that is used to mount middleware functions. Middleware functions are executed sequentially, and they can modify the `req` (request) and `res` (response) objects, or they can end the request-response cycle by sending a response to the client.
   - `app.use` applies this middleware to all incoming requests, regardless of the HTTP method (GET, POST, etc.) or the URL path.

2. **`(req, res) => { ... }`**:
   - This is an **anonymous callback function** (an arrow function in JavaScript) that takes two parameters:
     - `req`: The request object, which contains information about the incoming request (e.g., URL, headers, data sent by the client).
     - `res`: The response object, which is used to send a response back to the client.

3. **`res.send('This is a http response')`**:
   - This sends a response back to the client with the text `'This is a http response'`. When the client (like a web browser) makes a request to the server, the server will respond with this text, which will be displayed on the screen.

### Callback Function

In this context, the anonymous function `(req, res) => { ... }` is a **callback function** because it’s passed to `app.use` and is executed whenever a request is received by the server. The callback handles the request by sending a response back to the client.

### Summary

The code you provided sets up a basic Express.js middleware that listens for all incoming HTTP requests to the server. It responds with a plain text message, `"This is a http response"`, regardless of the request's URL or HTTP method.


### Send html through res.send
```
app.use((req, res) => { 
  // This Creates texts on the screen
  res.send('<h1> This is comming from res.send </h1>')
})

```

### Routing 

```
// This is the a route to localhost:8000/cats
app.get('/cats', (req, res) => {
    res.send("BITCH")
})

// This is the homee route localhost:8000 
app.get('/', (req, res) => {
  res.send('HOME')
})

```

