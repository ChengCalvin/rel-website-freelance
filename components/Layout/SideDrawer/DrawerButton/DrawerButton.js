import styles from "../../../../styles/Layout.module.css";

const DrawerButton = (props) => (
  <div className={styles.drawerbtn} onClick={props.drawerbtnClicked}>
    <div className={styles.drawerbtnline}></div>
    <div className={styles.drawerbtnline}></div>
    <div className={styles.drawerbtnline}></div>
  </div>
);

export default DrawerButton;
