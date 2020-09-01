import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavMenu from "../components/Layout/NavMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* website tab title */}
        <title>REALTY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          style={{ width: "260px", height: "75px", padding: "0.5rem" }}
          src="images/relLogo.png"
        ></img>
        <NavMenu />
      </header>

      <main className={styles.main}>
        <div className={styles.pagetitle}>REL REALTY ADVISOR</div>
        <div>
          REL Realty Advisor is a consortium of real estate professional
        </div>
        <div>12</div>
      </main>

      <footer className={styles.footer}>REL REALTY ADVISOR</footer>
    </div>
  );
}
