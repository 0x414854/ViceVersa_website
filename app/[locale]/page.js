import styles from "@/styles/page.module.css";
import { useTranslations } from "next-intl";
import Header from "../components/header/header";
import Hero from "../components/content/hero";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import Image1 from "@/public/images/intro.jpg";
import Image2 from "@/public/images/dress.jpeg";

// SI client Suisse ajouter en CHF les prix ? comment faire ?

export default function HomePage() {
  const t = useTranslations("Homepage");
  return (
    <main>
      <Header />
      <Hero />
      <section className={styles.introContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={Image1}
            width={500}
            height={750}
            alt="Robe de marié Vice Versa"
            className={styles.img}
          />
          {/* <Image
            src={Image2}
            width={400}
            height={400}
            alt="Robe de marié Vice Versa"
            className={styles.img}
          /> */}
        </div>
        <div className={styles.intro}>
          <h3>{t("h3")}</h3>
          <div className={styles.pContainer}>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
          <div className={styles.buttonContainer}>
            {" "}
            <Link href="/about" className={styles.buttonLink}>
              <button>{t("button")}</button>
            </Link>
          </div>
        </div>
      </section>
      {/* <h1>{t("title")}</h1>
      <p>{t("content")}</p> */}
    </main>
  );
}
