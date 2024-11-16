import Image from "next/image";
import styles from "./WorkCart.module.css";
import work1 from "/public/assets/work1.png";
import work2 from "/public/assets/work2.png";
import work3 from "/public/assets/work3.png";
import work4 from "/public/assets/work4.png";
import Link from "next/link";

export default function WorkCart() {
  return (
    <div className={styles.cards}>
      <div className={`${styles.card} ${styles.red}`}>
        <Link href="https://major-lab-five.vercel.app">
          <h3 className={styles.tip}>MajorLab</h3>
          <Image
            className={styles.cartImg}
            src={work1}
            width={440}
            height={350}
            alt="work"
          />
        </Link>
      </div>

      <div className={`${styles.card} `}>
        <Link href="https://khomenkojenia.github.io/Pancake-Bar/">
          <h3 className={styles.tip}>Pancake-Bar</h3>
          <Image
            className={styles.cartImg}
            src={work2}
            width={440}
            height={350}
            alt="work"
          />
        </Link>
      </div>
      <div className={`${styles.card} `}>
        <Link href="https://dec-volt.vercel.app">
          <h3 className={styles.tip}>DecVolt</h3>
          <Image
            className={styles.cartImg}
            src={work3}
            width={440}
            height={350}
            alt="work"
          />
        </Link>
      </div>
      <div className={`${styles.card} `}>
        <Link href="http://fungameofficial.wuaze.com/">
          <h3 className={styles.tip}>FunGame</h3>
          <Image
            className={styles.cartImg}
            src={work4}
            width={440}
            height={350}
            alt="work"
          />
        </Link>
      </div>
    </div>
  );
}
