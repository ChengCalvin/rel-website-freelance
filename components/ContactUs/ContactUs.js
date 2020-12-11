import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "../../styles/ContactUs.module.css";
import { withTranslation, Trans } from "..../../../i18n";
import PropsTypes from "prop-types";

const SERVICE_ID = "service_27cl4ij";
const TEMPLATE_ID = "template_li3sjql";
const USER_ID = "user_r0gjxmlxZQlW7z56Pt59K";

const initialClientMessage = {
  firstName: "",
  lastName: "",
  clientEmail: "",
  message: "",
};

const ContactUs = ({ t }) => {
  const [clientMessage, setClientMessage] = useState({
    firstName: "",
    lastName: "",
    clientEmail: "",
    message: "",
  });
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [showError, setShowError] = useState(false);

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
      setShowError(false);
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

  const disabledBtnHandler = () => {
    if (
      clientMessage.firstName === "" ||
      clientMessage.lastName === "" ||
      clientMessage.clientEmail === "" ||
      clientMessage.message === ""
    )
      setShowError(true);
    else {
      setShowError(false);
    }
  };

  const clearInputField = () => {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("clientEmail").value = "";
    document.getElementById("message").value = "";
  };

  const submitButton = buttonIsDisabled ? (
    <div className={styles.submitbtndisabled} onClick={disabledBtnHandler}>
      {t("Submit")}
    </div>
  ) : (
    <div className={styles.submitbtn} onClick={clientFormSubmitHandler}>
      {t("Submit")}
    </div>
  );
  return (
    <div className={styles.contactus}>
      <div className={styles.contactustitle}>
        <h2>{t("CONTACT US TODAY")}</h2>
      </div>
      <div className={styles.contactname}>
        <div className={styles.contactfirstname}>
          <div className={styles.inputtitlecontainer}>
            {t("First Name")}
            <div className={styles.errormessage}>
              {showError ? <p>{t("inputFieldErrorMessage")}</p> : <></>}
            </div>
          </div>
          <input
            type="text"
            name="firstName"
            onChange={(e) => onChangeHandler(e)}
            id="firstName"
            maxLength="26"
          />
        </div>
        <div className={styles.contactlastname}>
          <div className={styles.inputtitlecontainer}>
            {t("Last Name")}
            <div className={styles.errormessage}>
              {showError ? <p>{t("inputFieldErrorMessage")}</p> : <></>}
            </div>
          </div>
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
        <div className={styles.inputtitlecontainer}>
          {t("Email")}
          <div className={styles.errormessage}>
            {showError ? <p>{t("emailFieldError")}</p> : <></>}
          </div>
        </div>
        <input
          type="text"
          name="clientEmail"
          onChange={(e) => onChangeHandler(e)}
          id="clientEmail"
          maxLength="50"
        />
      </div>
      <div className={styles.contactmessage}>
        <div className={styles.inputtitlecontainer}>
          {t("Comment or Message")}
          <div className={styles.errormessage}>
            {showError ? <p>{t("inputFieldErrorMessage")}</p> : <></>}
          </div>
        </div>
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
            <Trans i18nKey="translation">
              <strong>General Inquiries: </strong>
            </Trans>
            info@relra.com
          </div>
          <div className={styles.contactperson}>
            <b>Alexandre Ethier:</b> alexandre@relra.com
          </div>
        </div>
        <div className={styles.relcontactemail2}>
          <div className={styles.contactperson}>
            <b>Herbert Ratsch:</b> herbert@relra.com
          </div>
        </div>
      </div>
      {submitButton}
    </div>
  );
};

ContactUs.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

ContactUs.PropsTypes = {
  t: PropsTypes.func.isRequired,
};

export default withTranslation("common")(ContactUs);
