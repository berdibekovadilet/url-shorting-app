import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createShortLink, selectLoading } from "../../store/slice/linkSlice";
import styles from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = ({ Url }) => {
    dispatch(createShortLink(Url));
    reset();
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        tabIndex="0"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        disabled={loading === "loading"}
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
        <button type="submit" disabled={loading === "loading"}>
          Сократить
        </button>
      </form>
    </div>
  );
};

export default Form;
