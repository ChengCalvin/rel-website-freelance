import Backdrop from "../Backdrop/Backdrop";

import styles from "../../../styles/Layout.module.css";

const Modal = (props) => (
  <>
    <Backdrop
      showBackdrop={props.modalOpen}
      backdropClicked={props.backdropClicked}
    >
      <div className={styles.modal}>{props.children}</div>
    </Backdrop>
  </>
);

export default Modal;
