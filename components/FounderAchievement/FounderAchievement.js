import styles from "../../styles/FounderAchievement.module.css";

const FounderAchievement = (props) => {
  return (
    <div className={styles.founderinfowhitecontainer}>
      <div className={styles.foundercontentcontainer}>
        <div className={styles.profilepicandtitle}>
          <img
            className={styles.imagesize}
            src={props.partner.profileImage}
            alt={props.partner.alt}
          />
          <div className={styles.name}>{props.partner.name}</div>
          <div>{props.partner.title1}</div>
          <div>{props.partner.title2}</div>
          <div>{props.partner.title3}</div>
        </div>
        <div className={styles.verticalline}></div>
        <div className={styles.description}>
          <div>{props.partner.description}</div>
          <div className={styles.achievemnttitle}>
            {props.partner.achievementSubtitle}
          </div>
          <div>
            <ul>
              {props.partner.allAchievements?.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderAchievement;
