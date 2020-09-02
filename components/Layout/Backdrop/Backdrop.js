import styles from "../../../styles/Layout.module.css";

const Backdrop = (props) =>
  props.showBackdrop ? (
    <div className={styles.backdrop} onClick={props.backdropClicked}>
      {props.children}
    </div>
  ) : null;

export default Backdrop;
