// 1. Set Up State
// ○ Initialize state for the user's name, email, and feedback using a single
// formData object in the component.
// 2. Build the Form UI
// ○ Create input fields for the name, email, and feedback text (textarea).
// ○ Use the name attribute for each input to match the keys in formData
// (e.g., name, email, feedback).
// ○ Use the onChange event to dynamically update state when users type
// in the fields.
// 3. Add Real-Time Feedback Preview
// ○ Below the form, display the user’s inputs in real-time using the
// formData state.

import { useState } from "react";
import "./App.css";



function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [count, setCount] =useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    if (name === "feedback") {
    setCount(value.length);
  }
  };

  

  return (
    <>
    <h1>User Form</h1>
      <form id="user-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Feedback:
          <textarea
            name="feedback"
            value={data.feedback}
            maxLength={200}
            onChange={handleChange}
          />
        </label>
        <div>
          <p>Character Count: {count}</p>
        </div>

      <button id="submit">Submit</button>
    </form >

      <h2>Preview:</h2>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Feedback: {data.feedback}</p>
      
    </>
  );
}

export default App;

