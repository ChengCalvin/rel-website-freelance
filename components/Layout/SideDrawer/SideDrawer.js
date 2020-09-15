import styles from "../../../styles/Layout.module.css";
import { withTranslation, Link } from "../../../i18n";
import i18next from 'i18next'
import PropsTypes from "prop-types";

const SideDrawer = (props) => {
  let menuContent = [
    { title: i18next.t("HOME"), link: "/" },
    { title: i18next.t("ABOUT"), link: i18next.t("/about") },
    { title: i18next.t("PARTNER"), link: i18next.t("/partner") },
    { title: i18next.t("CONTACT US"), link: i18next.t("contact-us") },
  ];
  return (
    <div className={styles.sidedrawer}>
      <div className={styles.closenavmenubtn} onClick={props.closeMenuClicked}>
        <div className={styles.closesymbol}>x</div>
        <div className={styles.closemenutext}>{i18next.t("CLOSE MENU")}</div>
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

SideDrawer.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

SideDrawer.PropsTypes = {
  t: PropsTypes.func.isRequired,
};

export default withTranslation("common")(SideDrawer);
