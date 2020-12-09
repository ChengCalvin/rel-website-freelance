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
import LanguageMenu from "../components/LanguageMenu/LanguageMenu";
import PageTitle from "../components/PageContent/PageTitle"

const About = ({ t }) => {
  const [drawerbtnActivated, setDrawerbtnActivated] = useState(false);
  const pageTitleContent = {
    content: t("ABOUT")
  }
  const languageMenuHandler = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
  };

  const sideDrawer = (
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
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>About | REL REALTY ADVISORS</title>
        <link rel="icon" href="/images/relLogo2.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500;600&display=swap" rel="stylesheet"/>
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
          <LanguageMenu
            i18nLang={i18n.language}
            languageMenuClicked={languageMenuHandler}
          />
          {sideDrawer}
        </div>
      </header>

      <main className={styles.main}>
        <PageTitle pageTitleContent={pageTitleContent} />

        <div className={styles.abouttextcontainer}>
          <div className={styles.abouttext1}>
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
