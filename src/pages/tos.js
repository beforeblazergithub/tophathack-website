import Head from "next/head";

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Terms of Service | TopHatHack</title>
            </Head>

            <main className="container legal">
                <h1>Terms of Service</h1>
                <p>Effective Date: October 2025</p>

                <p>
                    Welcome to <strong>TopHatHack</strong> (“we,” “us,” “our”). These Terms
                    govern your use of the website (<a href="https://tophathack.com">tophathack.com</a>)
                    and the TopHatHack Chrome extension (together, the “Services”).
                    By using the Services, you agree to these Terms.
                </p>

                <section>
                    <h2>1) Eligibility</h2>
                    <p>You must be at least 13. If you’re a minor, use the Services only with parental/guardian consent.</p>
                </section>

                <section>
                    <h2>2) Acceptable Use</h2>
                    <ul>
                        <li>Use the Services only for lawful purposes.</li>
                        <li>Don’t copy, modify, reverse-engineer, or interfere with the Services.</li>
                        <li>We may suspend or terminate access for violations.</li>
                    </ul>
                </section>

                <section>
                    <h2>3) Payments</h2>
                    <p>
                        Payments are processed by <strong>Stripe</strong>. We don’t store full card numbers.
                        By purchasing (monthly or lifetime), you authorize charges to your payment method.
                    </p>
                </section>

                <section>
                    <h2>4) Refunds</h2>
                    <p>
                        All purchases are <strong>final</strong> unless required by law. We may, at our sole discretion,
                        issue refunds as a courtesy in limited cases. Email
                        {" "}
                        <a href="mailto:support@tophathack.com">support@tophathack.com</a>.
                    </p>
                </section>

                <section>
                    <h2>5) Intellectual Property</h2>
                    <p>
                        The Services, including code, design, and content, are owned by TopHatHack.
                        Don’t reproduce or distribute without written permission.
                    </p>
                </section>

                <section>
                    <h2>6) Disclaimer & Liability</h2>
                    <p>
                        The Services are provided “as is.” To the fullest extent allowed by law, we disclaim
                        warranties and aren’t liable for indirect, incidental, or consequential damages.
                    </p>
                </section>

                <section>
                    <h2>7) Changes to Terms</h2>
                    <p>
                        We may update these Terms. We’ll post a new effective date above.
                        Continued use means you accept the updated Terms.
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