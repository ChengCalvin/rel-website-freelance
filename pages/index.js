import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavMenu from "../components/Layout/NavMenu";
import FounderDisplay from "../components/FoundersDisplay/FounderDisplay";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";

let founders = [
  {
    name: "HERBERT RASTCH",
    title1: "Partner at REL Realty Advisors",
    title2: "President at Herbie Holdings",
    title3: "Certified Real Estate Broker",
    email: "herbert@relra.com",
    phone: "C: 819-429-9019",
    cellphone: "C: 514-884-8269",
    tollfree: "TF: 1-866-681-7557",
  },
  {
    name: "ALEXANDRE ETHIER",
    title1: "Partner at REL Realty Advisor",
    title2: "President and Project Director at COGERCO",
    cellphone: "450-675-2566",
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
        <title> REL REALTY ADVISOR</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1, width=device-width, height=device-height, user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <header className={styles.header}>
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
                showSideDrawer={drawerbtnActivated}
                backdropClicked={drawerbtnClickedHandler}
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
          <FounderDisplay founders={founders} />
        </div>
      </main>

      <footer className={styles.footer}>REL REALTY ADVISOR</footer>
    </div>
  );
}
