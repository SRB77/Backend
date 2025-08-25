## EXPRESS AND CODE : 
--- 
``` javascript
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Backend")
})
app.get('/about' , (req,res)=>{
    res.send('hey we are on **ABOUT** page');
})

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})
``` 
---
## REQ ,RES object : 

The **`req` object** (short for request) represents the incoming HTTP request from a client (like a browser or a mobile app). Think of it as an order ticket 📥 sent to your API's kitchen; it contains all the details about what the client wants.

Express enhances Node's basic request object, adding helpful properties and methods. Here are the most common ones you'll use.

-----

###  Common `req` Properties

These properties hold the data sent by the client.

#### 1\. `req.params`

This object contains **route parameters**. These are named segments of the URL, defined with a colon (`:`) in your route path. They are perfect for when you need to fetch a specific resource by its ID.

  * **Example URL:** `http://localhost:3000/users/123`
  * **Code:**
    ```javascript
    app.get('/users/:userId', (req, res) => {
      const id = req.params.userId; // id will be "123"
      res.send(`Fetching user data for user with ID: ${id}`);
    });
    ```

#### 2\. `req.query` ❓

This object contains the **URL query string parameters**. These are the key-value pairs that appear after the `?` in a URL. They are typically used for filtering, sorting, or pagination.

  * **Example URL:** `http://localhost:3000/products?category=electronics&sort=price`
  * **Code:**
    ```javascript
    app.get('/products', (req, res) => {
      const category = req.query.category; // "electronics"
      const sortBy = req.query.sort;     // "price"
      res.send(`Fetching ${category} products, sorted by ${sortBy}.`);
    });
    ```

#### 3\. `req.body` 📦

This object contains the data sent in the **body of the request**. It's most commonly used with `POST`, `PUT`, and `PATCH` requests to send data (like from a form or JSON payload) to the server.

**Important:** To use `req.body`, you **must** use middleware to parse it first. For JSON data, you need `express.json()`.

  * **Example URL:** `POST http://localhost:3000/login`
  * **Request Body (JSON):** `{ "username": "alex", "password": "123" }`
  * **Code:**
    ```javascript
    // First, enable the JSON parsing middleware
    app.use(express.json());

    app.post('/login', (req, res) => {
      const username = req.body.username; // "alex"
      const password = req.body.password; // "123"
      res.send(`Welcome, ${username}!`);
    });
    ```

#### 4\. `req.headers`

This object contains the HTTP headers sent by the client, like the user-agent, content type, and authorization tokens.

  * **Code:**
    ```javascript
    app.get('/status', (req, res) => {
      const userAgent = req.headers['user-agent'];
      res.send(`You are using: ${userAgent}`);
    });
    ```

-----

###  Common `req` Methods

Methods are functions on the `req` object that can give you information about the request.

#### 1\. `req.get(headerName)`

This is the most common method. It's a simple way to get the value of a specific HTTP request header. It's case-insensitive.

  * **Code:**
    ```javascript
    app.get('/info', (req, res) => {
      // These are equivalent ways to get the same header
      const host = req.get('Host'); 
      const contentType = req.get('content-type');

      res.send(`Request was sent to host: ${host}`);
    });
    ```

Understanding these five (`params`, `query`, `body`, `headers`, and `get()`) will let you handle almost any incoming request you'll encounter when building an API.

Of course. Let's cover the `res` (response) object.

The **`res` object** represents the HTTP response that an Express app sends when it gets a request. If the `req` object is the customer's order, the `res` object is the finished meal 📤 your server hands back. You use its methods to send data, status codes, and headers back to the client.

-----

## Common `res` Methods

These are the most common methods you'll use to build and send a response.

### `res.send([body])`

This is the most versatile and common response method. It can send a response of almost any type, like a string, a buffer, or even a JSON object. Express automatically sets the `Content-Type` header based on the data you send.

  * **Code:**
    ```javascript
    app.get('/hello', (req, res) => {
      // Sends HTML
      res.send('<h1>Hello, World!</h1>');
    });

    app.get('/user', (req, res) => {
      // Express will automatically stringify this and set Content-Type to application/json
      res.send({ id: 1, name: 'Alex' }); 
    });
    ```

### `res.json([body])`

This method sends a JSON response. It's the standard for building APIs. It automatically converts objects and arrays to a JSON string and sets the `Content-Type` header to `application/json`.

  * **Code:**
    ```javascript
    app.get('/api/products', (req, res) => {
      res.json([
        { id: 'p1', name: 'Laptop' },
        { id: 'p2', name: 'Mouse' }
      ]);
    });
    ```

### `res.status(code)` ✅

This method sets the HTTP status code of the response. It doesn't send the response, so you typically **chain** it with another method like `.send()` or `.json()`.

  * **Code:**
    ```javascript
    app.post('/users', (req, res) => {
      // Assume user is created successfully
      res.status(201).json({ message: 'User created successfully', userId: 123 });
    });

    app.get('/secret-data', (req, res) => {
      // Unauthorized access
      res.status(401).send('You are not authorized to see this.');
    });
    ```

### `res.sendStatus(code)`

This is a handy shortcut that sets the status code and sends the corresponding status message (e.g., "Not Found" for 404) as the response body.

  * **Code:**
    ```javascript
    app.get('/admin', (req, res) => {
      // Sets status to 403 and sends the text "Forbidden"
      res.sendStatus(403); 
    });
    ```

### `res.redirect([status,] path)`

This method redirects the request to a different URL. By default, it uses a `302` (Found) status code.

  * **Code:**
    ```javascript
    app.get('/old-profile', (req, res) => {
      // Redirects the user to the new profile page
      res.redirect('/new-profile');
    });
    ```

### `res.render(view, [locals])`

This method is used with server-side template engines (like EJS, Pug, or Handlebars) to render a view and send the resulting HTML string to the client.

  * **Code (using EJS):**
    ```javascript
    app.get('/dashboard', (req, res) => {
      // Renders the 'dashboard.ejs' file and passes a user object to it
      res.render('dashboard', { user: { name: 'Priya' } });
    });
    ```