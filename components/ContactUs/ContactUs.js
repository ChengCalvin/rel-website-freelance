import { useState } from "react";
import styles from "../../styles/ContactUs.module.css";

const ContactUs = () => {
  let [clientMessage, setClientMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  return (
    <div className={styles.contactus}>
      <div className={styles.contactustitle}>CONTACT US</div>
      <div className={styles.contactname}>
        <div className={styles.contactfirstname}>
          <div>First Name</div>
          <input type="text" placeholder="firstname" />
        </div>
        <div className={styles.contactlastname}>
          <div>Last Name</div>
          <input type="text" placeholder="lastname" />
        </div>
      </div>
      <div className={styles.contactemail}>
        <div>Email</div>
        <input type="text" placeholder="emailname" />
      </div>
      <div className={styles.contactmessage}>
        <div>Comment or Message</div>
        <textarea type="text" placeholder="firstname" maxLength="500" />
      </div>
    </div>
  );
};

export default ContactUs;
