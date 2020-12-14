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
import LanguageMenu from "../components/LanguageMenu/LanguageMenu";
import PageTitle from "../components/PageContent/PageTitle";

const ContactUs = ({ t }) => {
  const [drawerbtnActivated, setDrawerbtnActivated] = useState(false);

  const languageMenuHandler = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  const founders = [
    {
      name: "HERBERT RATSCH",
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

  const pageTitleContent = {
    content: t("CONTACT US"),
    titleImg: "images/hometitlebackground.jpg",
    altImg: "hometitlebackground",
  };

  const verticalLineColor = "#006a52";

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
        <title>Contact Us | REL REALTY ADVISORS</title>
        <link rel="icon" href="/images/relLogo2.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1, width=device-width, height=device-height, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
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
