import Button from "../UI/Button";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <section id="contact" className={styles.contactUsContainer}>
      <div className={styles.contactUsTitle}>Be Part of the Future</div>
      <div className={styles.contactUsSubtitle}>
        At inSite we utilize the latest technologies and trends to make your
        websites fast, reliable and modern. Your website is not just a
        storefront, but a powerful tool for growth
      </div>
      <div className={styles.contactUsButton}>
        <a
          href="mailto:insite.official.help@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Contact Us</Button>
        </a>
      </div>
    </section>
  );
}
