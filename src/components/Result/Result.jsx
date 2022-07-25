import styles from "./Result.module.scss";
import { useSelector } from "react-redux";
import { selectLinks } from "../../store/slice/linkSlice";

const Result = () => {
  const links = useSelector(selectLinks);
  if (!links?.length) return null;

  return (
    <div className={styles.container}>
      <h2>Готово</h2>
      {links.map((item) => (
        <div className={styles.wrapper} key={item.code}>
          <span>{item.original_link}</span>
          <span className={styles.newlink}>{item.full_short_link2}</span>
          <button>Скопировать</button>
        </div>
      ))}
    </div>
  );
};

export default Result;
