export default function Home() {
    return (
        <main className="container">
            <h1 className="header"><img src="icon.png" alt="" />TopHatHack</h1>
            <p className="lead">
                Cheat on exams undetected, and turn invisible on all TopHat tests.
            </p>

            <section className="card">
                <h2>Get the extension</h2>
                <p>Install from the Chrome Web Store: <a href="https://chromewebstore.google.com/detail/tophat-hack/lhdilfhbhbljpaeabchcdohldpebfpch" target="_blank" rel="noreferrer">TopHat Hack</a></p>
            </section>
            
            <section className="card">
                <h2>Resources</h2>
                <p>Demo video: <a href="https://www.youtube.com/@tophathack" target="_blank" rel="noreferrer">YouTube</a>,<br/>Manage account: <a href="https://api.tophathack/manage" target="_blank" rel="noreferrer">Portal</a>,<br/>Purchase: <a href="https://api.tophathack/purchase/monthly" target="_blank" rel="noreferrer">Monthly</a> | <a href="https://api.tophathack/purchase/one-time" target="_blank" rel="noreferrer">Lifetime</a>,<br/>Contact support: <a href="https://discord.gg/v8JHJAYnJC" target="_blank" rel="noreferrer">Discord</a></p>
            </section>

            <section className="card">
                <h2>Legal</h2>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/tos">Terms of Service</a></li>
                </ul>
            </section>

            <footer className="footer">
                © {new Date().getFullYear()} TopHatHack. All rights reserved.
            </footer>
        </main>
    );
}