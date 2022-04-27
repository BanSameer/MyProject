import React, { useState, useEffect } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import TermsAndConditions from "../assets/terms-and-conditions-D12667.png"
import { Link } from "react-router-dom"
import "../App.css";

const Contact = () =>
{
  const [ name, setName ] = useState( "" );
  const [ age, setAge ] = useState( "" );
  const [ email, setEmail ] = useState( "" )
  const [ message, setMessage ] = useState( "" );
  const [ gender, setGender ] = useState( "" );
  const [ageChange,setAgeChange] = useState(false);
  const [ consent, setConsent ] = useState( "" );

  const nameErrorDiv = React.createRef();

  const updateData = event =>
  {
    switch ( event.target.name )
    {
      case "users_name":
        setName( event.target.value );
        break;
      case "age":
        setAge( event.target.value );
       setAgeChange(true)
        break;
        case "email":
        setEmail( event.target.value );
        break;
      case "message":
        setMessage( event.target.value );
        break;
      case "gender":
        setGender( event.target.value );
        break;
      case "consent":
        console.log( "Clicked!" );
        setConsent( event.target.value );
        break;
      default:
        break;
    }
  };
 

  const callOnBlur = () => {
    if (name.trim().length === 0) {
        nameErrorDiv.current.style.display = "block";
    } else {
        nameErrorDiv.current.style.display = "none";
    }
}

useEffect(() => {
    if (age.length === 0) {
        console.log("Age is empty!");
    } else {
        console.log("Age has some value!");
    }
}, [age])

const submitForm = event => {
  event.preventDefault();

  if (name.length !== 0 && age > 18 && age < 90) {
   
      const userData = {
          name: name,
          age: age,
          email:email,
          message: message,
          gender: gender,
          consent: consent
      }

      const settings = {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
              "Content-Type": "application/JSON"
          }
      }

      fetch("https://jsonplaceholder.typicode.com/users", settings)
          .then(response => response.json())
          .then(data => {
              console.log("Response from server", data);
          })

      setName("");  
      setAge("");    
     setAgeChange(false);
     setEmail("")
      setMessage(""); 
      setGender(""); 
      setConsent(""); 

  } else {
      alert(`Please fill in the name and age fields correctly before submitting the form! \n Your Name MUST contain 2 Characters \n Your Age MUST be More than 18 and Less than 90 `);

    
      }
  }


  return (
    <div className="contact">
      <div
        className="leftSide"
        style={ { backgroundImage: `url(${ PizzaLeft })` } }
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={submitForm}>
          <label htmlFor="users_name">Name</label>
          <input id="users_name" name="users_name" onChange={ updateData } onBlur={callOnBlur} value={ name } placeholder="Enter your Full Name"/>
          <div className="visible" ref={nameErrorDiv}>Please enter your name</div>

          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" onChange={ updateData } value={ age } placeholder="Enter Your Age"/>
          <div className={age.length === 0 && ageChange ? "visible" : "invisible"}>Please enter your age</div>
          <div className={age > 90 && age < 18 && ageChange ? "visible" : "invisible"}>Age must not be over 90!</div>

          <label htmlFor="email">Email</label>
          <input id="email" name="email" onChange={updateData}  value={email}placeholder="Enter email..." type="email" />


          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" onChange={ updateData } value={ message } rows="6" placeholder="Enter message..." required ></textarea>

          <label htmlFor="gender">Gender</label>
          <select style={ { width: '250px', alignSelf: "center" } } id="gender" name="gender" onChange={ updateData } value={ gender }>
          <option value="Gender">Select your Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>

          <label >Please Read and Agree to <i><b><a herf={TermsAndConditions } style={{cursor:"pointer", color:"black"}} target="_blank">Our Terms and Conditions</a> </b> </i> and your Data-Protection rights?</label>
          <label>Consent to your agreement.</label>
          <div className='radioButton'>
            <div><input  style={ { width: "20px"} } type="radio" name="consent" onChange={ updateData } value="yes" checked={ consent === "yes" } />
              <label >Yes</label>
            </div>
            <div>
              <input style={ { width: "20px"} } type="radio" name="consent" onChange={ updateData } value="no" checked={ consent === "no" } />
              <label>No</label>
            </div>
          </div>
          <button type="submit"> Send Message</button>
          <div> <Link to="/">Go to Home</Link></div>
        </form> 
      </div>

     
    </div>
  );
}
export default Contact;


