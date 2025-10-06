// app/cancel/page.js
"use client";
import styles from "@/styles/cancel.module.css";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

export default function CancelPage() {
  const t = useTranslations("CancelPage");
  return (
    <main>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t("h1")}</h1>

      <section className={styles.section}>
        <p>{t("p")}</p>
        <Link href="/shop">
          <button>{t("button")}</button>
        </Link>
      </section>
    </main>
  );
}
