"use client";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import products from "@/data/products.json";
import { useLocale, useTranslations } from "next-intl";
import { useCart } from "@/context/cartContext"; //Ajouter au panier

import styles from "@/styles/pageId.module.css";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

export default function ProductPage() {
  const tr = useTranslations("ShopID");
  const params = useParams();
  const { id } = params;
  const locale = useLocale();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return notFound();

  const t = product.translations[locale];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [quantity, setQuantity] = useState(1);

  // Gestion carousel
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  // Gestion quantité
  const increase = () => setQty(qty + 1);
  const decrease = () => setQty(qty > 1 ? qty - 1 : 1);

  // Ajouter au panier
  const handleAddToCart = () => {
    console.log(`Ajouter ${quantity} ${t.name} au panier`);
  };
  const handleClick = () => {
    handleAddToCart(); // ta logique actuelle
    addToCart(product, qty); // ajout au panier
  };

  return (
    <main>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t.name}</h1>

      <div className={styles.productContainer}>
        {/* ---------------- IMAGE + MINIATURES ---------------- */}
        <div className={styles.imageContainer}>
          {product.images.length > 1 && (
            <>
              <button
                className={styles.arrowLeft}
                onClick={handlePrev}
                aria-label="Image précédente"
              >
                ◀
              </button>
              <button
                className={styles.arrowRight}
                onClick={handleNext}
                aria-label="Image suivante"
              >
                ▶
              </button>
            </>
          )}

          <Image
            src={product.images[currentIndex]}
            width={500}
            height={600}
            alt={t.name}
            className={styles.productImage}
            onClick={() => setIsModalOpen(true)}
          />

          {product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={80}
                  height={80}
                  alt=""
                  className={`${styles.thumb} ${
                    i === currentIndex ? styles.activeThumb : ""
                  }`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ---------------- INFOS PRODUIT ---------------- */}
        <div
          className={`${styles.infoContainer} ${
            product.images.length > 1 ? styles.withThumbnails : ""
          }`}
        >
          <h2>{t.name}</h2>
          <p className={styles.description}>{t.description}</p>
          <p className={styles.material}>
            <strong>Matière :</strong> {t.material}
          </p>
          <p className={styles.size}>
            <strong>Taille :</strong> {t.size}
          </p>
          <p className={styles.color}>
            <strong>Couleur :</strong> {t.color}
          </p>
          {product.uniquePiece && (
            <p className={styles.uniquePiece}>{tr("uniquePiece")}</p>
          )}
          {product.available && (
            <p className={styles.orderMessage}>{t.orderMessage}</p>
          )}
          <p className={styles.price}>{product.price} €</p>

          <div className={styles.buttonContainer}>
            <div className={styles.quantityWrapper}>
              <button className={styles.quantityBtn} onClick={decrease}>
                −
              </button>
              <input
                type="number"
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value) || 1))
                }
                className={styles.quantityInput}
              />
              <button className={styles.quantityBtn} onClick={increase}>
                +
              </button>
            </div>
            <button onClick={handleClick} className={styles.addToCartButton}>
              {tr("button")}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MODAL PLEIN ÉCRAN ---------------- */}
      {isModalOpen && (
        <div className={styles.overlay} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.overlayArrowLeft} onClick={handlePrev}>
              ◀
            </button>

            <Image
              src={product.images[currentIndex]}
              alt={t.name}
              width={600}
              height={700}
              className={styles.modalImage}
            />

            <button className={styles.overlayArrowRight} onClick={handleNext}>
              ▶
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
