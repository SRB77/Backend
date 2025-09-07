# 👉 MiddleWare (req,res,next())

Middlwware is a wellwriten code which basically have the access to `req and res object` through which they will be a part of `req-res  cycle / pipeline` And just because of this it also have the power to terminate the cycle . 

There are several type of Middleware and for better understanding we can refer to official website here is the link 

LINK :- https://expressjs.com/en/guide/writing-middleware.html

---

##### and here is the code :
```javascript
const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)

```
---
### Complete Cycle of REQ-RES (middleware);

> **request(from Client)**  >> **ServerCode(App)** >> (middleware) >> **Router** >> (middleware) >> **API** >>  **client**

    this is a complete cycle of req-res cycle  
---


The middleware can also act on the **response** on its way back out to the client. This entire sequence is often called a **middleware chain** or **pipeline**.

---

## Easy Questions

### 1. What is middleware in the context of a web framework?
**Follow-up:** Can you give a real-world example of middleware you have used in a project (e.g., in Express.js, Django, or ASP.NET Core)?

### 2. Where does middleware fit into the request-response cycle?
**Follow-up:** Can you describe the role of the `next()` function (or its equivalent) within a middleware? What happens if you don't call it?

### 3. What are two common use cases for middleware?
**Follow-up:** Why is it better to handle something like logging or authentication in middleware rather than in every single route handler?

### 4. Can a single request be processed by multiple middleware functions?
**Follow-up:** If yes, how is the order of execution determined, and why is this order important?

---

## Medium Questions

### 5. Explain the difference between application-level middleware and router-level middleware.
**Follow-up:** Provide a scenario where you would choose to use router-level middleware instead of applying it globally to the entire application.

### 6. How would you write a simple middleware to log the HTTP method and URL of every incoming request to the console?
**Follow-up:** How would you modify this middleware to also calculate and log the time it took for the request to be processed by the subsequent handlers?

### 7. What is CORS, and how is middleware commonly used to handle it?
**Follow-up:** Can you explain what a `pre-flight` request is and why it's necessary?

### 8. Describe how you would create a middleware to authenticate a user by checking for a valid JSON Web Token (JWT) in the request headers.
**Follow-up:** What should this middleware do if the token is missing or invalid? How would it pass the user's information to the next handler if the token is valid?

### 9. How do you handle errors within middleware? Explain the concept of a dedicated error-handling middleware.
**Follow-up:** In a framework like Express.js, what makes an error-handling middleware different from a regular one in terms of its function signature?

---

## Hard Questions

### 10. Discuss how the Chain of Responsibility design pattern relates to the concept of a middleware pipeline.
**Follow-up:** Can you outline, in pseudo-code, how you would implement a basic middleware system using this pattern?

### 11. How can poorly implemented middleware negatively impact the performance of an application?
**Follow-up:** Imagine a middleware that needs to perform an asynchronous operation, like a database lookup. How would you ensure this doesn't block the entire request-response cycle and introduce a bottleneck?

### 12. How would you design a rate-limiting middleware from scratch to prevent brute-force attacks on a login endpoint?
**Follow-up:** What data structure would be efficient for tracking request timestamps and counts per user (or IP address)? How would you handle this in a distributed environment with multiple server instances? (Hint: think about shared storage like Redis).

### 13. How can middleware be used to implement content negotiation (e.g., serving JSON or XML based on the request's `Accept` header)?
**Follow-up:** What are the challenges in modifying the response body within a middleware, and what best practices should be followed?

### 14. What security vulnerabilities can be introduced through misconfigured middleware?
**Follow-up:** Provide a specific example, such as a misconfigured CORS middleware that allows access from any origin (`*`), or a Body Parser middleware with an overly permissive size limit that could lead to a Denial of Service (DoS) attack.