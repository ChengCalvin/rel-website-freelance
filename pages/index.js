import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavMenu from "../components/Layout/NavMenu";
import FounderDisplay from "../components/FoundersDisplay/FounderDisplay";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";
import ContactUs from "../components/ContactUs/ContactUs";

let founders = [
  {
    name: "HERBERT RASTCH",
    title1: "Partner at REL Realty Advisors",
    title2: "President at Herbie Holdings",
    title3: "Certified Real Estate Broker",
  },
  {
    name: "ALEXANDRE ETHIER",
    title1: "Partner at REL Realty Advisor",
    title2: "President and Project Director at COGERCO",
  },
];

export default function Home() {
  let [drawerbtnActivated, setDrawerbtnActivated] = useState(false);

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
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
            style={{
              width: "20%",
              height: "25%",
              padding: "0.5rem",
              minWidth: "260px",
            }}
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
              <SideDrawer
                closeMenuClicked={drawerbtnClickedHandler}
              />
            </>
          ) : null}
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
            <div className={styles.pagetitletextcontent}>
              REL Realty Advisors is a consortium of real estate professionals
              who have been collaborating successfully on various projects for
              nearly fifteen years. REL Realty Advisors focuses on resort
              development, master-planned amenity properties and residential
              communities. The founding partners have been involved in the real
              estate milieu of development, project management and
              commercialization for many years.
            </div>
          </div>
        </div>
        <div className={styles.foundersection}>
          <img
            src="images/foundersection.jpg"
            style={{ width: "100%", height: "100%", zIndex: "2" }}
          />
          <div className={styles.foundersectionoverlay}></div>
          <div className={styles.founderscontainer}>
            <div className={styles.founderpartnertitle}>FOUNDING PARTNERS</div>
            <FounderDisplay founders={founders} />
          </div>
        </div>

        <div className={styles.successstorybackground}>
          <div className={styles.successstorycontent}>
            <div className={styles.successstorytitle}>
              REL REALTY ADVISORS IS PROUD TO PRESENT ITS FIRST PROJECT
            </div>
            <img
              className={styles.novatitle}
              src="/images/novatitleimage.JPG"
            />
            <div className={styles.novacontenttitle}>
              A LAKEFRONT EXCLUSIVE COMMUNITY OF ONLY 8 LUXURY RESIDENCES ON
              LAKE TREMBLANT
            </div>
            <div className={styles.novacontentdescription}>
              NOVA Tremblant is an exclusive project of 8 newly built private
              and luxurious residences on the shore of Lake Tremblant with
              breathtaking views of the Mont-Tremblant mountain. This perfectly
              located gated and prestigious community is the ultimate property
              for privacy, serene nature and endless year-round outdoor
              activities.
            </div>
            <img
              className={styles.novacontentimage}
              src="/images/novacontentimage.JPG"
            />
            <div className={styles.discovernovabtn}>
              <Link href="https://novatremblant.com/">
                <div className={styles.discovernovabtntext}>DISCOVER NOVA</div>
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
        <div className={styles.footercopyright}>&copy; REL REALTY ADVISOR</div>
      </footer>
    </div>
  );
}
