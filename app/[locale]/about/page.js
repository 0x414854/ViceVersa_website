import styles from "@/styles/aboutPage.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

import Image1 from "@/public/images/viceversa.jpg";
import Image2 from "@/public/images/mannequin.jpg";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <main className={styles.aboutPageContainer}>
      <Header />
      <HeroNav />
      <section className={styles.introContainer}>
        <h1 className={styles.title}>{t("h1")}</h1>
        <div className={styles.imgContainer}>
          <Image
            src={Image1}
            width={570}
            height={640}
            alt="Robe de marié Vice Versa"
            sizes="(max-width: 480px) 350px, 500px"
            loading="lazy"
            className={styles.img}
          />
          <Image
            src={Image2}
            width={350}
            height={350}
            alt="Robe de marié Vice Versa"
            loading="lazy"
            className={styles.img}
          />
        </div>
        <div className={styles.intro}>
          <h3>{t("h3")}</h3>
          <p>{t("p1")}</p>
          <div className={styles.buttonContainer}>
            {" "}
            <Link href="/shop" className={styles.buttonLink}>
              <button>{t("button")}</button>
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.separator}></div>
      <p className={styles.p}>
        {t("p2")}
        <span>{t("span")}</span>
      </p>
    </main>
  );
}
