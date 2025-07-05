# 🚀 WHAT IS MIDDLEWARE :

**Middleware** in Node.js—especially when using frameworks like Express.js—is a function that sits in the middle of the request-response cycle. It has access to the **request object (`req`)**, **response object (`res`)**, and a special **`next` function** that passes control to the next middleware function in the stack. Middleware can perform tasks such as logging, authentication, modifying requests or responses, handling errors, and more

### Key Characteristics of Middleware

- **Executes during the request-response cycle**
- **Can modify request and response objects**
- **Can end the request-response cycle**
- **Can call the next middleware in the stack**
- **Can be application-level, router-level, or route-specific**

---

### How Middleware Works

---

When a request is received by the server, it passes through a chain (or pipeline) of middleware functions before reaching the final route handler. Each middleware can either:

- Complete the response (ending the cycle)
- Modify the request or response
- Pass control to the next middleware using `next()`

---

### Example: Simple Logging Middleware in Express

---

```javascript
const express = require("express");
const app = express();

// Custom middleware function
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next(); // Pass control to the next middleware or route handler
};

app.use(myLogger); // Mount middleware globally

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
```

**Explanation:**

- `myLogger` is a middleware function that logs "LOGGED" every time a request is received.
- `app.use(myLogger)` registers the middleware for all routes.
- The `next()` call is crucial; it moves the request to the next middleware or the route handler

---

### Types of Middleware in Node.js (Express)

---

- **Application-level middleware:** Runs for every request or for specific paths[4][6].
- **Router-level middleware:** Attached to specific routers for modular route management[4][6].
- **Built-in middleware:** Provided by Express (e.g., `express.json()`, `express.static()`)[4].
- **Error-handling middleware:** Specifically handles errors in the request pipeline[4].
- **Third-party middleware:** Installed via npm for added functionality (e.g., `morgan` for logging)

---

## 🥳 DETAILS HTTP METHODS IN API:

---

### 🚀 **HTTP Methods in REST API (Cheat Sheet)**

| Method     | Purpose           | Description                             | Idempotent |
| ---------- | ----------------- | --------------------------------------- | ---------- |
| **GET**    | **Read**          | Fetch data from the server              | ✅ Yes     |
| **POST**   | **Create**        | Send data to create a new resource      | ❌ No      |
| **PUT**    | **Update (Full)** | Replace an existing resource completely | ✅ Yes     |
| **PATCH**  | **Update (Part)** | Modify part of an existing resource     | ✅ Yes     |
| **DELETE** | **Delete**        | Remove a resource from the server       | ✅ Yes     |

---

### 📌 Notes:

- **GET**: Used to **fetch** data (e.g., `GET /users`)
- **POST**: Used to **create** data (e.g., `POST /users`)
- **PUT**: Used to **replace** a whole resource (e.g., `PUT /users/1`)
- **PATCH**: Used to **update part** of a resource (e.g., `PATCH /users/1`)
- **DELETE**: Used to **remove** a resource (e.g., `DELETE /users/1`)

---

### 📌 PROJECT DETAILS : 
> **it's a backend API application built using Node js , Express , REST, HTTP methods ,where we can get all the notes can Delete random /specific Notes add some notes and also modify if we want .**

> [!NOTE]
> just go through The app.js file to understand how the API's are working 