import { useState, useEffect } from 'react'


const ROLES = [
    "Web Developer",
    "Game Developer",
    "Video Editor",
]
export default function Hero() {
    const [RoleIndex, setRoleIndex] = useState(0);
    const [display, setDisplay] = useState("");
    const [phase, setPhase] = useState("typing");

    useEffect(() => {
        const currentRole = ROLES[RoleIndex];
        let timeout;

        if (phase === "typing") {
            if (display.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplay(currentRole.slice(0, display.length + 1));
                }, 150);
            } else {
                timeout = setTimeout(() => {
                    setPhase("pausing");
                }, 1200);
            }
        } else if (phase === "pausing") {
            timeout = setTimeout(() => {
                setPhase("deleting");
            }, 400);
        } else if (phase === "deleting") {
            if (display.length > 0) {
                timeout = setTimeout(() => {
                    setDisplay(currentRole.slice(0, display.length - 1));
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setRoleIndex((RoleIndex + 1) % ROLES.length);
                    setPhase("typing");
                }, 200);
            }
        }
        return () => clearTimeout(timeout);
    }, [RoleIndex, display, phase]);

    return (
        <section id="top" data-reveal className="reveal-section flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center scroll-mt-28">
            <div className="mx-auto max-w-6xl">
                <p className="text-mono text-xs uppercase tracking-[0.3rem] text-teal">
                    Silang, Cavite, Philippines
                </p>
                <h1 className="mt-6 font-display text-5xl font-semibold sm:text-5xl md:text-6xl text-paper leading-[1.05]">
                    Jhay Vic
                    <br />
                    Ambata
                </h1>
                <div className="mt-6 flex items-center h-8 font-mono text-lg sm:text-2xl text-amber">
                    <span>{display}</span>
                    <span className="ml-1 w-2 h-6 sm:h-7 bg-amber animate-pulse inline-block" />
                </div>
                <p className="mt-8 max-w-xl text-base teaxt-muted sm:text-lg leading-relaxed ">
                    A Computer Science graduate who builds things across the stack — from web apps to
                    2D games to edited video.
                </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
                href="#work"
                className="rounded-full bg-amber px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
            >
                See the work
            </a>
            <a
                href="/resume/AMBATA_JHAY VIC_RESUME.pdf"
                download
                className="rounded-full border border-line px-6 py-3 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:border-amber hover:text-amber"
            >
                Download résumé
            </a>
            <a
                href="https://github.com/Kaixhin09"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-6 py-3 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:border-teal hover:text-teal"
            >
                GitHub ↗
            </a>
            </div>

        </section>
    );
}