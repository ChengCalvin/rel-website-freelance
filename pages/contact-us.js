import { useState } from "react";
import Head from "next/head";
import NavMenu from "../components/Layout/NavMenu";
import styles from "../styles/ContactUsPage.module.css";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";
import FounderDisplay from "../components/FoundersDisplay/FounderDisplay";
import ContactUsSection from "../components/ContactUs/ContactUs";
import { withTranslation, i18n, Link } from "../i18n";
import PropsTypes from "prop-types";

const ContactUs = ({ t }) => {
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

  let founders = [
    {
      name: "HERBERT RASTCH",
      email: "herbert@relra.com",
      phone: "C: 819-429-9019",
      cellphone: "C: 514-884-8269",
      tollfree: "TF: 1-866-681-7557",
    },
    {
      name: "ALEXANDRE ETHIER",
      email: "alexandre@relra.com",
      cellphone: "C: 450-675-2566",
    },
  ];

  let verticalLineColor = "#006a52";

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
  };
  return (
    <div className={styles.container}>
      <Head>
        {/* website tab title */}
        <title>Contact Us | REL REALTY ADVISORS</title>
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
          <div className={styles.pagetitletextcontent}>{t("CONTACT US")}</div>
        </div>
        <div className={styles.foundercontactcontainer}>
          <FounderDisplay
            founders={founders}
            verticalLineColor={verticalLineColor}
          />
        </div>
        <div className={styles.contactuscontainer}>
          <ContactUsSection />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footeremail}>info@relra.com</div>
        <div className={styles.footercopyright}>&copy; REL REALTY ADVISORS</div>
      </footer>
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
