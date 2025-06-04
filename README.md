# Cardinal.Js (EXPERIMENTAL)

A simple html-based library that adds many functions that make your web projects more fun and class-based. (in progress)

## Features

- Functions, such as Link(), HStack(), Container(), and more!
- built-in styles that you may turn off and on.
- a css() function that returns a <style> tag with your styles inside! 

## Technologies

- **Language:** JavaScript

## Docs
- Initiate Your App:
  ```code
  const app = {
    setup = new App;
  }
  ```
- Above this:
  ```code
  class App {
    main() {
      return [
        // your content
      ]
    }
  }
  ```
- Inside the return statement, you may put any of the functions you find in the main.js file, such as
  - **Container()**: for creating sections
  - **Link()**: for creating Links
  - **Video()**: for creating videos
- **Note**: You do not need to run any functions to initiate Cardinal.Js, simply create the object mentioned and your good!

## Installation

Follow these steps to set up your development environment:
```bash
# clone the repository in the folder of your choice, this is your new web project.
git clone https://github.com/PieAreSquared11/Cardinal.Js
```

Then simply paste the following code into your head element.
```code
<script src="parts/main.js"></script>
