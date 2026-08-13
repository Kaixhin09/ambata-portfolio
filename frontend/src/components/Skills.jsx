import {
  SiHtml5, SiCss, SiJavascript, SiMysql, SiMongodb, 
  SiGithub, SiFigma, SiGodotengine, SiVite,
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiPython
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const SKILL_GROUPS = {
  "Frontend": [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React.js", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite },
  ],
  "Backend": [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Java", icon: FaJava },
    { name: "C#", icon: TbBrandCSharp },
    { name: "Python", icon: SiPython },
  ],
  "Database": [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
  ],
  "Tools & Other": [
    { name: "VS Code", icon: null },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Godot Engine", icon: SiGodotengine },
  ],
  "Video Editing": [
    { name: "CapCut", icon: null },
    { name: "Alight Motion", icon: null },
    { name: "Adobe After Effects", icon: null },
    { name: "Adobe Premiere Pro", icon: null },
  ],
};

const LANGUAGES = [
  { name: "Filipino", level: "Native" },
  { name: "English", level: "Intermediate" },
];
export default function Skills() {
  return (
    <section id="about" data-reveal className="reveal-section mx-auto max-w-6xl px-6 py-20 scroll-mt-28">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-teal">About</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-paper">
            Toolkit
          </h2>
          <p className="mt-4 max-w-sm text-sm text-muted leading-relaxed">
            A mix of code and craft — web frameworks for the day job, Godot for the side quests,
            and an editing suite for everything that needs a cut and a caption.
          </p>

          <div className="mt-8 flex gap-6 font-mono text-xs text-muted">
            {LANGUAGES.map((lang) => (
              <div key={lang.name}>
                <span className="text-paper">{lang.name}</span>
                <span className="ml-2">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(SKILL_GROUPS).map(([group, items]) => (
            <div
              key={group}
              data-reveal
              className="reveal-section group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-amber/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-amber">
                  {group}
                </h3>
                <span className="font-mono text-[10px] text-muted">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-1 h-px w-8 bg-amber/40 transition-all duration-300 group-hover:w-full" />

              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-ink/40 px-3 py-1.5 font-mono text-[11px] text-paper transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
                  >
                    {item.icon && <item.icon className="text-sm" />}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}