"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/shopPage.module.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

import Image from "next/image";

import products from "@/data/products.json";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

// Traduction category + filtrage en fonction des langues

export default function ShopPage() {
  const t = useTranslations("ShopPage");
  const tf = useTranslations("ShopPage.filters");
  const locale = useLocale();

  const [activeFilter, setActiveFilter] = useState("all");

  const categoryOrder = [
    "Les courtes",
    "Les longues",
    "Les combinables",
    "Cocooning",
    "Accessoires",
  ];

  const filters = [
    { label: tf("all"), slug: "all" },
    { label: tf("short"), slug: "Les courtes" },
    { label: tf("long"), slug: "Les longues" },
    { label: tf("mix"), slug: "Les combinables" },
    { label: tf("cocooning"), slug: "Cocooning" },
    { label: tf("accessories"), slug: "Accessoires" },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) =>
          Array.isArray(product.categorySlug)
            ? product.categorySlug.includes(activeFilter)
            : product.categorySlug === activeFilter
        );

  // on trie (même quand on filtre, ça ne changera rien si une seule catégorie)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const catA = Array.isArray(a.categorySlug)
      ? a.categorySlug[0]
      : a.categorySlug;
    const catB = Array.isArray(b.categorySlug)
      ? b.categorySlug[0]
      : b.categorySlug;

    return categoryOrder.indexOf(catA) - categoryOrder.indexOf(catB);
  });

  // Variants parent (staggerChildren gère le décalage)
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15, // délai entre chaque produit
      },
    },
    hidden: {},
  };

  // Variants enfants (chaque produit)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <main className={styles.shopPageContainer}>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t("h1")}</h1>

      {/* Version desktop */}
      <ul className={`${styles.filterContainer} ${styles.desktopFilters}`}>
        {filters.map((filter) => (
          <li
            key={filter.slug}
            className={`${styles.filterElement} ${
              activeFilter === filter.slug ? styles.activeFilter : ""
            }`}
            onClick={() => setActiveFilter(filter.slug)}
          >
            {filter.label}
          </li>
        ))}
      </ul>

      {/* Version mobile */}
      <select
        className={`${styles.filterSelect} ${styles.mobileFilters}`}
        value={activeFilter}
        onChange={(e) => setActiveFilter(e.target.value)}
      >
        {filters.map((filter) => (
          <option
            key={filter.slug}
            value={filter.slug}
            className={styles.filterElement}
          >
            {filter.label}
          </option>
        ))}
      </select>
      {/* ➡️ Ton message quand il n'y a aucun produit */}
      {sortedProducts.length === 0 && (
        <div className={styles.noProductsBanner}>
          <div className={styles.noProductsContent}>
            <span>{t("span")}</span>
            <span>{t("span")}</span>
          </div>
        </div>
      )}

      {/* Produits avec stagger */}
      <motion.section
        className={styles.productsContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {sortedProducts.map((product) => {
            const translate = product.translations[locale];
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                exit="exit"
                layout
                className={styles.products}
              >
                <Link href={`/shop/${product.id}`} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={product.images[0]}
                      width={380}
                      height={380}
                      alt={translate.name}
                      className={styles.img}
                    />
                    <div className={styles.overlay}>
                      <h2>{translate.name}</h2>
                      <p className={styles.price}>
                        {product.price} <span>€</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}
