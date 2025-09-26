"use client";
import styles from "@/styles/popupPage.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

import PopUpJuraImg from "@/public/images/popupJura.jpg";
import BackArrow from "@/public/icons/backArrowWhite.png";

export default function NewsPage() {
  const t = useTranslations("PopUpPage");

  return (
    <main className={styles.popUpPageContainer}>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t("h1")}</h1>
      <motion.div
        className={styles.arrowContainer}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Link href="/news">
          <Image
            src={BackArrow}
            width={50}
            height={50}
            alt="Fleche retour en arriere /news"
          />
        </Link>
      </motion.div>

      <p className={styles.year}>2025</p>
      <section className={styles.popUpSection}>
        <Image
          src={PopUpJuraImg}
          width={500}
          height={700}
          alt="Affiche Pop Up Lons le Saunier - Vice Versa Atelier"
        />
        <ul className={styles.badges}>
          <li className={styles.badge}>Entrée libre</li>
          <li className={styles.badge}>Artisans créateurs</li>
          <li className={styles.badge}>Produits uniques</li>
        </ul>
      </section>
    </main>
  );
}
