import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.aboutUs}>
        <Image
          width={470}
          height={400}
          loading="lazy"
          src="/assets/about1.webp"
          className={styles.imageAboutFirst}
          alt="About Image 1"
        />
        <Image
          width={295}
          height={390}
          loading="lazy"
          src="/assets/about2.webp"
          className={styles.imageAboutSecond}
          alt="About Image 2"
        />
        <div className={styles.aboutUsBox}>
          <h2>About Us</h2>
          <h5>
            Hi, my name is Eugene Khomenko, and now I'll tell you a little bit
            about myself.
          </h5>
          <h5>
            After several years spent in frontend development and the experience
            I gained, I started to feel the need to create more than just
            interfaces. Passionate about the world of web development, I wanted
            to give projects the opportunity to unlock the potential of
            companies and make sites not only beautiful, but also strategically
            effective.
          </h5>
          <h5>
            That is how the idea to create my own company - InSite. The name is
            not accidental: it reflects the desire not only to create
            high-quality web products, but also to deeply understand the needs
            of clients, their business and the goals they want to achieve
            online. We utilize modern technology and follow trends to ensure
            that each project is unique, comfortable and durable.
          </h5>
          <h5>
            InSite it is a team of professionals in love with what they do and a
            partner for your business that is committed to growth and a
            successful online presence. Even though so far it consists of only
            one person - me.
          </h5>
        </div>
      </div>
    </section>
  );
}
