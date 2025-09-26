"use client";
import styles from "@/styles/content/hero.module.css";
import Image from "next/image";
import Header from "@/app/components/header/header";

import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className={styles.heroContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("h1")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.separator}
        ></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("h2")}
        </motion.h2>
      </div>
    </section>
  );
}
