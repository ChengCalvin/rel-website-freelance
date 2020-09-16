import { useState } from "react";
import Head from "next/head";
import NavMenu from "../components/Layout/NavMenu";
import styles from "../styles/Partner.module.css";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";
import FounderAchievement from "../components/FounderAchievement/FounderAchievement";
import { withTranslation, i18n, Link, Trans } from "../i18n";
import PropsTypes from "prop-types";

const Partner = ({ t }) => {
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

  let partners = [
    {
      profileImage: "/images/herbieprofile.jpg",
      alt: "herbie",
      name: "HERBERT RASTCH",
      title1: t("Partner at REL Realty Advisors"),
      title2: t("President at Herbie Holdings"),
      title3: t("Certified Real Estate Broker"),
      description: [
        t("paragraphherbie1"),
        <Trans i18nKey="paragraphherbie2">
          Sa formation professionnelle et son expérience est notable. Avant de
          déménager à Mont-Tremblant, Herbert œuvrait dans l’équipe de direction
          de <i>Starters Sports Canada</i>. Il travaillait en étroite
          collaboration avec les ligues majeures de sports telles que la NFL, la
          MLB, la LNH et la LCF. Ce réseau lui a permis d’établir des contacts
          d’affaires durables.
        </Trans>,
        <Trans i18nKey="paragraphherbie3">
          Au cours des 20 dernières années, il a développé son créneau dans le
          monde de l’immobilier de luxe : vice-président et directeur des ventes
          immobilières du Réseau de réservation du
          <i>Centre de villégiature de Mont-Tremblant Intrawest</i>, ainsi que
          directeur du secteur de locations de vacances.
        </Trans>,
        t("paragraphherbie4"),
      ],
    },
    {
      profileImage: "/images/alexprofile.jpg",
      alt: "alex",
      name: "ALEXANDRE ETHIER",
      title1: t("Partner at REL Realty Advisor"),
      title2: t("President and Project Director at COGERCO"),
      description: [
        t("paragraphalex1"),
        t("paragraphalex2"),
        t("paragraphalex3"),
      ],
      achievementSubtitle: t("achievementtitle"),
      allAchievements: [
        t("achievement1"),
        t("achievement2"),
        t("achievement3"),
        t("achievement4"),
        t("achievement5"),
        t("achievement6"),
      ],
    },
  ];

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
  };
  return (
    <div className={styles.container}>
      <Head>
        {/* website tab title */}
        <title>Partenaires | REL REALTY ADVISORS</title>
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
          <div className={styles.pagetitletextcontent}>{t("PARTNERS")}</div>
        </div>
        <div className={styles.foundingpartnercontainer}>
          <div className={styles.foundingpartnertitle} lang={i18n.language}>
            {t("FOUNDING PARTNERS")}
          </div>
          <div className={styles.foundingpartnertext}>
            {t("foundingpartnerparagraph1")}
          </div>
        </div>
        <div className={styles.foundersbackgroundcontainer}>
          <div className={styles.foundersdetailcontainer}>
            {partners.map((partner, i) => (
              <FounderAchievement key={i} partner={partner} />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footeremail}>info@relra.com</div>
        <div className={styles.footercopyright}>&copy; REL REALTY ADVISORS</div>
      </footer>
    </div>
  );
};

Partner.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Partner.PropsTypes = {
  t: PropsTypes.func.isRequired,
};

export default withTranslation("common")(Partner);
