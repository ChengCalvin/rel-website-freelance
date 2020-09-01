import styles from "../../styles/FounderDisplay.module.css";

let ACCUMULATOR = null;

const FounderDisplay = (props) => {
  return (
    <div className={styles.foundercontainer}>
      <div>FOUNDING PARTNER</div>
      <div className={styles.allfounder}>
        {props.founders
          .map((founders) => <div>{founders.name}</div>)
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
