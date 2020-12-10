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
import LanguageMenu from "../components/LanguageMenu/LanguageMenu";
import PageTitle from "../components/PageContent/PageTitle";

const Home = ({ t }) => {
  const founders = [
    {
      name: "HERBERT RATSCH",
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
  const pageTitleContent = {
    image: "images/RELLogoWhite.png",
    alt: "rel-Logo",
    content: t("paragraph1"),
  };

  const [drawerbtnActivated, setDrawerbtnActivated] = useState(false);

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
  };

  const languageMenuHandler = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
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
        <title>REL REALTY ADVISORS</title>
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
        <meta
          name="description"
          content="REL Realty Advisors is a consortium of real estate professionals who have been collaborating successfully on various projects for nearly fifteen years."
        />
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

        <div className={styles.foundersection}>
          <img
            src="images/foundersection.jpg"
            alt="section_image"
            style={{ width: "100%", height: "100%", zIndex: "2" }}
          />
          <div className={styles.foundersectionoverlay}>
            <div className={styles.founderscontainer}>
              <h1 className={styles.founderpartnertitle}>
                {t("FOUNDING PARTNERS")}
              </h1>
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
                ) : null}
              </>
            </div>
            <img
              className={styles.novatitle}
              src="/images/novatitleimage.png"
              alt="nova_image"
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
              alt="nova_content"
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
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Home.PropsTypes = {
  t: PropsTypes.func.isRequired,
};

export default withTranslation("common")(Home);
