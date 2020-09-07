import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import NavMenu from "../components/Layout/NavMenu";
import styles from "../styles/About.module.css";
import DrawerButton from "../components/Layout/SideDrawer/DrawerButton/DrawerButton";
import Backdrop from "../components/Layout/Backdrop/Backdrop";
import SideDrawer from "../components/Layout/SideDrawer/SideDrawer";
import ContactUs from "../components/ContactUs/ContactUs";

const About = () => {
  let [drawerbtnActivated, setDrawerbtnActivated] = useState(false);

  const drawerbtnClickedHandler = () => {
    setDrawerbtnActivated((drawerbtnActivated) => !drawerbtnActivated);
  };
  return (
    <div className={styles.container}>
      <Head>
        {/* website tab title */}
        <title>About | REL REALTY ADVISOR</title>
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
                showSideDrawer={drawerbtnActivated}
                backdropClicked={drawerbtnClickedHandler}
              />
            </>
          ) : null}
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.pagetitle}>
          <div className={styles.pagetitletextcontent}>ABOUT</div>
        </div>
        <div className={styles.abouttextcontainer}>
          <div className={styles.abouttext1}>
            <div>&ldquo;</div>
            REL Realty Advisors company is not a development company in the
            traditional sense of the word. They are facilitators who bring
            innovative ideas, best practices and the best professionals together
            to conceive and then to support a specific approach to a real estate
            development project that accomplishes the owner&rsquo;s stated
            objective.&rdquo;
          </div>
          <div className={styles.abouttext2}>
            They help develop an ethic around a project following objectives,
            business culture and financial imperatives of the owner. They then
            build a team that can support and defend that ethic in which the
            required disciplines, exacting the highest creativity and
            resourcefulness of the best professionals, are applied to see the
            project through to successful completion, whether that completion is
            the development of a new project, acquisition of new assets,
            repositioning and redevelopment of an existing property. They then
            build a team that can support and defend that ethic with the highest
            creativity and resourcefulness of the best professionals, and make
            sure it is applied through the successful completion of a project,
            whether that completion is the development of a new project,
            acquisition of new assets, repositioning or redevelopment of an
            existing property.
            <br />
            <br />
            REL Realty Advisors functions as a trusted advisor, fiduciary,
            gatekeeper and eyes, ears and voice of the owner from conception to
            occupancy, to operation, or to disposition.
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
};

export default About;
