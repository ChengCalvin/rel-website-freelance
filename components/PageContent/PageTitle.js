import styles from "../../styles/componentstyles/PageTitle.module.css";
import i18n from "../../i18n";

const PageTitle = (props) => {
  return (
    <div
      className={
        props.pageTitleContent.image ? styles.pagetitle : styles.pagetitlenologo
      }
    >
      <img
        src="images/hometitlebackground.jpg"
        className={styles.hometitlebackground}
      />
      <div
        className={
          props.pageTitleContent.image ? styles.overlay : styles.overlaynologo
        }
      >
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
          <div
            className={
              props.pageTitleContent.image
                ? styles.pagetitletextcontent
                : styles.pagetitletextcontentnologo
            }
            lang={i18n.language}
          >
            {props.pageTitleContent.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
