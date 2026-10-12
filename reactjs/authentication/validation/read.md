Step 1: What is validation?
Validation means checking whether the data entered by a user is correct before accepting or submitting it.
Imagine a Signup form on your Mooway website.
- The user leaves the email field empty.
- The user enters an invalid email, such as alexgmail.com.
- The user enters a password that is too short.
Validation helps us catch these problems before submitting the form.
Step 2: Your first React validation
Let's start with one simple rule: the email field must not be empty.
Create a file named Validation.jsx in your React project's src folder.

import { useState } from "react";

function Validation() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "") {
      setMessage("Email is required");
    } else {
      setMessage("Email validation successful!");
    }
  }

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>

        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Validation;



Understand the important part
if (email === "") {
  setMessage("Email is required");
} else {
  setMessage("Email validation successful!");
}


- if checks whether the email is empty.
- setMessage() updates the message shown on the screen.
- else runs when the email isn't empty.
For this first exercise, we're checking only whether the field is empty. We haven't checked whether the email has a valid format yet.
Your task
1. Create Validation.jsx.
2. Render it inside App.jsx:
import Validation from "./Validation";

function App() {
  return <Validation />;
}

export default App;


If your file is inside a different folder, adjust the import path accordingly.
3. Run your React app.
4. Click Submit with the email field empty.
5. Enter an email and click Submit again.









Step 4: HTML validation vs. React validation
These two approaches work together, but they have different roles.
HTML validation uses built-in attributes such as required, type="email", and minLength.
React validation uses JavaScript conditions to check values and display custom messages.
For example:
HTML validation
 <input type="email" required /> 


The browser checks the field before the form submits.


React validation
if (email.trim() === "") {
  setMessage("Email is required");
}


Your JavaScript checks the value and updates the message displayed in your component.


When would you use each?
In a real signup form, you can use both:
- HTML attributes for simple, built-in checks.
- React logic for custom rules and messages.
- Backend validation to enforce the rules securely when data reaches the server.
Remember: frontend validation improves the user experience, but it can be bypassed. The backend must validate the data too.


Which validation method do websites use nowadays?
Most real-world websites use a combination of built-in HTML validation, custom frontend validation, and backend validation. The choice depends on the form and the application's requirements.
Method	Example	Where it's useful
Built-in HTML validation	type="email", required, minLength={8}	Simple checks with minimal code
Manual React validation	if (email.trim() === "")	Custom rules and error messages
Backend validation	Server checks the email and password rules again	Enforcing rules securely
Example: Email validation
Option 1 — Built-in browser validation
<input type="email" required />


The browser checks for an email-like format and prevents submission when the value is invalid.
Option 2 — Manual React validation
if (email.trim() === "") {
  setMessage("Email is required");
} else if (!email.includes("@")) {
  setMessage("Enter a valid email");
}


This gives you control over the messages and custom rules. However, includes("@") alone is not a complete email validator.
What do professional websites generally do?
A common approach is:
1. Use HTML attributes for basic checks.
2. Use React validation for custom messages and more complex rules.
3. Validate again on the backend before accepting the data.
For more advanced forms, developers may use libraries such as React Hook Form with Zod or Yup to organize validation logic.
One important detail: even built-in email validation cannot prove that an email address actually exists. Email verification is a separate proces