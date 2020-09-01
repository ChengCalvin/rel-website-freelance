import NavMenu from "../components/Layout/NavMenu";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>Logo</div>
        <NavMenu></NavMenu>
      </header>
      <main className={styles.main}>content</main>

      <footer className={styles.footer}>REL REALTY ADVISOR</footer>
    </div>
  );
};

export default About;
