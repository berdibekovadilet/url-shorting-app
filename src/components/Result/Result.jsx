import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLinks } from "../../store/slice/linkSlice";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Result.module.scss";

const Result = () => {
  const [copiedLinks, setCopiedLink] = useState(null);
  const links = useSelector(selectLinks);

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  if (!links?.length) return null;

  return (
    <div className={styles.container}>
      <h2>Готово</h2>
      {links.map((item) => (
        <AnimatePresence key={item.code}>
          <motion.div
            className={styles.item}
            data-active={copiedLinks === item.full_short_link2}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <span>{item.original_link}</span>
            <span className={styles.newlink}>{item.full_short_link2}</span>
            <button onClick={() => copyToClipboard(item.full_short_link2)}>
              {copiedLinks === item.full_short_link2
                ? "Скопировано!"
                : "Скопировать"}
            </button>
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default Result;
