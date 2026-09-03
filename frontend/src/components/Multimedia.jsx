import { useState, useEffect, useRef } from "react"

const MULTIMEDIA_WORKS = [
  {
    title: "Pickle Ball Edit 01",
    platform: "Facebook",
    description:
      "Elevate your game with the Carbon Fiber Paddle BUILT FOR PEAK PERFORMANCE!!!",
    type: "video",
    thumbnail: "multimedia/thumbnail/01.png",
    previewVideoSrc: "multimedia/video/01.mp4",
    fullVideoSrc: "multimedia/video/01.mp4",
    href: "https://www.facebook.com/share/r/1JHzd5cf46/",
  },
  {
    title: "Pickle Ball Edit 02",
    platform: "Facebook",
    description:
      "Smash, spin, and score with our classic wood pickleball paddle – built for fun, ready for action! 🏓🔥",
    type: "video",
    thumbnail: "multimedia/thumbnail/02.png",
    previewVideoSrc: "multimedia/video/02.mp4",
    fullVideoSrc: "multimedia/video/02.mp4",
    href: "https://www.facebook.com/share/v/1GruNFucew/",
  },
  {
    title: "Rizal Poetry School Activity",
    platform: "Activity",
    description:
      "A glimpse of the Rizal Poetry School Activity, where creativity and expression come alive through the power of words.",
    type: "video",
    thumbnail: "multimedia/thumbnail/03.png",
    previewVideoSrc: null,
    fullVideoSrc: null,
    href: "https://drive.google.com/drive/folders/1yCI9PZgxH-53YlDGp9H3mgpZ0ZF0GsXD?usp=sharing",
  },
  {
    title: "Bilyaran Hightlight Reel 01",
    platform: "Tiktok",
    description:
      "KAIN TAYO SA GABBY’S! Tambayan Food Spot in Bulacan",
    type: "video",
    thumbnail: "multimedia/thumbnail/04.png",
    previewVideoSrc: "multimedia/video/04.mp4",
    fullVideoSrc: "multimedia/video/04.mp4",
    href: "https://www.tiktok.com/@teambilyaran/video/7538404025453104392",
  },
{
    title: "Bilyaran Hightlight Reel 02",
    platform: "Tiktok",
    description:
      "On cue to the next bilyaran... ",
    type: "video",
    thumbnail: "multimedia/thumbnail/05.png",
    previewVideoSrc: null,
    fullVideoSrc: null,
    href: "https://www.tiktok.com/@teambilyaran/video/7531046070353235208",
  },
  {
    title: "Bilyaran Hightlight Reel 03",
    platform: "Tiktok",
    description:
      "Mula BGC hanggang Call Shot (Sport Bar & Lounge), tuloy-tuloy ang kasayahan!",
    type: "video",
    thumbnail: "multimedia/thumbnail/06.png",
    previewVideoSrc: "multimedia/video/06.mp4",
    fullVideoSrc: "multimedia/video/06.mp4",
    href: "https://www.tiktok.com/@teambilyaran/video/7538404025453104392",
  },
  {
    title: "24/7 365 - Kaguya-sama: Love is War (AMV/EDIT) After Effects",
    platform: "Youtube",
    description:
      "A mesmerizing animation video created with After Effects, showcasing the beautiful world of Kaguya-sama: Love is War.",
    type: "video",
    thumbnail: "multimedia/thumbnail/07.png",
    previewVideoSrc: "multimedia/video/07.mp4",
    fullVideoSrc: "multimedia/video/07.mp4",
    href: "https://www.youtube.com/watch?v=ZlKKix47wOI",
  },
  {
   title: "Palayo sa Mundo ft. Fragrant Flower (Kaoruko Waguri) // AMV",
    platform: "Youtube",
    description:
      "A captivating AMV (Anime Music Video) featuring the song 'Palayo sa Mundo' ft. Kaoruko Waguri, blending stunning visuals with the emotional depth of the music.",
    type: "video",
    thumbnail: "multimedia/thumbnail/08.png",
    previewVideoSrc: "multimedia/video/08.mp4",
    fullVideoSrc: "multimedia/video/08.mp4",
    href: "https://www.youtube.com/watch?v=xMA2gBeEYw8",
  },
  {
   title: "saturn - sza // Yuki Suou | AMV",
    platform: "Youtube",
    description:
      "A captivating AMV (Anime Music Video) featuring the song 'saturn - sza' ft. Yuki Suou, blending stunning visuals with the emotional depth of the music.",
    type: "video",
    thumbnail: "multimedia/thumbnail/09.png",
    previewVideoSrc: "multimedia/video/09.mp4",
    fullVideoSrc: "multimedia/video/09.mp4",
    href: "https://www.youtube.com/watch?v=nKLzegylivM",
  },
    {
   title: "Billiard Tournament Poster Design",
    platform: "",
    description:
      "A visually striking poster design for a billiard tournament, capturing the excitement and competitive spirit of the event.",
    type: "image",
    thumbnail: "multimedia/image/01.jfif",
    previewImageSrc: "multimedia/image/01.jfif",
    fullImageSrc: "multimedia/image/01.jfif",
    href: "",
  },
  {
    title: "Sunsilk Ad",
    platform: "",
    description:
      "A creative advertisement for Sunsilk, highlighting the brand's hair care products and their benefits.",
    type: "video",
    thumbnail: "multimedia/thumbnail/10.png",
    previewVideoSrc: "multimedia/video/10.mp4",
    fullVideoSrc: "multimedia/video/10.mp4",
    href: "",
  },
  {
    title: "Old Spice Ad",
    platform: "",
    description:
      "A creative advertisement for Old Spice, showcasing the brand's unique style and appeal.",
    type: "video",
    thumbnail: "multimedia/thumbnail/11.png",
    previewVideoSrc: "multimedia/video/11.mp4",
    fullVideoSrc: "multimedia/video/11.mp4",
    href: "",
  },


]



export default function Multimedia() {
  const [selectedWork, setSelectedWork] = useState(null)
  const modalRef = useRef(null)

  const openFullscreen = (work) => {
    if ((work.type === "video" && work.fullVideoSrc) || (work.type === "image" && work.thumbnail)) {
      setSelectedWork(work) 
    }
  }

  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = "hidden"
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }, 0)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedWork])

  return (
    <section id="multimedia" data-reveal className="reveal-section mx-auto max-w-6xl px-6 py-20 scroll-mt-28">
      <p className="font-mono text-xs uppercase tracking-widest text-teal">Multimedia works</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-paper sm:text-4xl">
        Edits and visual posts
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        A curated collection of multimedia work, from video edits to photo posts.
        Each card can link directly to a specific Facebook, TikTok, or YouTube post.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MULTIMEDIA_WORKS.map((work) => (
          <article
            key={work.title}
            data-reveal
            className="reveal-section overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-amber/50"
          >
            {work.thumbnail ? (
              <img
                src={work.thumbnail}
                alt={work.title}
                className="h-48 w-full object-cover"
              />
            ) : work.type === "video" && work.previewVideoSrc ? (
              <video
                src={work.previewVideoSrc}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="h-48 w-full object-cover"
              />
            ) : work.type === "video" ? (
              <div className="flex h-48 w-full items-center justify-center border-b border-line bg-linear-to-br from-ink via-surface to-ink px-6 text-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal">
                    Video edit
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Upload your video file in the public folder, then open it fullscreen from here.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex h-48 w-full items-center justify-center border-b border-line bg-linear-to-br from-ink via-surface to-ink px-6 text-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal">
                    Media placeholder
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Add your thumbnail, still image, or video preview here.
                  </p>
                </div>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-paper">{work.title}</h3>
                <span className="rounded-full bg-amber/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber">
                  {work.platform}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">{work.description}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={work.href || undefined}
                  target={work.href ? "_blank" : undefined}
                  rel={work.href ? "noreferrer" : undefined}
                  aria-disabled={!work.href}
                  className={`inline-flex items-center rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                    work.href
                      ? "border-line text-paper hover:border-amber hover:text-amber"
                      : "cursor-not-allowed border-line/50 text-muted"
                  }`}
                >
                  View post
                </a>

                {(work.type === "video" || work.type === "image") && (
                  <button
                    type="button"
                    onClick={() => openFullscreen(work)}
                    disabled={work.type === "video" ? !work.fullVideoSrc : !work.thumbnail}
                    className={`inline-flex items-center rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                      (work.type === "video" && work.fullVideoSrc) || (work.type === "image" && work.thumbnail)
                        ? "border-teal/60 text-teal hover:border-teal hover:text-paper"
                        : "cursor-not-allowed border-line/50 text-muted"
                    }`}
                  >
                    View full screen
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedWork && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedWork(null)}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-line bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-line bg-ink/80 px-3 py-1 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:border-amber hover:text-amber"
            >
              Close
            </button>

            {selectedWork.type === "video" ? (
              <video
                src={selectedWork.fullVideoSrc}
                controls
                autoPlay
                playsInline
                className="h-[85vh] w-full object-contain"
              />
            ) : (
              <img
                src={selectedWork.thumbnail}
                alt={selectedWork.title}
                className="h-[85vh] w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}