// app/cancel/page.js
"use client";

import Link from "next-intl/link";

export default function CancelPage() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Paiement annulé 😔</h1>
      <p>Vous pouvez réessayer votre commande ou revenir à la boutique.</p>
      <Link href="/shop">
        <button style={{ marginTop: "1rem" }}>Retour à la boutique</button>
      </Link>
    </main>
  );
}
