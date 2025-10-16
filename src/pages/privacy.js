import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TopHatHack</title>
      </Head>

    <main className="container legal">
      <h1>Privacy Policy</h1>
      <p>Effective Date: October 2025</p>

      <p>
        This Privacy Policy (“Policy”) explains how <strong>TopHatHack</strong>
        (“we,” “us,” “our”) collects, uses, and protects information when you use
        the TopHatHack website (<a href="https://tophathack.com">tophathack.com</a>)
        and the TopHatHack Chrome extension (together, the “Services”).
        By using the Services, you agree to this Policy.
      </p>

      <section>
        <h2>1) Information We Collect</h2>
        <ul>
          <li><strong>Account:</strong> Email and subscription plan details.</li>
          <li><strong>Payments:</strong> Processed by <strong>Stripe</strong>.
              We don’t store full card numbers.</li>
          <li><strong>Usage:</strong> Aggregated, anonymized metrics to improve performance and reliability.</li>
          <li><strong>Technical:</strong> Device/browser info, IP address, extension version for support & security.</li>
        </ul>
      </section>

      <section>
        <h2>2) How We Use Data</h2>
        <ul>
          <li>Provide, maintain, and improve the Services.</li>
          <li>Manage subscriptions and payments.</li>
          <li>Communicate updates and support.</li>
          <li>Detect, prevent, and address abuse or security issues.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>3) Sharing</h2>
        <p>We don’t sell or rent your personal data. We may share with:</p>
        <ul>
          <li><strong>Service Providers:</strong> e.g., Stripe (payments), email providers, analytics.</li>
          <li><strong>Legal:</strong> To meet lawful requests or protect rights and safety.</li>
          <li><strong>Business Changes:</strong> If we undergo a merger, acquisition, or asset transfer.</li>
        </ul>
      </section>

      <section>
        <h2>4) Retention</h2>
        <p>
          We keep data only as long as needed for the purposes above or as required by law,
          then delete or anonymize it.
        </p>
      </section>

      <section>
        <h2>5) Your Rights</h2>
        <p>You may be able to:</p>
        <ul>
          <li>Access a copy of your data.</li>
          <li>Request correction or deletion.</li>
          <li>Withdraw consent (where applicable).</li>
          <li>Request data portability.</li>
        </ul>
        <p>
          Contact: <a href="mailto:support@tophathack.com">support@tophathack.com</a>
        </p>
      </section>

      <section>
        <h2>6) Children</h2>
        <p>TopHatHack isn’t directed to children under 13, and we don’t knowingly collect their data.</p>
      </section>

      <section>
        <h2>7) Changes</h2>
        <p>
          We may update this Policy. We’ll post the new effective date above.
          Continued use means you accept the changes.
        </p>
      </section>

      <section>
        <h2>8) Contact</h2>
        <p>
          Questions? <a href="mailto:support@tophathack.com">support@tophathack.com</a>
        </p>
      </section>
    </main>
  </>
  );
}