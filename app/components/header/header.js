"use client";

import styles from "@/styles/header/header.module.css";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useCart } from "@/context/cartContext";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import LogoWhite from "@/public/logo/viceversaWhite.png";
import LogoBlack from "@/public/logo/viceversaBlack.png";
import CartIconBlack from "@/public/icons/26.png";
import CartIconWhite from "@/public/icons/27.png";
import MenuIcon from "@/public/icons/menu_black.svg";
import MenuIconWhite from "@/public/icons/menu_white.svg";
import CrossIconWhite from "@/public/icons/cross_white.svg";

import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";

export default function Header() {
  const t = useTranslations("Navbar");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { cart } = useCart();

  // Total d'articles dans le panier
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  function toggleMenu() {
    if (menuOpen) {
      // on ferme : déclenche l'animation inverse
      setAnimateOut(true);
      setTimeout(() => {
        setMenuOpen(false);
        setAnimateOut(false);
      }, 400); // durée de ton animation inverse
    } else {
      setMenuOpen(true);
    }
  }

  function handleLocaleChange(e) {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbarContainer} ${
        scrolled ? styles.navScrolled : ""
      }`}
    >
      {/* Logo */}
      <div className={styles.navLeft}>
        <Link href="/">
          <Image
            src={scrolled ? LogoBlack : LogoWhite}
            width={230}
            height={50}
            alt="ViceVersa Atelier Logo"
            sizes="(max-width: 480px) 120px, 230px"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navContainer}>
          {["/", "/shop", "/about", "/news", "/contact"].map((href, i) => (
            <li key={i} className={styles.navElement}>
              <Link
                href={href}
                className={styles.navbarlink}
                aria-current={pathname === href ? "page" : undefined}
              >
                {t(["home", "shop", "about", "news", "contact"][i])}
              </Link>
            </li>
          ))}

          <li className={styles.langDropdown}>
            <label htmlFor="langSelect" className={styles.visuallyHidden}>
              Langue
            </label>

            <select
              id="langSelect"
              className={styles.langSelect}
              onChange={handleLocaleChange}
              value={locale}
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="it">Italiano</option>
            </select>
          </li>

          <li>
            <Link href="/cart" className={styles.cartLink}>
              <Image
                src={scrolled ? CartIconBlack : CartIconWhite}
                width={24}
                height={24}
                alt="Panier"
              />
              {totalItems > 0 && (
                <span className={styles.cartBadge}>{totalItems}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile icons */}
      <div className={styles.mobileIcons}>
        <button onClick={toggleMenu}>
          <Image
            src={
              menuOpen ? CrossIconWhite : scrolled ? MenuIcon : MenuIconWhite
            }
            width={30}
            height={30}
            alt="Menu"
            className={styles.menuIcon}
          />
        </button>
        <Link href="/cart">
          <Image
            src={scrolled ? CartIconBlack : CartIconWhite}
            width={24}
            height={24}
            alt="Panier"
          />
          {totalItems > 0 && (
            <span className={styles.cartBadgeMobile}>{totalItems}</span>
          )}
        </Link>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}>
          <div
            className={`${styles.mobileNav} ${
              animateOut ? styles.slideUp : styles.slideDown
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.overlayHeader}>
              <Link href="/">
                <Image src={LogoBlack} width={200} height={50} alt="Logo" />
              </Link>
              {/* <button onClick={toggleMenu}>
                <Image
                  src={CrossIconWhite}
                  width={30}
                  height={30}
                  alt="Close"
                />
              </button> */}
            </div>
            <ul className={styles.mobileNavContainer}>
              {["/", "/shop", "/about", "/news", "/contact"].map((href, i) => (
                <li key={i} className={styles.navElement}>
                  <Link
                    href={href}
                    onClick={toggleMenu}
                    aria-selected={pathname === href ? "true" : "false"}
                  >
                    {t(["home", "shop", "about", "news", "contact"][i])}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.menuSeparator}></div>
            <ul className={styles.langSelectMobile}>
              {[
                { code: "fr", label: "Français" },
                { code: "en", label: "English" },
                { code: "it", label: "Italiano" },
              ].map((lang) => (
                <li
                  key={lang.code}
                  className={locale === lang.code ? styles.active : ""}
                  onClick={() => {
                    router.replace(pathname, { locale: lang.code }); // change la langue
                  }}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
            <div className={styles.menuSeparator}></div>
            <ul className={styles.socialContainer}>
              <li className={styles.socialMedia}>
                <Link
                  href="https://www.facebook.com/atelierviceversa/"
                  target="_blank"
                >
                  <Image
                    src={FacebookIcon}
                    width={30}
                    height={30}
                    alt="Vice Versa Facebook Icon"
                  />
                </Link>
              </li>
              <li className={styles.socialMedia}>
                <Link
                  href="https://www.instagram.com/atelierviceversa/"
                  target="_blank"
                >
                  <Image
                    src={InstagramIcon}
                    width={30}
                    height={30}
                    alt="Vice Versa Instagram Icon"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
