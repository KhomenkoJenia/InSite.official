import Image from "next/image";
import styles from "./Work.module.css";
import WorkCart from "./WorkCart";
import Button from "@/components/UI/Button";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section className={styles.workContainer}>
        <h2>Our Works</h2>
        <h3>
          This section presents my work - examples of websites and applications
          that I have created for various clients. Each project is an individual
          approach, thoughtful design and optimization for modern requirements.
        </h3>
        <h3>
          Each of the presented sites is created taking into account the needs
          and specifics of the business, whether it is a bright lending site, a
          functional online store or a large-scale corporate portal. The main
          goal is to help your ideas come to life and achieve real results.
        </h3>
        <h3>
          Read examples of my work to see how I turn concepts into successful
          projects.
        </h3>
        <WorkCart />
        <Link className="mt-7 mb-5" href="/templates">
          <Button>View More Work</Button>
        </Link>
      </section>
    </>
  );
}
