import styles from "../../styles/FounderAchievement.module.css";

const FounderAchievement = (props) => {
  return (
    <div className={styles.founderinfowhitecontainer}>
      <div className={styles.foundercontentcontainer}>
        <div className={styles.profilepicandtitle}>
          <img className={styles.imagesize} src={props.profileImage} />
          <div className={styles.name}>{props.name}</div>
          <div>{props.title1}</div>
          <div>{props.title2}</div>
          <div>{props.title3}</div>
        </div>
        <div className={styles.verticalline}></div>
        <div className={styles.description}>
          <div>{props.description}</div>
          <div className={styles.achievemnttitle}>
            {props.achievementSubtitle}
          </div>
          <div>
            <ul>
              {props.allAchievements?.map((achievement) => (
                <li>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderAchievement;
