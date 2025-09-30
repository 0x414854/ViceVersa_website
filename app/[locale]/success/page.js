// app/success/page.js
"use client";

import { Link } from "@/i18n/navigation";

export default function SuccessPage() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Paiement réussi 🎉</h1>
      <p>Merci pour votre commande !</p>
      <Link href="/shop">
        <button style={{ marginTop: "1rem" }}>Retour à la boutique</button>
      </Link>
    </main>
  );
}
