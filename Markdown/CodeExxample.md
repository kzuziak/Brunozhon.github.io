Here is a example of Markdown code:

# Intro to JavaScript

JavaScript has the **file extension** .js.

JavaScript syntax (in HTML) can look like this:

    document.write("Hello, world!")

Or more complex

    var age = document.getElementById("Age");
    var allowed = age < 20 ? "young enough" : "yoo old";
    document.getElementById("res").innerHTML = "You are " + allowed + " to go to the workshop";
    
Or CLI (Comand Line Interface)

    console.log("Hello, world!")
    
## JavaScript intro

The simplest way to manuplate HTML is by using the getElementById() function

Example:

    <html>
      <body>
        <p id="hello">Hello, world!</p>
        <button>Change that paragraph</button>
        <script>
          document.getElementById("hello").innerHTML = "Paragraph changed";
        </script>
      </body>
    </html>
