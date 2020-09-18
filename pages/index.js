import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavMenu from "../components/Layout/NavMenu";
import FounderDisplay from "../components/FoundersDisplay/FounderDisplay";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";
import ContactUs from "../components/ContactUs/ContactUs";
import { withTranslation, i18n, Link } from "../i18n";
import PropsTypes from "prop-types";

function Home({ t }) {
  let founders = [
    {
      name: "HERBERT RASTCH",
      title1: t("Partner at REL Realty Advisors"),
      title2: t("President at Herbie Holdings"),
      title3: t("Certified Real Estate Broker"),
    },
    {
      name: "ALEXANDRE ETHIER",
      title1: t("Partner at REL Realty Advisors"),
      title2: t("President and Project Director at COGERCO"),
    },
  ];
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

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
  };

  const languageMenuHandler = () => {
    setOpenLanguageMenu((openLanguageMenu) => !openLanguageMenu);
  };

  return (
    <div className={styles.container}>
      <Head>
        {/* website tab title */}
        <title> REL REALTY ADVISORS</title>
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
          <div className={styles.pagetitlelogocontent}>
            <img
              className={styles.pagetitlelogo}
              src="images/RELLogoWhite.png"
              alt="rel-Logo-White"
            />
            <div className={styles.pagetitletextcontent}>{t("paragraph1")}</div>
          </div>
        </div>
        <div className={styles.foundersection}>
          <img
            src="images/foundersection.jpg"
            style={{ width: "100%", height: "100%", zIndex: "2" }}
          />
          <div className={styles.foundersectionoverlay}>
            <div className={styles.founderscontainer}>
              <div className={styles.founderpartnertitle}>
                {t("FOUNDING PARTNERS")}
              </div>
              <FounderDisplay founders={founders} />
            </div>
          </div>
        </div>

        <div className={styles.successstorybackground} lang={i18n.language}>
          <div className={styles.successstorycontent}>
            <div className={styles.successstorytitle}>
              {t("REL REALTY ADVISORS IS PROUD TO PRESENT ITS FIRST PROJECT")}
              <>
                {i18n.language === "fr" ? (
                  <div className={styles.novaintroparagraph}>
                    {t("NovaIntro")}
                  </div>
                ) : (
                  <></>
                )}
              </>
            </div>

            <img
              className={styles.novatitle}
              src="/images/novatitleimage.png"
            />
            <div className={styles.novacontenttitle}>
              {t(
                "A LAKEFRONT EXCLUSIVE COMMUNITY OF ONLY 8 LUXURY RESIDENCES ON LAKE TREMBLANT"
              )}
            </div>
            <div className={styles.novacontentdescription}>
              {t("Novaparagraph")}
            </div>
            <img
              className={styles.novacontentimage}
              src="/images/novacontentimage.JPG"
            />
            <div className={styles.discovernovabtn}>
              <Link href="https://novatremblant.com/">
                <div className={styles.discovernovabtntext}>
                  {t("DISCOVER NOVA")}
                </div>
              </Link>
            </div>
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
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Home.PropsTypes = {
  t: PropsTypes.func.isRequired,
};

export default withTranslation("common")(Home);
