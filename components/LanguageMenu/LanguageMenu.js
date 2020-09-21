import styles from "../../styles/LanguageMenu.module.css";

const LanguageMenu = (props) => (
  <div className={styles.languagesection}>
    <div className={styles.languagemenubtncontainer}>
      <div
        className={styles.languagemenubtn}
        lang={props.i18nLang}
        onClick={props.languageMenuClicked}
      >
        {props.i18nLang === "en" ? "FR" : "EN"}
      </div>
    </div>
  </div>
);

export default LanguageMenu;
