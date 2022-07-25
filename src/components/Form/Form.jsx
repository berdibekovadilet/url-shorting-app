import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    // reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        tabIndex="0"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="url"
          placeholder="Введите ссылку для сокращения"
          {...register("Url", {
            required: "Пожалуйста введите ссылку",
            pattern: {
              value:
                /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
              message: "Неправильная ссылка",
            },
          })}
        />
        {errors.Url && <div className={styles.error}>{errors.Url.message}</div>}
        <button type="submit">Сократить</button>
      </form>
    </div>
  );
};

export default Form;
