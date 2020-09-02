import styles from "../../styles/FounderDisplay.module.css";

let ACCUMULATOR = null;

const FounderDisplay = (props) => {
  return (
    <div className={styles.founderscontainer}>
      <div className={styles.founderpartnertitle}>FOUNDING PARTNERS</div>
      <div className={styles.allfounder}>
        {props.founders
          .map((founders) => (
            <div className={styles.foundercontainer}>
              <div className={styles.foundername}>{founders.name}</div>
              <div className={styles.foundertitlecontainer}>
                <div>{founders.title1}</div>
                <div>{founders.title2}</div>
                <div>{founders.title3}</div>
              </div>
            </div>
          ))
          .reduce(
            (acc, nextVal) =>
              acc === null ? (
                nextVal
              ) : (
                <>
                  {acc} <div className={styles.verticalline}></div> {nextVal}
                </>
              ),
            ACCUMULATOR
          )}
      </div>
    </div>
  );
};

export default FounderDisplay;
