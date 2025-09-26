"use client";
import styles from "@/styles/collaborationPage.module.css";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

import BackArrow from "@/public/icons/backArrowWhite.png";

export default function CollaborationPage() {
  const t = useTranslations("CollaborationPage");

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
    </main>
  );
}
