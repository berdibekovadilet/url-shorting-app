import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.input} tabindex="0">
        <input type="text" placeholder="Введите ссылку для сокращения" />
        <button>Сократить</button>
      </div>
    </div>
  );
};

export default Form;
