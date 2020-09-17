import { useState } from "react";
import Head from "next/head";
import NavMenu from "../components/Layout/NavMenu";
import styles from "../styles/About.module.css";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";
import ContactUs from "../components/ContactUs/ContactUs";
import { withTranslation, i18n, Link } from "../i18n";
import PropsTypes from "prop-types";

const About = ({ t }) => {
  let [drawerbtnActivated, setDrawerbtnActivated] = useState(false);
  let [openLanguageMenu, setOpenLanguageMenu] = useState(false);

  const changeToFrenchLanguage = () => {
    if (i18n.language === "en") i18n.changeLanguage("fr");
    languageMenuHandler();
  };

  const changeToEnglishLanguage = () => {
    if (i18n.language === "fr") i18n.changeLanguage("en");
    languageMenuHandler();
  };

  const languageMenuHandler = () => {
    setOpenLanguageMenu((openLanguageMenu) => !openLanguageMenu);
  };

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
  };
  return (
    <div className={styles.container}>
      <Head>
        {/* website tab title */}
        <title>A Propos | REL REALTY ADVISORS</title>
        <link rel="icon" href="/images/relLogo2.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1, width=device-width, height=device-height, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <img
            className={styles.headerlogo}
            src="images/relLogo.png"
            alt="rel-Logo"
          />
        </Link>
        <div style={{ display: "flex", width: "fit-content" }}>
          <NavMenu />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "3rem",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              className={styles.languagemenubtncontainer}
              onClick={languageMenuHandler}
            >
              <div
                className={styles.languagemenubtn}
                lang={i18n.language}
              ></div>
            </div>
            {openLanguageMenu ? (
              <div className={styles.languagecontainer}>
                <div
                  className={styles.languagebtn}
                  onClick={changeToFrenchLanguage}
                >
                  FR
                </div>
                <div
                  className={styles.languagebtn}
                  onClick={changeToEnglishLanguage}
                >
                  EN
                </div>
              </div>
            ) : null}
          </div>
          <div className={styles.sidedrawerbtn}>
            <DrawerButton drawerbtnClicked={drawerbtnClickedHandler} />
            {drawerbtnActivated ? (
              <>
                <Backdrop
                  showBackdrop={drawerbtnActivated}
                  backdropClicked={drawerbtnClickedHandler}
                />
                <SideDrawer closeMenuClicked={drawerbtnClickedHandler} />
              </>
            ) : null}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <div className={styles.pagetitletextcontent}>{t("ABOUT")}</div>
        </div>
        <div className={styles.abouttextcontainer}>
          <div className={styles.abouttext1} lang={i18n.language}>
            <div>&ldquo;</div>
            {t("aboutquoteparagraph")}
            <>&rdquo;</>
          </div>
          <div className={styles.abouttext2}>
            {t("aboutparagraph2")}
            <br />
            <br />
            {t("aboutparagraph3")}
          </div>
        </div>
        <div className={styles.contactuscontainer}>
          <ContactUs />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footeremail}>info@relra.com</div>
        <div className={styles.footercopyright}>&copy; REL REALTY ADVISORS</div>
      </footer>
    </div>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

About.PropsTypes = {
  t: PropsTypes.func.isRequired,
};

export default withTranslation("common")(About);