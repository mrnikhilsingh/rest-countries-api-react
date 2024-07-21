import styles from "./CountryDetailsShimmerStyles.module.css";

const CountryDetailsShimmer = () => {
  return (
    <div className={styles.shimmerCard}>
      <div className={[styles.shimmerBG, styles.media].join(" ")}></div>
      <div className={styles["p-32"]}>
        <div className={[styles.shimmerBG, styles['title-line']].join(" ")}></div>

        <div className={[styles.shimmerBG, styles['content-line']].join(" ")}></div>
        <div className={[styles.shimmerBG, styles['content-line']].join(" ")}></div>
        <div className={[styles.shimmerBG, styles['content-line']].join(" ")}></div>
        <div className={[styles.shimmerBG, styles['content-line']].join(" ")}></div>
        <div className={[styles.shimmerBG, styles['content-line'], styles.last].join(" ")}></div>
      </div>
    </div>
  );
};

export default CountryDetailsShimmer;
