import { useState } from "react";
import Modal from "./ProjectsModal";

const PROJECTS = [
    {
    title: "Narralytics",
    tag: "Team Project",
    stack: ["MERN Stack", "Python", "NLTK"],
    description:
      "A full-stack web app that mines OJT learning journals for task patterns and checks how well they line up with the program's academic competencies.",
    thumbnail: "/projects/Narralytics/01.png",
    images: [
      "/projects/Narralytics/01.png",
      "/projects/Narralytics/02.png",
      "/projects/Narralytics/03.png",
      "/projects/Narralytics/04.png",
      "/projects/Narralytics/05.png",
      "/projects/Narralytics/06.png",
    ],
    },
    {
    title: "BlazeWalk",
    tag: "Game",
    stack: ["Godot Engine", "GDScript"],
    description:
      "A 2D platformer with multi-level progression — clear every enemy on a level and it spawns the key that unlocks the door to the next one.",
    thumbnail: "/projects/BlazeWalk/01.png",
    images: [
      "/projects/BlazeWalk/01.png",
      "/projects/BlazeWalk/02.png",
      "/projects/BlazeWalk/03.png",
    ]
  },
  {
    title: "Tagaytay Memorial Park",
    tag: "Team Project",
    stack: ["C#", ".NET"],
    description:
      "Records management software that keeps track of individuals interred at Tagaytay Memorial Park.",
  },
  {
    title: "Task Tracker",
    tag: "Solo Project",
    stack: ["Vite", "React"],
    description:
      "Create tasks, sort them into categories, and filter the list — everything persists in local storage.",
    thumbnail: "/projects/Task Tracker/01.png",
    images: [
      "/projects/Task Tracker/01.png",
      "/projects/Task Tracker/02.png",
    ]
  },
  {
    title: "Game Backlog Tracker",
    tag: "Solo Project",
    stack: ["Vite", "MERN Stack"],
    description:
      "A web app that lets you keep track of the games you own, the ones you want to play, and the ones you've completed.",
    thumbnail: "/projects/Game Backlog/01.png",
    images: [
      "/projects/Game Backlog/01.png",
      "/projects/Game Backlog/02.png",
      "/projects/Game Backlog/03.png",
      "/projects/Game Backlog/04.png",
    ]
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" data-reveal className="reveal-section mx-auto max-w-6xl px-6 py-20 scroll-mt-28">
      <p className="font-mono text-xs uppercase tracking-widest text-teal">Selected work</p>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-paper">
        Stage select
      </h2>

      <div className="mt-10 grid sm:grid-cols-2 gap-5">
        {PROJECTS.map((project, i) => {
          const hasImages = project.images && project.images.length > 0;

          return (
            <article
              key={project.title}
              onClick={hasImages ? () => setSelectedProject(project) : undefined}
              data-reveal
              className={`reveal-section rounded-2xl border border-line bg-surface p-6 transition-colors ${
                hasImages ? "cursor-pointer hover:border-amber/60" : ""
              }`}
            >
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="mb-4 w-full h-40 object-cover rounded-xl border border-line"
                />
              )}

              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  Stage {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-amber/15 text-amber px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                  {project.tag}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold text-paper">{project.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-paper">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}