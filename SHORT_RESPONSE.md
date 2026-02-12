# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim. 

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content). 

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**

**Asynchronous** functions allow for a task to start while continuing other code. This is important because things like `fetch()` can take seconds to run, and that can delay other processes making the user experience unresponsive.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**

`GET` requests would request a server for data, while not having permission to modify it at all, basically being given read access like in **CRUD**. Whereas, `POST` requests are basically create, because they request to send data to that server. For example, a `POST` request could be your payment details going to Netflix, and a `GET` request would be you getting Netflix services.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**

**Vite** is a build tool that prevents slow development servers, which improves development experience. It can also create a build `dist` file which would help deploy to production.
