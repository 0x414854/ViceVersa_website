"use client";
import styles from "@/styles/collaborationPage.module.css";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

import BackArrow from "@/public/icons/backArrowWhite.png";
import CollabImg1 from "@/public/images/collab1.jpg";
import CollabImg2 from "@/public/images/collab1-2.jpg";
import CollabImg from "@/public/images/collab.jpg";

export default function CollaborationPage() {
  const t = useTranslations("CollaborationPage");

  const collaborations = [
    {
      id: 1,
      name: "Collaboration Textile & Céramique",
      year: 2019,
      images: [CollabImg],
    },
    {
      id: 2,
      name: "Collaboration Textile & Cuir",
      year: 2025,
      images: [CollabImg1, CollabImg2],
    },
  ];

  // Grouper par année et trier du plus récent au plus vieux
  const collaborationsByYear = collaborations.reduce((acc, collab) => {
    if (!acc[collab.year]) acc[collab.year] = [];
    acc[collab.year].push(collab);
    return acc;
  }, {});

  const sortedYears = Object.keys(collaborationsByYear)
    .map(Number)
    .sort((a, b) => b - a); // du plus récent au plus vieux

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
      {/* Affichage par année */}
      {sortedYears.map((year, yearIndex) => (
        <div
          key={year}
          className={styles.mainContainer}
          data-yearindex={yearIndex}
        >
          <p className={styles.year}>{year}</p>
          <section className={styles.collaborationSection}>
            {collaborationsByYear[year].map((collab, collabIndex) => (
              <div
                key={collab.id}
                className={styles.collabItem}
                data-collabindex={collabIndex}
              >
                <h2 className={styles.collabName}>{collab.name}</h2>
                <div>
                  {collab.images.map((img, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={img}
                      width={500}
                      height={700}
                      alt={`Image ${imgIndex + 1} de ${collab.name}`}
                      className={styles.collabImage}
                      data-imgindex={imgIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      ))}
    </main>
  );
}
