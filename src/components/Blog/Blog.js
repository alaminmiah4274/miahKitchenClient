import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            <div className='py-10'>
                <h1 className='text-3xl font-medium mb-5'>What is JWT, and how does it work?</h1>
                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. WTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. <br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: 1. The header and the payload. 2. The signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string,
                    usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered.
                    The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>
            <div className='py-10'>
                <h1 className='text-3xl font-medium mb-5'>What is the difference between javascript and NodeJS?</h1>
                <p>
                    Here, we are going to discuss the main differences between JavaScript and Node.js: <br />

                    1. JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.
                    2. JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language. It needs libraries that may be easily accessed from JavaScript programming to make it more useful.
                    3. JavaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is very simple to create, and any running environment is equivalent to a proper browser. On the other hand, Node.js only supports the V8 engine, which is exclusive to Google Chrome. However, written JavaScript code can run in any environment, regardless of whether it supports the V8 engine.
                    4. A particular non-blocking task is needed to access any operating system. There are some basic objects in JavaScript, but they are all os-specific. For example, ActiveX Control is a Windows-only application. However, Node.js is granted the ability to run non-blocking tasks unique to the operating system from any JavaScript programming. There are no os-specific constants in it. Node.js is well-versed in creating a clear binding with the file system, allowing the developer to read and write to disk.
                    5. For a single web application, JavaScript is typically used for any client-side operation. An operation may be dealing with business validation, dynamic page display at a set time interval, or a simple Ajax call. For any web application, these are used for a maximum amount of time. On the other hand, Node.js is generally used for non-blocking accessibility or execution of any operating system. On an operating system, a non-blocking operation involves generating or executing a shell script, retrieving unique hardware-related information in a single call, obtaining installed certificate details in the system, or performing a large number of specified tasks.
                    6. JavaScript's main advantages include a wide range of interfaces and interactivity and just the right amount of server contact and direct input to visitors. On the other hand, Node.js has a node package manager with over 500 modules and the ability to handle concurrent requests. It also has the special capability of supporting micro-service architecture as well as IoT.
                </p>
            </div>
            <div className="py-10">
                <h1 className='text-3xl font-medium mb-5'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>
                    Node.js uses an event-driven architecture to handle multiple requests at the same time. This means that each request is handled by a single thread, but the thread does not have to wait for the request to finish before it can start handling another request. Instead, the thread simply registers an event for when the request is finished, and then it moves on to handling the next request. This event-driven architecture is very efficient, because it allows Node.js to handle a large number of requests without having to spawn a new thread for each request. This is in contrast to traditional web servers, which typically spawn a new thread for each request.
                    This can lead to performance problems, especially on systems with limited resources. Node.js's event-driven architecture is also very scalable. As the number of requests increases, Node.js can simply spawn more worker threads to handle the requests. This allows Node.js to handle a virtually unlimited number of requests. Here are the key concepts of how Node.js handles multiple requests: Event loop: The event loop is a single threaded loop that listens for events. When a request is made, it is placed in the event queue. The event loop then picks up the request from the queue and starts handling it. Events: Events are notifications that are sent to the event loop when something happens.
                    For example, when a request is finished, an event is sent to the event loop. Callbacks: Callbacks are functions that are executed when an event is triggered. In the case of Node.js, callbacks are used to handle requests. By using an event-driven architecture, Node.js is able to handle multiple requests at the same time very efficiently. This makes Node.js a very scalable platform for web applications.
                </p>
            </div>
        </div>
    );
};

export default Blog;