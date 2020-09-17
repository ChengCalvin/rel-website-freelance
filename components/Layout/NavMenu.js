import styles from "../../styles/Layout.module.css";
import { withTranslation, i18n, Link } from "../../i18n";
import PropsTypes from "prop-types";


const NavMenu = ({ t }) => {
  let menuContent = [
    { title: t("HOME"), link: "/" },
    { title: t("ABOUT"), link: "/about" },
    { title: t("PARTNERS"), link: "/partners" },
    { title: t("CONTACT US"), link: "/contact-us" },
  ];
  return (
    <div className={styles.navmenu} lang={i18n.language}>
      {menuContent.map((menucontent, i) => (
        <Link href={menucontent.link} key={i} as={menucontent.link}>
          <div className={styles.navmenutitle} key={i}>
            {menucontent.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

NavMenu.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

NavMenu.PropsTypes = {
  t: PropsTypes.func.isRequired,
};

export default withTranslation("common")(NavMenu);
