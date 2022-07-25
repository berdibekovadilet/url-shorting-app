import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className={styles.container}>
      <h1>Сервис сокращения ссылок</h1>
      <p>
        С помощью нашего сервиса вы сможете бесплатно сделать короткую ссылку
      </p>
    </div>
  );
};

export default Title;
