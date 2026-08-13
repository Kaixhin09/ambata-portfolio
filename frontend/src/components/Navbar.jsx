
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
                <a href="#top" className="font-display text-sm font-bold text-paper">
                    JVA<span className="text-amber">.</span>
                </a>
                <div className="hidden items-center gap-2 md:flex">
                    <a href="#top" className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-all hover:-translate-y-0.5 hover:text-paper">
                        Home
                    </a>
                    <a href="#work" className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-all hover:-translate-y-0.5 hover:text-paper">
                        Work
                    </a>
                    <a href="#multimedia" className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-all hover:-translate-y-0.5 hover:text-paper">
                        Multimedia
                    </a>
                    <a href="#about" className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-all hover:-translate-y-0.5 hover:text-paper">
                        About
                    </a>
                    <a href="#contact" className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-all hover:-translate-y-0.5 hover:text-paper">
                        Contact
                    </a>
                </div>
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