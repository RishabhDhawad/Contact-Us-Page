import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import {useState} from "react";

const ContactForm = () => {


  // This code is written to give values of name, email, and text to the resultant (below the submit button)

  // This was used to learn "useState Hook"

  // let name = "Name";
  const [name, setName] = useState("Name");

  // let email = "Email";
  const [email, setEmail] = useState("Email");

  // let text = "Text";
  const [text, setText] = useState("Text");

  

  const onViaCallSubmit = () => {
    console.log("I am from Call");
  };


  const onSubmit = (event) => {

    // Page Does not gets refresh from this command
    event.preventDefault();

    // Here we are taking values from event.target

    // name = event.target[0].value;  // Can also be written as this
    setName (event.target[0].value);

    // email = event.target[1].value;  // Can also be written as this
    setEmail(event.target[1].value);

    // text = event.target[2].value;  // Can also be written as this
    setText(event.target[2].value);

  };

  return (
    <section className = {styles.container}> 
        
      <div className = {styles.contact_form}>
        
        <div className= {styles.top_btn}>
          <Button text ="VIA SUPPORT CHAT" icon = {<MdMessage fontSize = "24px" />} />
          <Button 
          onClick = {onViaCallSubmit}
          text ="VIA CALL" icon = {<FaPhoneAlt fontSize = "24px"/>} />
        </div>
        
        <Button 
        isOutline = {true}
        text ="VIA EMAIL FORM" 
        icon = {<HiMail fontSize = "24px"/>} />

        <form onSubmit={onSubmit}>

          <div className= {styles.form_control}>
            <label htmlFor = "name">Name</label>
            <input type = "text" name = "name"></input>
          </div>
          <div className= {styles.form_control}>
            <label htmlFor = "email">Email</label>
            <input type = "email" name = "email"></input>
          </div>
          <div className= {styles.form_control}>
            <label htmlFor = "text">Text</label>
            <textarea name = "text" rows = "6" />
          </div>

          <div style = { {display: "flex" , justifyContent: "end",}}>
            <Button text = "SUBMIT BUTTON"/>
          </div>

          {/* This will show the result of the fields below submit button. */}
          {<div> Result after Submit:   { name + "  " + email + "  " + text}</div>}
          

        </form>
        
      </div>

      <div className = {styles.contact_image}> 
        <img src = "/images/contact.png" alt = "contact image" />
      </div>

    </section>
  );
};

export default ContactForm;
