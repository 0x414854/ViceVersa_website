"use client";
import styles from "@/styles/newsPage.module.css";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

gsap.registerPlugin(Flip);

export default function NewsPage() {
  const t = useTranslations("NewsPage");

  useEffect(() => {
    const columns = gsap.utils.toArray(`.${styles.column}`);
    columns.forEach((c) => {
      const content = c.querySelector(`.${styles.content}`);
      content.addEventListener("mouseenter", () => {
        const state = Flip.getState(columns);
        c.classList.add(styles.active); // ajoute la classe du module CSS
        Flip.from(state, { duration: 1, absolute: true });
      });
      content.addEventListener("mouseleave", () => {
        const state = Flip.getState(columns);
        c.classList.remove(styles.active);
        Flip.from(state, { duration: 1, absolute: true });
      });
    });
  }, []);

  return (
    <main className={styles.shopPageContainer}>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t("h1")}</h1>
      {/* GSAP */}
      <div className={`${styles.wrapper} ${styles.center}`}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Link href="/news/popup">
                <div
                  className={styles.content}
                  style={{ backgroundImage: "url('/images/popup.png')" }}
                >
                  {/* <div className={styles.overlay}>
                    <h2>Pop Up</h2>
                  </div> */}
                </div>
              </Link>
            </div>
            <div className={styles.column}>
              <Link href="/news/collaboration">
                <div
                  className={styles.content}
                  style={{
                    backgroundImage: "url('/images/collab.png')",
                  }}
                >
                  {/* <div className={styles.overlay}>
                    <h2>Collaboration</h2>
                  </div> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
