import Link from "next/link";
import styles from "../../styles/Layout.module.css";

let menuContent = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/about" },
  { title: "PARTNER", link: "/partner" },
  { title: "CONTACT US", link: "contactus" },
];

const NavMenu = () => (
  <div className={styles.navmenu}>
    {menuContent.map((menucontent) => (
      <Link href={menucontent.link}>
        <div>{menucontent.title}</div>
      </Link>
    ))}
  </div>
);

export default NavMenu;
