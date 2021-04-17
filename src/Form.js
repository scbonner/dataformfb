//this does work

import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;






// import React, { useState } from "react";
// import './App.css';
// import { db } from './firebase'
// // useState returns a pair: the current state value 
// // and a function that lets you update it. You can call 
// // this function from an event handler or somewhere else. 
// // It’s similar to this.setState in a class, except 
// // it doesn’t merge the old and new state together
// // Declare a new state variable, which we'll call "form"
// // const App = () => { or
// function Form() {
// // console.log('form');
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     race: "",
//     dateOfBirth: "",
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     email: "",
//     password: "",
//     textarea: "",
//   });
// // js arrow function event handler
// // ... spread operator allows passing event through ALL arguments of state
//   const updateForm = event =>
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
// // on the submit button event, 
//     function submit(event) {
//       event.preventDefault();
//     }
// //  console.log('firstName', 'lastName', 'email', 'password', 'textarea')
// db.collection(form)
//     .add({
//   firstName, lastName, race, dateOfBirth, address, city, state, zipCode, email, password, textarea 

// })
//     .then(() => {
//       alert('Messaged accepted');
//     })
//     .catch((error) => {
//       alert(error.message);
//     })

//   return (
//     <form>
//       <input
//         value={firstName}
//         //onChange updateForm function
//         onChange={updateForm}
//         placeholder="First Name"
//         type="text"
//         name="firstName"
//         className="form-control" 
//         id="floatingInput"
//         required
//       />

//       <input
//         value={lastName}
//         onChange={updateForm}
//         placeholder="Last Name"
//         type="text"
//         name="lastName"
//         required
//       />

//       <input
//         value={race}
//         onChange={updateForm}
//         placeholder="Race"
//         type="text"
//         name="race"
//         required
//       />

//       <input
//         value={dateOfBirth}
//         onChange={updateForm}
//         placeholder="Date of Birth"
//         type="text"
//         name="dateOfBirth"
//         required
//       />

//       <input
//         value={address}
//         onChange={updateForm}
//         placeholder="Street"
//         type="text"
//         name="address"
//         required
//       />

//       <input
//         value={city}
//         onChange={updateForm}
//         placeholder="City"
//         type="text"
//         name="city"
//         required
//       />

//      <input
//         value={state}
//         onChange={updateForm}
//         placeholder="State"
//         type="text"
//         name="state"
//         required
//       />

//       <input
//         value={zipCode}
//         onChange={updateForm}
//         placeholder="Zip Code"
//         type="text"
//         name="zipCode"
//         required
//       />

//       <input
//         value={email}
//         //onChange updateForm function
//         onChange={updateForm}
//         placeholder="Email Address"
//         type="text"
//         name="email"
//         required
//       />
//       <input
//         value={password}
//         onChange={updateForm}
//         placeholder="Password"
//         type='password'
//         name="password"
//         required
//       />
//       <textarea
//         value={textarea}
//         onChange={updateForm}
//         placeholder="Add your comments here:"
//         type='text'
//         name='textarea'
//       />
    
//       <button onChange={submit}>Submit</button>
//     </form>
//   );
// };
// export default Form;

