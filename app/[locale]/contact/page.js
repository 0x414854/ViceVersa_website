"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/contactPage.module.css";
import { useTranslations } from "next-intl";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message envoyé avec succès !");
        setFormData({
          lastName: "",
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error(result.error);
        setStatus("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Une erreur est survenue, veuillez réessayer.");
    }
  };
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <main className={styles.contactPageContainer}>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>{t("h1")}</h1>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.nameContainer}>
          <input
            type="text"
            name="lastName"
            placeholder={t("lastName")}
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder={t("firstName")}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder={t("phone")}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder={t("message")}
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">{t("send")}</button>
        {status && <p className={styles.status}>{status}</p>}
      </form>
    </main>
  );
}
