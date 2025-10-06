"use client";
import styles from "@/styles/cartPage.module.css";
import { useCart } from "@/context/cartContext";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

export default function CartPage() {
  const t = useTranslations("CartPage");
  const { cart, removeFromCart, updateCartItemQty } = useCart();
  const locale = useLocale();

  // ✅ total général du panier
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, locale }),
    });
    const data = await res.json();
    window.location.href = data.url; // redirection Stripe
  };

  if (cart.length === 0)
    return (
      <main className={styles.EmptyCartContainer}>
        <Header />
        <HeroNav />
        <h1 className={styles.title}>{t("h1")}</h1>
        <p className={styles.emptyCart}>{t("pEmpty")}</p>
      </main>
    );

  return (
    <main className={styles.cartContainer}>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t("h1")}</h1>
      {/* <h1>Votre panier</h1> */}
      <div className={styles.container}>
        <ul className={styles.items}>
          {cart.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link
                href={`/shop/${item.id}`} // ← ou l’URL réelle de ton produit
                className={styles.itemLink}
              >
                <img
                  src={item.images[0]}
                  alt={item.translations[locale].name}
                  className={styles.itemImage}
                />

                <div className={styles.infosContainer}>
                  <div className={styles.infos}>
                    <div className={styles.name}>
                      <p>{item.translations[locale].name}</p>
                      {item.translations[locale].size && (
                        <> - {item.translations[locale].size}</>
                      )}
                    </div>

                    <div className={styles.qtyContainer}>
                      <button
                        className={styles.qtyButton}
                        onClick={(e) => {
                          e.preventDefault(); // empêche le clic d’ouvrir la page
                          updateCartItemQty(item.id, Math.max(1, item.qty - 1));
                        }}
                        aria-label="Réduire la quantité"
                      >
                        −
                      </button>
                      <span className={styles.qtyValue}>{item.qty}</span>
                      <button
                        className={styles.qtyButton}
                        onClick={(e) => {
                          e.preventDefault();
                          updateCartItemQty(item.id, item.qty + 1);
                        }}
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                      <div>
                        {" × "}
                        {(item.price / 100).toFixed(2)} € ={" "}
                        <strong>
                          {((item.price * item.qty) / 100).toFixed(2)} €
                        </strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault(); // évite la redirection
                      removeFromCart(item.id);
                    }}
                    className={styles.removeArticle}
                  >
                    Retirer
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* ✅ total général */}
        <div className={styles.totalContainer}>
          <h2>Total : {(total / 100).toFixed(2)} €</h2>

          <button onClick={checkout}>Payer</button>
        </div>
      </div>
    </main>
  );
}
