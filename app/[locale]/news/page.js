"use client";
import styles from "@/styles/newsPage.module.css";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

gsap.registerPlugin(Flip);

export default function NewsPage() {
  const t = useTranslations("NewsPage");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // côté client uniquement
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile(); // check au montage
    window.addEventListener("resize", checkMobile); // met à jour au resize

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const columns = gsap.utils.toArray(`.${styles.column}`);

    columns.forEach((c) => {
      const content = c.querySelector(`.${styles.content}`);
      if (!content) return;

      if (isMobile) {
        // Mobile : animation au click
        content.addEventListener("click", () => {
          const tl = gsap.timeline();

          tl.to(content, {
            scale: 0.97,
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)", // glow léger
            duration: 0.1,
            ease: "power1.inOut",
          }).to(content, {
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.1,
            ease: "power1.inOut",
          });

          // Flip pour activer/désactiver la classe active
          const state = Flip.getState(columns);
          c.classList.toggle(styles.active);
          Flip.from(state, { duration: 1, absolute: true, ease: "power2.out" });
        });
      } else {
        // Desktop : hover
        content.addEventListener("mouseenter", () => {
          const state = Flip.getState(columns);
          c.classList.add(styles.active);
          Flip.from(state, {
            duration: 1,
            absolute: true,
            ease: "power1.inOut",
          });
        });

        content.addEventListener("mouseleave", () => {
          const state = Flip.getState(columns);
          c.classList.remove(styles.active);
          Flip.from(state, {
            duration: 1,
            absolute: true,
            ease: "power1.inOut",
          });
        });
      }
    });

    // Cleanup : retire les listeners au démontage
    return () => {
      columns.forEach((c) => {
        const content = c.querySelector(`.${styles.content}`);
        if (!content) return;
        content.replaceWith(content.cloneNode(true)); // supprime tous les listeners
      });
    };
  }, [isMobile]);

  return (
    <main className={styles.shopPageContainer}>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t("h1")}</h1>
      {/* GSAP */}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Link href="/news/popup">
                <div
                  className={`${styles.content} ${isMobile ? styles.contentMobile : ""}`}
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
