import styles from "@/styles/content/heroNav.module.css";
import Image from "next/image";
import Header from "@/app/components/header/header";

import { useTranslations } from "next-intl";

export default function HeroNav() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.backgroundImage}></div>
    </section>
  );
}
