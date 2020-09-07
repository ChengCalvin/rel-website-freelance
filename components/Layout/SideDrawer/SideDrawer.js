import Link from "next/link";
import styles from "../../../styles/Layout.module.css";

const SideDrawer = (props) => {
  let menuContent = [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/about" },
    { title: "PARTNER", link: "/partner" },
    { title: "CONTACT US", link: "contactus" },
  ];
  return (
    <div className={styles.sidedrawer}>
      <div className={styles.closenavmenubtn} onClick={props.closeMenuClicked}>
        <div className={styles.closesymbol}>x</div>
        <div className={styles.closemenutext}>CLOSE MENU</div>
      </div>
      <ul>
        {menuContent.map((menucontent, i) => (
          <li className={styles.sidedrawermenu}>
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
