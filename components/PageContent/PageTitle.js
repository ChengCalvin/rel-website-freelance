import styles from "../../styles/componentstyles/PageTitle.module.css";

const PageTitle = (props) => {
  return (
    <div className={props.pageTitleContent.image ? styles.pagetitle : styles.pagetitlenologo}>
      <div className={props.pageTitleContent.image ? styles.overlay : styles.overlaynologo}>
        <div className={styles.pagetitlelogocontent}>
          {props.pageTitleContent.image ? (
            <img
              className={styles.pagetitlelogo}
              src={props.pageTitleContent.image}
              alt={props.pageTitleContent.alt}
            />
          ) : (
            <></>
          )}
          <div className={props.pageTitleContent.image ? styles.pagetitletextcontent : styles.pagetitletextcontentnologo}>
            {props.pageTitleContent.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
