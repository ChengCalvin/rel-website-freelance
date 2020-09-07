import Link from "next/link";
import styles from "../../styles/Layout.module.css";

let menuContent = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/about" },
  { title: "PARTNER", link: "/partner" },
  { title: "CONTACT US", link: "/contact-us" },
];

const NavMenu = () => (
  <div className={styles.navmenu}>
    {menuContent.map((menucontent, i) => (
      <Link href={menucontent.link} key={i} as={menucontent.link}>
        <div className={styles.navmenutitle} key={i}>
          {menucontent.title}
        </div>
      </Link>
    ))}
  </div>
);

export default NavMenu;
