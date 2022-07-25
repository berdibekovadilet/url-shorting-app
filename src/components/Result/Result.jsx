import styles from "./Result.module.scss";

const Result = () => {
  return (
    <div className={styles.container}>
      <h2>Готово</h2>
      <div className={styles.wrapper}>
        <p>https://inlnk.ru/Rj5VwA</p>
        <button>Скопировать</button>
      </div>
    </div>
  );
};

export default Result;
