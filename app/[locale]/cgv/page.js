import styles from "@/styles/cgv.module.css";
import Link from "next/link";

import Header from "@/app/components/header/header";
import HeroNav from "@/app/components/content/heroNav";

export default function CGV() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <HeroNav />
      <h1 className={styles.title}>CGV</h1>
      <section className={styles.sectionsContainer}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Définition des parties</h2>
          <p className={styles.sectionText}>
            Entre la Société MADAME ISABELLE BRENIAUX (VICE VERSA),
            <br /> 81 RUE DE VIGNY , 01120, DIVONNE-LES-BAINS
            <br /> immatriculée au Registre du Commerce et des Sociétés de
            DIVONNE-LES-BAINS,
            <br /> sous le numéro SIRET 515317022,
            <br /> représentée par ISABELLE BRENIAUX en qualité de GERANTE,
            <br /> dûment habilité aux fins des présentes.
            <br /> La société peut être jointe par email en cliquant sur le
            formulaire de contact accessible via la page de contact du site.
            <br />
            Ci-après le « Vendeur » ou la « Société ».
            <br /> D’une part,
            <br /> Et la personne physique ou morale procédant à l’achat de
            produits ou services de la société,
            <br /> Ci-après, « l’Acheteur », ou « le Client »<br /> D’autre
            part,
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Préambule</h2>
          <p className={styles.sectionText}>
            Le Vendeur est éditeur de produits et de services de commercialisés
            par l’intermédiaire de son site Internet{" "}
            <strong>(https://viceversa-atelier.com)</strong>. La liste et le
            descriptif des biens et services proposés par la Société peuvent
            être consultés sur le site susmentionné ainsi que ses pages de
            vente.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Article 1 – objet</h2>
          <p className={styles.sectionText}>
            Les présentes Conditions Générales de Vente (CGV) déterminent les
            droits et obligations des parties dans le cadre de la vente en ligne
            de Produits et de Services proposés par le Vendeur.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Article 2 – Dispositions générales
          </h2>
          <p className={styles.sectionText}>
            Les présentes Conditions Générales de Vente (CGV) s’appliquent à
            toutes les ventes de Produits, ou Services effectuées au travers du
            site Internet de la Société et sont partie intégrante du Contrat
            entre l’Acheteur et le Vendeur. Le Vendeur se réserve la possibilité
            de modifier les présentes, à tout moment par la publication d’une
            nouvelle version sur son site Internet. Les CGV applicables alors
            sont celles étant en vigueur à la date du paiement (ou du premier
            paiement en cas de paiements multiples) de la commande. Ces CGV sont
            consultables sur le site Internet de la Société à l’adresse suivante
            : <strong>https://viceversa-atelier.com/cgv</strong> .
          </p>
          <p className={styles.sectionText}>
            La Société s’assure également que leur acceptation soit claire et
            sans réserve au moment de l’achat. Le Client déclare avoir pris
            connaissance de l’ensemble des présentes Conditions Générales de
            Vente, et le cas échéant des Conditions Particulières de Vente liées
            à un produit ou à un service, et les accepter sans restriction ni
            réserve.
          </p>
          <p className={styles.sectionText}>
            Le Client reconnaît qu’il a bénéficié des conseils et informations
            nécessaires afin de s’assurer de l’adéquation de l’offre à ses
            besoins. Le Client déclare être en mesure de contracter légalement
            en vertu des lois françaises ou valablement représenter la personne
            physique ou morale pour laquelle il s’engage. Sauf preuve contraire
            les informations enregistrées par la Société constituent la preuve
            de l’ensemble des transactions.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Article 3 – Prix</h2>
          <p className={styles.sectionText}>
            Les prix des produits vendus au travers des sites Internet sont
            indiqués en Euros hors taxes et précisément déterminés sur les pages
            de descriptifs des Produits. Ils sont également indiqués en euros
            toutes taxes comprises (TVA + autres taxes éventuelles) sur la page
            de commande des produits, et hors frais spécifiques d’expédition.
          </p>
          <p className={styles.sectionText}>
            Pour tous les produits expédiés hors Union européenne et/ou DOM-TOM,
            le prix est calculé hors taxes automatiquement sur la facture. Des
            droits de douane ou autres taxes locales ou droits d’importation ou
            taxes d’état sont susceptibles d’être exigibles dans certains cas.
            Ces droits et sommes ne relèvent pas du ressort du Vendeur. Ils
            seront à la charge de l’acheteur et relèvent de sa responsabilité
            (déclarations, paiement aux autorités compétentes, etc.).
          </p>
          <p className={styles.sectionText}>
            Le Vendeur invite à ce titre l’acheteur à se renseigner sur ces
            aspects auprès des autorités locales correspondantes.La Société se
            réserve la possibilité de modifier ses prix à tout moment pour
            l’avenir. Les frais de télécommunication nécessaires à l’accès aux
            sites Internet de la Société sont à la charge du Client. Le cas
            échéant également, les frais de livraison.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Article 4 – Conclusion du contrat en ligne
          </h2>
          <div className={styles.sectionText}>
            <p>
              Le Client devra suivre une série d’étapes spécifiques à chaque
              Produit ou Service offert à la vente par le Vendeur pour pouvoir
              réaliser sa commande. Toutefois, les étapes décrites ci-après sont
              systématiques :
            </p>
            <ul>
              <li>
                Information sur les caractéristiques essentielles du Produit
              </li>
              <li>
                Choix du Produit, le cas échéant de ses options et indication
                des données essentielles du Client (identification, adresse…)
              </li>
              <li>Acceptation des présentes Conditions Générales de Vente.</li>
              <li>
                Vérification des éléments de la commande et, le cas échéant,
                correction des erreurs.
              </li>
              <li>
                Suivi des instructions pour le paiement, et paiement des
                produits.
              </li>
              <li>Livraison des produits.</li>
            </ul>
          </div>
          <p className={styles.sectionText}>
            Le Client recevra alors confirmation par courrier électronique du
            paiement de la commande, ainsi qu’un accusé de réception de la
            commande la confirmant. Il recevra un exemplaire .pdf des présentes
            conditions générales de vente.
          </p>
          <p className={styles.sectionText}>
            Pour les produits livrés, cette livraison se fera à l’adresse
            indiquée par le Client. Aux fins de bonne réalisation de la
            commande, le Client s’engage à fournir ses éléments d’identification
            véridiques.
          </p>
          <p className={styles.sectionText}>
            Le Vendeur se réserve la possibilité de refuser la commande, par
            exemple pour toute demande anormale, réalisée de mauvaise foi ou
            pour tout motif légitime.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5 – Produits et services</h2>
          <p className={styles.sectionText}>
            Les caractéristiques essentielles des biens, des services et leurs
            prix respectifs sont mis à disposition de l’acheteur sur les sites
            Internet de la société. Le client atteste avoir reçu un détail des
            frais de livraison ainsi que les modalités de paiement, de livraison
            et d’exécution du contrat. Le Vendeur s’engage à honorer la commande
            du Client dans la limite des stocks disponibles uniquement. A
            défaut, le Vendeur en informe le Client. Ces informations
            contractuelles sont présentées en détail et en langue française.
          </p>
          <p className={styles.sectionText}>
            Conformément à la loi française, elles font l’objet d’un
            récapitulatif et d’une confirmation lors de la validation de la
            commande. Les parties conviennent que les illustrations ou photos
            des produits offerts à la vente n’ont pas de valeur contractuelle.
            La durée de validité de l’offre des Produits ainsi que leurs prix
            est précisée sur les pages de ventes des produits, ainsi que la
            durée minimale des contrats proposés lorsque ceux-ci portent sur une
            fourniture continue ou périodique de produits ou services. Sauf
            conditions particulières, les droits concédés au titre des présentes
            le sont uniquement à la personne physique signataire de la commande
            (ou la personne titulaire de l’adresse email communiqué).
          </p>
          <p className={styles.sectionText}>
            Conformément aux dispositions légales en matière de conformité et de
            vices cachés, le Vendeur rembourse ou échange les produits
            défectueux ou ne correspondant pas à la commande. Le remboursement
            peut être demandé en contactant le Vendeur par email ou lettre
            simple.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Article 6 – Clause de reserve de propriété
          </h2>
          <p className={styles.sectionText}>
            Les produits demeurent la propriété de la Société jusqu’au complet
            paiement du prix.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Article 7 – Modalités de livraison
          </h2>
          <p className={styles.sectionText}>
            Les produits sont livrés à l’adresse de livraison qui a été indiquée
            lors de la commande et le délai indiqué. Ce délai ne prend pas en
            compte le délai de préparation de la commande. Lorsque le Client
            commande plusieurs produits en même temps ceux-ci peuvent avoir des
            délais de livraison différents acheminés selon des modalités
            différentes.
          </p>
          <p className={styles.sectionText}>
            Le Vendeur met à disposition un point de contact téléphonique (coût
            d’une communication locale à partir d’un poste fixe) indiqué dans
            l’email de confirmation de commande afin d’assurer le suivi de la
            commande.{" "}
          </p>
          <p className={styles.sectionText}>
            Le Vendeur rappelle qu’au moment où le Client prend possession
            physiquement des produits, les risques de perte ou d’endommagement
            des produits lui est transféré.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Article 8 – Disponibilité et présentation
          </h2>
          <p className={styles.sectionText}>
            Les commandes seront traitées dans la limite de nos stocks
            disponibles ou sous réserve des stocks disponibles chez nos
            fournisseurs.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Article 9 – Paiement</h2>
          <p className={styles.sectionText}>
            Le paiement est exigible immédiatement à la commande, y compris pour
            les produits en précommande. Le Client peut effectuer le règlement
            par carte de paiement ou chèque bancaire. Le paiement sécurisé en
            ligne par carte bancaire est réalisé par notre prestataire de
            paiement. Les informations transmises sont chiffrées dans les règles
            de l’art et ne peuvent être lues au cours du transport sur le
            réseau. Une fois le paiement réalisé par le Client, la transaction
            est immédiatement débitée après vérification des informations.
          </p>
          <p className={styles.sectionText}>
            Conformément aux dispositions du Code monétaire et financier,
            l’engagement de payer donné par carte est irrévocable. En
            communiquant ses informations bancaires lors de la vente, le Client
            autorise le Vendeur à débiter sa carte du montant relatif au prix
            indiqué. Le Client confirme qu’il est bien le titulaire légal de la
            carte à débiter et qu’il est légalement en droit d’en faire usage.
            En cas d’erreur, ou d’impossibilité de débiter la carte, la Vente
            est immédiatement résolue de plein droit et la commande annulée.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Article 10 – Délai de rétractation
          </h2>
          <p className={styles.sectionText}>
            Conformément aux articles{" "}
            <Link
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226842/"
              className={styles.link}
              target="_blank"
            >
              L.221-18 et suivants du Code de la consommation
            </Link>
            , le consommateur dispose d’un délai de quatorze (14) jours
            calendaires pour exercer son droit de rétractation sur les achats
            effectués à distance ou hors établissement, sans avoir à justifier
            de motifs ni à payer de pénalités, à l’exception, le cas échéant,
            des frais de retour. Le délai court à compter de la réception des
            biens ou de l’acceptation de l’offre pour les prestations de
            services.
          </p>
          <p className={styles.sectionText}>
            Le droit de rétractation peut être exercé en contactant la Société
            par email ou téléphone. En cas d’exercice du droit de rétractation
            dans le délai susmentionné, seront remboursés uniquement le prix du
            ou des produits et les frais de livraison initiaux, les frais de
            retour restent à la charge du Client.
          </p>
          <p className={styles.sectionText}>
            Les produits doivent être retournés dans leur état d’origine et
            complets (emballage, accessoires, notice…) de sorte qu'ils puissent
            être recommercialisés à l’état neuf, accompagnés si possible d’une
            copie du justificatif d’achat.
          </p>
          <p className={styles.sectionText}>
            Exceptions : Conformément à{" "}
            <Link
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563170"
              className={styles.link}
              target="_blank"
            >
              l’article L.221-28 du Code de la consommation
            </Link>
            , le droit de rétractation ne s’applique pas aux produits
            personnalisés, confectionnés sur-mesure ou pièces uniques (par
            exemple : robes de mariée, créations uniques ou articles
            personnalisés). Ces produits ne peuvent donc pas faire l’objet d’un
            retour ou remboursement.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Article 11 – Garanties</h2>
          <div className={styles.sectionText}>
            <p>
              Conformément à la loi, le Vendeur assume deux garanties : de
              conformité et relative aux vices cachés des produits. Le Vendeur
              rembourse l’acheteur ou échange les produits apparemment
              défectueux ou ne correspondant pas à la commande effectuée. La
              demande de remboursement doit s’effectuer en contactant le Veneur
              par email ou par lettre simple.
            </p>
            <p>Le Vendeur rappelle que le consommateur :</p>
            <ul>
              <li>
                dispose d’un délai de 3 mois à compter de la délivrance du bien
                pour agir auprès du Vendeur
              </li>
              <li>
                qu’il peut choisir entre le remplacement et la réparation du
                bien sous réserve des conditions prévues par les dispositions
                susmentionnées. apparemment défectueux ou ne correspondant
              </li>
              <li>
                qu’il est dispensé d’apporter la preuve l’existence du défaut de
                conformité du bien durant les six mois suivant la délivrance du
                bien.
              </li>
              <li>
                que, sauf biens d’occasion, ce délai sera porté à 24 mois à
                compter du 18 mars 2016
              </li>
              <li>
                que le consommateur peut également faire valoir la garantie
                contre les vices cachés de la chose vendue au sens de{" "}
                <Link
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006441924"
                  className={styles.link}
                  target="_blank"
                >
                  l’article 1641 du code civil
                </Link>
              </li>
            </ul>
            <p>
              et, dans cette hypothèse, il peut choisir entre la résolution de
              la vente ou une réduction du prix de vente (dispositions des{" "}
              <Link
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030254091"
                className={styles.link}
                target="_blank"
              >
                articles 1644 du Code Civil
              </Link>
              ).
            </p>
          </div>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Article 12 – Réclamations</h2>
          <p className={styles.sectionText}>
            Le cas échéant, l’Acheteur peut présenter toute réclamation en
            contactant la société par email ou par lettre simple.
          </p>
        </section>

        <div className={styles.separator}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Article 13 – Droits de propriété intellectuelle
          </h2>
          <div className={styles.sectionText}>
            <p>
              Tous les éléments présents sur ce site, y compris mais sans s’y
              limiter :
            </p>
            <ul>
              <li>Marques</li>
              <li>Noms de domaine</li>
              <li>Produits</li>
              <li>Logiciels</li>
              <li>Images</li>
              <li>Vidéos</li>
              <li>Textes</li>
            </ul>
            <p>
              sont la propriété exclusive du Vendeur et protégés par les lois
              relatives à la propriété intellectuelle.
            </p>
            <p>
              Aucune cession de droits n’est effectuée dans le cadre des
              présentes CGV.
            </p>
            <p>Il est strictement interdit :</p>
            <ul>
              <li>
                de reproduire, copier ou stocker ces éléments, totalement ou
                partiellement,
              </li>
              <li>de modifier, adapter ou transformer ces éléments,</li>
              <li>
                de les utiliser pour un usage commercial ou personnel sans
                autorisation expresse.
              </li>
            </ul>
            <p>
              Toute violation des droits de propriété intellectuelle pourra
              entraîner des poursuites conformément à la loi.
            </p>
          </div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Article 14 – Force majeur</h2>
            <p className={styles.sectionText}>
              L’exécution des obligations du vendeur au terme des présentes est
              suspendue en cas de survenance d’un cas fortuit ou de force
              majeure qui en empêcherait l’exécution. Le vendeur avisera le
              client de la survenance d’un tel évènement dès que possible.
            </p>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Article 15 – Nullité et modification du contrat
            </h2>
            <p className={styles.sectionText}>
              Si l’une des stipulations du présent contrat était annulée, cette
              nullité n’entraînerait pas la nullité des autres stipulations qui
              demeureront en vigueur entre les parties.
            </p>
            <p className={styles.sectionText}>
              Toute modification contractuelle n’est valable qu’après un accord
              écrit et signé des parties.
            </p>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Article 16 – RGPD et protection des données personnelles
            </h2>
            <div className={styles.sectionText}>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) , vous disposez des droits suivants concernant vos
                données personnelles :
              </p>
              <ul>
                <li>Droit d’interrogation et d’accès à vos données</li>
                <li>Droit de modification et de rectification</li>
                <li>Droit d’opposition au traitement de vos données</li>
                <li>
                  Droit de suppression, dans les limites prévues par la loi
                </li>
              </ul>
              <p>
                En acceptant ces conditions générales de vente, vous consentez à
                ce que vos données personnelles soient collectées et utilisées
                uniquement pour l’exécution du présent contrat et la gestion de
                votre commande.
              </p>
              <p>
                Vos données ne seront ni vendues ni communiquées à des tiers à
                des fins commerciales sans votre consentement explicite.
              </p>
              <p>
                Pour exercer vos droits ou pour toute question relative à vos
                données personnelles, vous pouvez nous contacter directement par
                email ou par courrier.
              </p>
            </div>
          </section>

          <div className={styles.separator}></div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Article 17 – Droit applicable
            </h2>
            <p className={styles.sectionText}>
              Toutes les clauses figurant dans les présentes conditions
              générales de vente, ainsi que toutes les opérations d’achat et de
              vente qui y sont visées, seront soumises au droit français.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
