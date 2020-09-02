import Link from "next/link";
import styles from "../../../styles/Layout.module.css";

const SideDrawer = () => {
  let menuContent = [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/about" },
    { title: "PARTNER", link: "/partner" },
    { title: "CONTACT US", link: "contactus" },
  ];
  return (
    <div className={styles.sidedrawer}>
      <ul>
        {menuContent.map((menucontent, i) => (
          <li>
            <Link href={menucontent.link}>
              <div className={styles.navmenutitle} key={i}>
                {menucontent.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;
