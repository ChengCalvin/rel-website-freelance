import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import NavMenu from "../components/Layout/NavMenu";
import styles from "../styles/Partner.module.css";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";
import FounderAchievement from "../components/FounderAchievement/FounderAchievement";
import { withTranslation, i18n } from "../i18n";
import PropsTypes from "prop-types";

const Partner = () => {
  let [drawerbtnActivated, setDrawerbtnActivated] = useState(false);

  let partners = [
    {
      profileImage: "/images/herbieprofile.jpg",
      alt: "herbie",
      name: "HERBERT RASTCH",
      title1: "Partner at REL Realty Advisors",
      title2: "President at Herbie Holdings",
      title3: "Certified Real Estate Broker",
      description: [
        "As an established and trusted real estate broker and real estate entrepreneur, Herb represents some of the regions more discerning buyers and sellers. Having been one of the first brokers with Sotheby’s in the province of Quebec, Herb spearheaded the opening of the Mont-Tremblant office in order to better serve the Laurentian region.",
        "Prior to moving to Mont-Tremblant, Herb was an integral part of the senior management team at Starters Sports Canada, working closely with major sports leagues such as the NFL, MLB, NHL and CFL. This resulted in his developing lasting and valuable business contacts worldwide.",
        "For the last 20 years, he has emerged himself in the luxury real estate world, having been the Vice President of Intrawest’s Mont-Tremblant Resort Reservation Network, the resorts’ real estate Sales Director and vacation rentals Director.",
        "Herb has taken part in a notable series of record-setting sales in and out of the Laurentian region accomplished through his keen negotiating skills, worldwide network and real estate acumen. Herb was a principal collaborator in the largest transaction ever in Canada for the Sotheby’s brand and the largest single parcel of land ever sold in Canada (65,000 acres). Herb has completed numerous transactions in hospitality properties, real estate development projects and trophy properties throughout Quebec.",
      ],
    },
    {
      profileImage: "/images/alexprofile.jpg",
      alt: "alex",
      name: "ALEXANDRE ETHIER",
      title1: "Partner at REL Realty Advisor",
      title2: "President and Project Director at COGERCO",
      description: [
        "With 29 years of experience in project management, Alexandre has to his credit the delivery of over a hundred construction projects, with private, commercial and institutional clients.",
        "Having worked for several clients in different construction sectors, he benefits from an excellent reputation in the field and his expertise is undeniable. He has strong analytical and resolution skills for complex problems, making strategic decision and efficient management of multiple projects. Skilled in mobilizing professionals, decision makers and business combinations, he aims for his clients a winning partnership approach. Alexandre is versatile, proactive, focused on results and he is fully involved in every project he undertakes. He is an experienced manager with a reputation for integrity capable of proposing solutions and new ideas for your projects and your business to ensure profitability of these.",
        "Alexandre has a long track record of state-of-the-art project management to his credit, a military experience as an infantry officer in the Reserve Force, an integral component of the Canadian Armed Forces and a love for extreme outdoor activities.",
      ],
      achievementSubtitle: "Alexandre’s accomplishments include: ",
      allAchievements: [
        "Management, coordination and delivery of more than one hundred projects (totalling more than $100M), excavation, civil engineering and municipal infrastructure with commercial and institutional customers, including contractors, municipalities, governments. Situations of highly technical level emergency (MTQ road collapse).",
        "Analysis, assembly and conclusion of more than 700 hundred estimates/bids in excavation, civil engineering and construction, totalling more than $400M.",
        "Drafting and implementation of a “Health and Safety Prevention Program” and “Quality Management System” leading to ISO 9001 accreditation.",
        "Management and execution of more than 30 residential buildings.",
        "Realization of several other project management from other industries, such as IT (management of the design and installation of the largest network of transactional self-service kiosks in Ontario, TERANET).",
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
        <title>Partners | REL REALTY ADVISORS</title>
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
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
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
        <NavMenu />
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
      </header>
      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <div className={styles.pagetitletextcontent}>PARTNERS</div>
        </div>
        <div className={styles.foundingpartnercontainer}>
          <div className={styles.foundingpartnertitle}>FOUNDING PARTNERS</div>
          <div className={styles.foundingpartnertext}>
            After collaborating successfully on various projects for nearly
            fifteen years, the partners have recognized that their unique blend
            of experience and mutual trust would bring added value by
            formalizing the consortium into a single entity. Each of the
            partner’s roles is defined simply as “partner” despite each of their
            unique skills and experience. Every partner is fully accountable for
            total delivery of the projects of REL Realty Advisors.
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
