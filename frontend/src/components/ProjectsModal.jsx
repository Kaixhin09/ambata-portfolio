import { useEffect, useState, useRef } from "react";

export default function Modal({ project, onClose }) {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                if (modalRef.current) {
                    modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 0);
        }else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [project]);

    useEffect(() => {
        setLightboxIndex(null);
    }, [project]);

    useEffect(() => {
        function handleKey(e) {
            if (lightboxIndex !== null) {
                if (e.key === "ArrowRight") {
                    setLightboxIndex((lightboxIndex + 1) % project.images.length);
                }
                if (e.key === "ArrowLeft") {
                    setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length);
                }
                if (e.key === "Escape") {
                    setLightboxIndex(null);
                }
            } else {
                if (e.key === "Escape") {
                    onClose();
                }
            }
        }

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxIndex, project?.images?.length, onClose]);

    if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border border-line bg-surface p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-semibold text-paper">{project.title}</h3>
          <button
            onClick={onClose}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted hover:text-amber hover:border-amber transition-colors"
          >
            Close
          </button>
        </div>

        <p className="mt-2 text-sm text-muted">{project.description}</p>

        {project.images && project.images.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                onClick={() => setLightboxIndex(i)}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full rounded-xl border border-line object-cover"
              />
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
            className="fixed inset-0 z-110 bg-ink/90 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
        >
          <div className="fixed inset-0 z-110 flex items-center justify-center p-6" onClick={(e) => e.stopPropagation()}>
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="absolute top-6 right-6 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted hover:text-amber hover:border-amber transition-colors"
            >   
            Close
            </button>
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length);
                }}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted hover:text-amber hover:border-amber transition-colors"
            >
            ‹    
            </button>
            <img
                src={project.images[lightboxIndex]}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                className="max-h-[80vh] rounded-xl border border-line object-contain cursor-pointer"
                onClick={() => setLightboxIndex(null)}
            />
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % project.images.length);
                }}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted hover:text-amber hover:border-amber transition-colors"
            >
            ›
            </button>
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                className="absolute bottom-6 right-6 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted hover:text-amber hover:border-amber transition-colors"
            >   
            Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 