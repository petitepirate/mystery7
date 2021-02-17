## Conceptual Exercise

Answer the following questions below:

#### What is a JWT?
* JSON Web Token - a compact URL-safe means of representing claims to be transferred between two parties.
In other words, JWTs are credentials, which can grant access to resources.

#### What is the signature portion of the JWT?  What does it do?
* The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. To create the signature, the Base64-encoded header and payload are taken, along with a secret, and signed with the algorithm specified in the header.

#### If a JWT is intercepted, can the attacker see what's inside the payload?
* Yes

#### How can you implement authentication with a JWT?  Describe how it works at a high level.
* After you log a user in on your server, you can generate and respond with a JWT that includes info like the username or a property like "isAuthenticated". You would then include this token in any requests back to the server from the client. The server can then respond if the token is verified or deny the request if it fails verification.

#### Compare and contrast unit, integration and end-to-end tests.
* Unit tests are small, isolated tests that test only a specific function or components of code  
* Integration tests are for testing that two or more units are able to work together. Usually done after unit testing.
* Testing an application's workflow from beginning to end.  Often difficult to write and keep up to date as apps get modified.

#### What is a mock? What are some things you would mock?
* Mock objects simulate the behavior of complex real objects - and thus are useful when a real object is impractical/impossible to unit test.  According to wikipedia, mocks are useful when an object has any of the following characteristics:
  * the object supplies non-deterministic results (e.g. the current time or the current temperature);
  * it has states that are difficult to create or reproduce (e.g. a network error);
  * it is slow (e.g. a complete database, which would have to be initialized before the test);
  * it does not yet exist or may change behavior;
  * it would have to include information and methods exclusively for testing purposes (and not for its actual task).

#### What is continuous integration?
* Continually making small changes in your code rather than merging in large chunks of code all at once or at the end of development.  Small frequent commits.

#### What is an environment variable and what are they used for?
* Variables used for app configuration - these are housed outside the application itself.  Things like API keys (since you don't want them hard-coded into your code) and if you're in production vs development.

#### What is TDD? What are some benefits and drawbacks?
* Test Driven Development.  This is where you write your tests before you write the application itself.
  * Benefits:  Forces you to narrow your focus to think of individual functions first vs trying to tackle the bigger picture all at once - leading to modular, easy to read code. It also provides fast feedback, acts as living documentation, and often leads to code that is easier to refactor.  
  * Drawbacks: Not the easiest workflow if you're not used to it.  Takes a little more time upfront.  Tests other than unit tests are hard to write.

#### What is the value of using JSONSchema for validation?
* JSONSchema generates clear, human and machine-readable documentation, that makes automating validation easy.  This prevents incorrect data from being submitted to your database.

#### What are some ways to decide which code to test?
* Generally test for expectations and exceptions.  Think about edge cases that may occur and test for those.  

#### What are some differences between Web Sockets and HTTP?
* The main difference is the message pattern - http is a request response pattern and websocket is bi-directional.  Web sockets allow for live updates, as the server can push data to the client.  In order to recreate that type of flow with HTTP, constant request/response cycles would be needed.

#### Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?
* I can't really say if I like one or the other based on the frame-work, as I believe my preference here is really based on language.  So far Python's syntax really appeals to me in general, making flask seem "neater" to me than express.  I would say I am more confortable with Flask, but I've also had more practice with it.
