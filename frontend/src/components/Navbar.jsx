
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#top" className="font-display text-sm font-bold text-paper">
                    JVA<span className="text-amber">.</span>
                </a>
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jval0914@gmail.com"
                className="rounded-full border border-line/60 px-4 py-1.5 font-mono text-xs uppercase text-paper hover:bg-amber/10 hover:text-amber hover:border-amber/50 transition-colors"
                >
                    Say Hi
                </a>
            </nav>
        </header>
    )
}