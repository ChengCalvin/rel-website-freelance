import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "../../styles/ContactUs.module.css";
import DrawerButton from "../Layout/SideDrawer/DrawerButton/DrawerButton";

let SERVICE_ID = "service_27cl4ij";
let TEMPLATE_ID = "template_li3sjql";
let USER_ID = "user_r0gjxmlxZQlW7z56Pt59K";

let initialClientMessage = {
  firstName: "",
  lastName: "",
  clientEmail: "",
  message: "",
};

const ContactUs = () => {
  let [clientMessage, setClientMessage] = useState({
    firstName: "",
    lastName: "",
    clientEmail: "",
    message: "",
  });
  let [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const onChangeHandler = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    const client = clientMessage;
    client[name] = value;
    setClientMessage(client);
    invalidFormHandler();
  };

  const invalidFormHandler = () => {
    if (
      clientMessage.firstName !== "" &&
      clientMessage.lastName !== "" &&
      clientMessage.clientEmail !== "" &&
      clientMessage.clientEmail.indexOf("@") > -1 &&
      clientMessage.message !== ""
    ) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  };

  const clientFormSubmitHandler = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, clientMessage, USER_ID).then(
      (response) => console.log("Success", response),
      (error) => console.log("Failed", error)
    );
    setClientMessage(initialClientMessage);
    clearInputField();
    setButtonIsDisabled(true);
  };

  const clearInputField = () => {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("clientEmail").value = "";
    document.getElementById("message").value = "";
  };

  let submitButton = buttonIsDisabled ? (
    <div className={styles.submitbtndisabled}>Submit</div>
  ) : (
    <div className={styles.submitbtn} onClick={clientFormSubmitHandler}>
      Submit
    </div>
  );
  return (
    <div className={styles.contactus}>
      <div className={styles.contactustitle}>CONTACT US TODAY</div>
      <div className={styles.contactname}>
        <div className={styles.contactfirstname}>
          <div>First Name</div>
          <input
            type="text"
            name="firstName"
            onChange={(e) => onChangeHandler(e)}
            id="firstName"
            maxLength="26"
          />
        </div>
        <div className={styles.contactlastname}>
          <div>Last Name</div>
          <input
            type="text"
            name="lastName"
            onChange={(e) => onChangeHandler(e)}
            id="lastName"
            maxLength="26"
          />
        </div>
      </div>
      <div className={styles.contactemail}>
        <div>Email</div>
        <input
          type="text"
          name="clientEmail"
          onChange={(e) => onChangeHandler(e)}
          id="clientEmail"
          maxLength="50"
        />
      </div>
      <div className={styles.contactmessage}>
        <div>Comment or Message</div>
        <textarea
          type="text"
          name="message"
          onChange={(e) => onChangeHandler(e)}
          maxLength="500"
          id="message"
        />
      </div>
      <div className={styles.contactemailscontainer}>
        <div className={styles.relcontactemail1}>
          <div className={styles.contactperson}>
            <b>General Inquiries:</b> info@relra.com
          </div>
          <div className={styles.contactperson}>
            <b>Alexandre Ethier:</b> alexandre@relra.com
          </div>
        </div>
        <div className={styles.relcontactemail2}>
          <div className={styles.contactperson}>
            <b>Herbert Rastch:</b> herbert@relra.com
          </div>
        </div>
      </div>
      {submitButton}
    </div>
  );
};

export default ContactUs;
