// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>TopHatHack — Turn invisible on all TopHat tests</title>
        <meta name="description" content="Cheat on exams undetected, and turn invisible on all TopHat tests." />
      </Head>

      <main className="container">
        <h1 className="header">
          <Image src="/icon.png" alt="" width={52} height={52} priority />
          TopHatHack
        </h1>

        <p className="lead">
          Cheat on exams undetected, and turn invisible on all TopHat tests.
        </p>

        <section className="card">
          <h2>Get the extension</h2>
          <p>
            Install from the Chrome Web Store:{" "}
            <a
              href="https://chromewebstore.google.com/detail/tophat-hack/lhdilfhbhbljpaeabchcdohldpebfpch"
              target="_blank"
              rel="noreferrer noopener"
            >
              TopHat Hack
            </a>
          </p>
        </section>

        <section className="card">
          <h2>Resources</h2>
          <p>
            Demo video:{" "}
            <a href="https://www.youtube.com/@tophathack" target="_blank" rel="noreferrer noopener">
              YouTube
            </a>
            ,<br />
            Manage account:{" "}
            <a href="https://api.tophathack.com/manage" target="_blank" rel="noreferrer noopener">
              Portal
            </a>
            ,<br />
            Purchase:{" "}
            <a href="https://api.tophathack.com/purchase/monthly" target="_blank" rel="noreferrer noopener">
              Monthly
            </a>{" "}
            |{" "}
            <a href="https://api.tophathack.com/purchase/one-time" target="_blank" rel="noreferrer noopener">
              Lifetime
            </a>
            ,<br />
            Contact support:{" "}
            <a href="https://discord.gg/v8JHJAYnJC" target="_blank" rel="noreferrer noopener">
              Discord
            </a>
          </p>
        </section>

        <section className="card">
          <h2>Legal</h2>
          <ul>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/tos">Terms of Service</Link>
            </li>
          </ul>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} TopHatHack. All rights reserved.
        </footer>
      </main>
    </>
  );
}
