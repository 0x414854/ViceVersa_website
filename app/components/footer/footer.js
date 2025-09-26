import styles from "@/styles/footer/footer.module.css";

// import { Link } from "@/i18n/navigation";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import FooterImg from "@/public/images/footer.jpeg";
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import Arrow from "@/public/icons/arrowFooter.png";
import ArtisantArt from "@/public/logo/artisanArt.png";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className={styles.footer}>
      <section className={styles.infosContainer}>
        <div className={styles.infos}>
          <h4>Atelier Vice Versa</h4>
          <p className={styles.flag}>
            <Image
              src={Arrow}
              width={10}
              height={10}
              alt="Fleche footer - Vice Versa Atelier"
            />
            Divonne les Bains
          </p>
        </div>
        <div className={styles.flags}>
          <p className={styles.flag}>
            <Image
              src={Arrow}
              width={10}
              height={10}
              alt="Fleche footer - Vice Versa Atelier"
            />
            Suisse
          </p>
          <p className={styles.flag}>
            <Image
              src={Arrow}
              width={10}
              height={10}
              alt="Fleche footer - Vice Versa Atelier"
            />
            Italie
          </p>
        </div>
        <Image
          src={ArtisantArt}
          width={80}
          height={80}
          alt="Logo Artisant d'Art - Vice Versa Atelier"
          className={styles.logoArtisan}
        />
      </section>
      <div className={styles.separator}></div>
      <section className={styles.socialContainer}>
        <Image
          src={FooterImg}
          width={260}
          height={260}
          alt="Image Vice Versa"
        />
        <ul className={styles.social}>
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
      </section>
      <div className={styles.separator}></div>

      <section className={styles.legalContainer}>
        <Link href="/legal-notices">{t("legalNotice")}</Link>
        <Link href="/privacy-policy">{t("privacyPolicy")}</Link>
        <Link href="/cgv">{t("cgv")}</Link>
        <Link href="mailto:contact@viceversa-atelier.com">
          contact@viceversa-atelier.com
        </Link>
      </section>
    </footer>
  );
}
