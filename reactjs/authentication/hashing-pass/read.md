These two concepts sound similar, but they work differently.
1. Password hashing
One-way process
Original password
Password hash
You don't decrypt a hash to recover the password. During login, a verification function checks the password against the stored hash.


2. Encryption
Reversible with the correct key
Original message
Encrypted message
Decryption with the correct key
Encryption is useful when data must later be recovered in its original form.


Remember this for development:
- Passwords → use a dedicated password-hashing algorithm.
- Data that must be recovered later → encryption may be appropriate.
For passwords, developers commonly use Argon2id, bcrypt, or scrypt. Fast general-purpose hashes such as plain SHA-256 are not appropriate by themselves for password storage.


Step 3: Understand the flow
Imagine a user signs up with the password hello123.
React Signup Form
User enters a password

Backend
Hashes the password securely

Database
Stores the password hash, not the plain-text password


For our exercise, we'll focus on the React form and see how the password is handled before it would be sent to a backend.



: What happens when a password is hashed?
Suppose the user enters this password:
hello12345
A password-hashing algorithm transforms it into a hash value. The result looks like a long string of seemingly random characters.
Original password
hello12345

Password-hashing algorithm
Argon2id or bcrypt

Stored password hash
A long encoded hash string


The exact output depends on the algorithm and its settings. With modern password hashing, a random salt is also used, so the same password can produce different stored hash strings.
Important React concept
You might wonder: “Can I just hash the password inside Signup.jsx?”
You technically can run hashing-related code in a browser, but that is not a secure replacement for server-side password hashing. A real application sends the password over HTTPS to the backend, where a dedicated password-hashing library creates the stored hash.



important:A unique random salt helps ensure that two users with the same password don't end up with identical stored password hashes. It also makes precomputed hash attacks harder.




this is the normal way of hashing the password in reactjs

import { useState } from "react";

function Signup() {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");

  async function handleSignup(event) {
    event.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      data
    );

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashString = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashString);
  }

  return (
    <form onSubmit={handleSignup}>
      <h2>Password Hashing Demo</h2>

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter password (8+ characters)"
        required
      />

      <button type="submit">Generate Demo Hash</button>

      {hash && (
        <div>
          <h3>Demo hash:</h3>
          <p style={{ overflowWrap: "anywhere" }}>{hash}</p>
        </div>
      )}
    </form>
  );
}

export default Signup;



note:It demonstrates a hashing function, not secure password storage



A salt doesn't need to be secret. It can be stored alongside the password hash because its purpose is to make each password's stored hash unique.
Step 9: Why do we use bcrypt or Argon2id?
Your React demo uses SHA-256. It works as a hashing demonstration, but SHA-256 is designed to be fast. Attackers can try enormous numbers of password guesses quickly if they obtain password hashes.
Password-specific algorithms such as bcrypt and Argon2id are deliberately more expensive to calculate, making large-scale password guessing harder.
SHA-256

Very fast general-purpose hashing. Not suitable by itself for password storage.


bcrypt / Argon2id

Password-hashing algorithms designed to make guessing more expensive. Argon2id also uses memory deliberately.


How this relates to your React app
Your React component collects the password. In a real application, the flow is:
1. React submits the password over HTTPS.
2. The backend uses bcrypt or Argon2id to create a password hash.
3. The database stores the hash and the information needed to verify it later.




Algorithm	Where can it run?	    Suitable for storing passwords?
SHA-256 =	Frontend or backend	 -->   ❌ Not by itself
bcrypt	=    Usually backend	     -->   ✅ Yes
Argon2id =	Usually backend	     -->   ✅ Yes



important note:

Backend hashing: Real password hashing with bcrypt or Argon2id is normally done on the backend to protect stored passwords.



Frontend hashing: Hashing can technically run in the browser, as you demonstrated with SHA-256, but that is not a replacement for secure password storage.



React validation: React can check required fields, email format, password length, and whether two password fields match. Backend validation is also necessary because frontend checks can be bypassed.



1. If password hashing happens in the backend, where is it used in the frontend?
In a full-stack application, the frontend usually doesn't need to implement password hashing at all. React collects the password and sends it to the backend securely.
Imagine your Mooway website has a Signup page.
React frontend
User enters email and password
Validates inputs and submits the form

Node.js backend
Receives the request over HTTPS
Hashes the password using bcrypt or Argon2id

Database
Stores the password hash


So what does React do with authentication?
React still has important responsibilities:
- Collect email and password using form inputs.
- Validate the form before submission.
- Send the credentials to the backend over HTTPS.
- Display errors such as "Invalid email or password."
- Show the appropriate page after the backend confirms authentication.
Remember: React handles the user interface; the backend handles secure password storage and verification.
2. Is hashing still used nowadays?
Yes! Absolutely. Password hashing remains a fundamental security practice in modern web applications.
Common password-hashing algorithms include:
- Argon2id — a strong modern choice for password storage.
- bcrypt — widely used in existing applications.
- scrypt — another password-hashing option.
Modern applications should not store users' original passwords as plain text.
Also, hashing isn't only used for passwords. Other applications use hashing for integrity checks, digital signatures, and many other security-related purposes, although the algorithms and use cases differ.
One important distinction
Technology	Main purpose
Password hashing	Protect stored passwords
Encryption	Protect data that needs to be recovered later
HTTPS/TLS	Protect data while it travels between the browser and server
These technologies solve different problems and can work together.


