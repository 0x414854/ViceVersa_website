import "./globals.css";
import { Cormorant, DM_Sans } from "next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CartProvider } from "@/context/cartContext";

import Footer from "../components/footer/footer";

const cormorant = Cormorant({
  subsets: ["latin"], // ou ['latin-ext'] si besoin
  weight: ["400", "500", "600", "700"], // choisis tes graisses
  variable: "--font-cormorant", // optionnel pour l'utiliser en CSS
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Vice Versa Atelier - Vice Versa",
  description:
    "Maison de couture artisanale de luxespécialisée dans la création de robes de mariée, robes de soirée, kimonos et accessoires de luxe faits main en France.",
  icons: [{ url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }],
  keywords: [
    "Maison de couture",
    "Couture artisanale",
    "Robes de mariée sur mesure",
    "Robes de soirée sur mesure",
    "Kimonos de luxe",
    "Accessoires de mariage",
    "Créations haute couture",
    "Couturière artisanale",
    "Atelier de couture luxe",
    "Couture fait main",
    "Robes uniques",
    "Robes de cérémonie",
    "Robes de mariée artisanales",
    "Robes de mariée luxe",
    "Couture française",
    "Mode artisanale",
    "Couture sur mesure",
    "Accessoires faits main",
    "Vice Versa Atelier",
    "Créations personnalisées",
  ],
  authors: [{ name: "Vice Versa Atelier – Isabelle BRENIAUX" }],
  openGraph: {
    title: "Vice Versa Atelier - Vice Versa",
    description:
      "Maison de couture de luxe : robes de mariée, soirée, kimonos et accessoires faits main en France.",
    url: "https://viceversa-atelier.com",
    siteName: "Vice Versa Atelier - Vice Versa",
    images: [
      {
        url: "/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Aperçu portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vice Versa Atelier - Vice Versa",
    description:
      "Maison de couture de luxe : robes de mariée, soirée, kimonos et accessoires faits main en France.",
    images: ["/ogImage.png"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={dmSans.className}>
        {/* On enveloppe tout dans NextIntl + CartProvider */}
        <NextIntlClientProvider>
          <CartProvider>
            {children}
            <Footer />
            {/* Analytics Vercel */}
            <Analytics />
            <SpeedInsights />
            {/* <p style={{ textAlign: "center", color: "#555" }}>
              Made with love by{" "}
              <Link href="https://www.arthurbarraud.me">
                Arthur Barraud
              </Link>{" "}
            </p> */}
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
