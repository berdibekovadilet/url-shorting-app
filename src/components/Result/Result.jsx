import styles from "./Result.module.scss";
import { useSelector } from "react-redux";
import { selectLinks } from "../../store/slice/linkSlice";
import { motion, AnimatePresence } from "framer-motion";

const Result = () => {
  const links = useSelector(selectLinks);
  if (!links?.length) return null;

  return (
    <div className={styles.container}>
      <h2>Готово</h2>
      {links.map((item) => (
        <AnimatePresence key={item.code}>
          <motion.div
            className={styles.item}
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
          >
            <span>{item.original_link}</span>
            <span className={styles.newlink}>{item.full_short_link2}</span>
            <button>Скопировать</button>
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default Result;
