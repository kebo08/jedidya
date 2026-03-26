import { useEffect } from 'react'
import siteContent from './siteContent'
import './App.css'

const galleryLayouts = [
  { speed: 0.08, span: 'gallery-card--wide', shift: '2vh' },
  { speed: -0.06, span: 'gallery-card--tall', shift: '0vh' },
  { speed: 0.1, span: 'gallery-card--medium', shift: '5vh' },
  { speed: -0.04, span: 'gallery-card--medium', shift: '2vh' },
  { speed: 0.05, span: 'gallery-card--wide', shift: '6vh' },
  { speed: -0.08, span: 'gallery-card--compact', shift: '1vh' },
  { speed: 0.07, span: 'gallery-card--compact', shift: '4vh' },
  { speed: -0.05, span: 'gallery-card--tall', shift: '2vh' },
]

function App() {
  const {
    navigation,
    hero,
    stats,
    featuredWorks,
    galleryEntries,
    about,
    contact,
  } = siteContent
  const cameraPrints = [
    featuredWorks[0],
    featuredWorks[2],
    galleryEntries[2],
  ]

  useEffect(() => {
    const root = document.documentElement
    const parallaxItems = Array.from(
      document.querySelectorAll('[data-parallax]'),
    )
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'))

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    revealItems.forEach((item) => revealObserver.observe(item))

    let animationFrame = 0

    const updateScene = () => {
      animationFrame = 0

      const viewportHeight = window.innerHeight
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - viewportHeight,
        1,
      )
      const scrollProgress = window.scrollY / maxScroll

      root.style.setProperty('--scroll-progress', scrollProgress.toFixed(4))

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const speed = Number(item.dataset.parallax ?? 0)
        const drift =
          (viewportHeight * 0.5 - (rect.top + rect.height * 0.5)) * speed

        item.style.setProperty('--parallax-offset', `${drift.toFixed(2)}px`)
      })
    }

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScene)
      }
    }

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    requestUpdate()

    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className="page-shell">
      <header className="site-header glass-shell" data-reveal>
        <a className="site-brand" href="#home">
          Jedidiah
        </a>
        <nav aria-label="Primary" className="site-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="site-email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </header>

      <div aria-hidden="true" className="scroll-meter">
        <span className="scroll-meter__fill" />
      </div>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-stage">
            <div className="hero-backdrop">
              <div className="hero-backdrop__wash" data-parallax="0.03" />
              <figure
                className="parallax-layer hero-card hero-card--landscape"
                data-parallax="0.08"
              >
                <img alt={hero.image.alt} src={hero.image.src} />
              </figure>
              <figure
                className="parallax-layer hero-card hero-card--forest"
                data-parallax="-0.06"
              >
                <img
                  alt={featuredWorks[0].image.alt}
                  src={featuredWorks[0].image.src}
                />
              </figure>
              <figure
                className="parallax-layer hero-card hero-card--portrait"
                data-parallax="0.12"
              >
                <img
                  alt={featuredWorks[2].image.alt}
                  src={featuredWorks[2].image.src}
                />
              </figure>
              <div
                className="parallax-layer floating-note glass-shell"
                data-parallax="0.16"
              >
                <span className="floating-note__label">Visual Narratives</span>
                <p>Light is the ink, shadow is the narrative.</p>
              </div>
            </div>

            <div className="hero-copy" data-reveal>
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1>{hero.title}</h1>
              <p className="hero-copy__body">{hero.body}</p>
              <div className="hero-copy__actions">
                <a className="button button--primary" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </a>
                <a
                  className="button button--ghost"
                  href={hero.secondaryCta.href}
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
              <div className="hero-copy__quote proof-card" data-reveal>
                <span className="proof-card__meta">
                  frame 01 / dawn lake / editorial study
                </span>
                <p>
                  "In every walk with nature, one receives far more than he
                  seeks."
                </p>
                <span>John Muir</span>
              </div>
            </div>
          </div>

          <div className="stats-band glass-shell" data-reveal>
            {stats.map((stat) => (
              <div key={stat.label} className="stat-block">
                <span className="stat-block__value">{stat.value}</span>
                <span className="stat-block__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="quote-band" data-reveal>
          <span className="eyebrow">Chasing the Quiet Light</span>
          <p>
            A curated anthology of landscapes captured in the quiet moments
            between light and shadow.
          </p>
        </section>

        <section className="editorial-section" id="featured-work">
          <div className="editorial-section__intro" data-reveal>
            <span className="eyebrow">Selected Works</span>
            <h2>Editorial frames built for depth, drift, and long-form scroll.</h2>
            <p>
              Inspired by Awwwards-style parallax showcases, this sequence uses
              staggered cards, pinned copy, and tonal spacing instead of hard
              divisions.
            </p>
          </div>

          <div className="work-stack">
            {featuredWorks.map((work, index) => (
              <article
                key={work.title}
                className="work-card glass-shell"
                data-reveal
              >
                <div
                  className="parallax-layer work-card__image"
                  data-parallax={index % 2 === 0 ? '0.09' : '-0.07'}
                >
                  <img alt={work.image.alt} src={work.image.src} />
                </div>
                <div className="work-card__copy">
                  <div className="work-card__meta">
                    <span>{work.category}</span>
                    <span>{work.year}</span>
                  </div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="camera-section">
          <div className="camera-section__inner">
            <div className="camera-copy" data-reveal>
              <span className="eyebrow">Instant Archive</span>
              <h2>Parallax through a photographer object, not just a stack of cards.</h2>
              <p>
                Keeping the current version intact, this section introduces a
                tactile instant-camera moment so the scroll feels tied to the
                act of making photographs, not only presenting them.
              </p>
              <p>
                Think drifting prints, field notes, and a camera body sitting
                inside the same soft editorial world already established by the
                hero and work stack.
              </p>
            </div>

            <div className="camera-stage">
              <div
                className="parallax-layer camera-body glass-shell"
                data-parallax="-0.03"
                data-reveal
              >
                <div className="camera-body__top">
                  <span>Jedidiah field archive</span>
                  <span>35mm / instant / quiet light</span>
                </div>
                <div className="camera-body__viewfinder" />
                <div className="camera-body__lens">
                  <span />
                </div>
                <div className="camera-body__slot" />
                <div className="camera-body__controls">
                  <span className="camera-body__status" />
                  <span className="camera-body__dial" />
                </div>
              </div>

              {cameraPrints.map((entry, index) => (
                <figure
                  key={`${entry.title}-instax`}
                  className={`parallax-layer instant-print instant-print--${index + 1}`}
                  data-parallax={String([0.1, -0.08, 0.12][index])}
                  data-reveal
                >
                  <div className="instant-print__frame">
                    <img alt={entry.image.alt} src={entry.image.src} />
                  </div>
                  <figcaption>
                    <span>
                      {
                        ['35mm / field note', 'portrait / soft light', 'lake / blue hour'][index]
                      }
                    </span>
                    <strong>{entry.title}</strong>
                  </figcaption>
                </figure>
              ))}

              <div
                className="parallax-layer camera-note glass-shell"
                data-parallax="0.06"
                data-reveal
              >
                <span className="eyebrow">Camera Note</span>
                <p>
                  The prints rise at different speeds so the section reads like
                  photographs being handled, not a generic gallery carousel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="about">
          <div className="story-section__copy" data-reveal>
            <span className="eyebrow">About the Practice</span>
            <h2>{about.title}</h2>
            <p>{about.body}</p>
            <p>
              Founding Jedidiah in the coastal mists of the Pacific Northwest,
              the work grew out of a single roll of 35mm film and a fascination
              with quiet, unforced moments.
            </p>
          </div>

          <div className="story-section__visuals">
            <figure
              className="parallax-layer story-card story-card--primary"
              data-parallax="0.08"
              data-reveal
            >
              <img alt={about.image.alt} src={about.image.src} />
            </figure>
            <figure
              className="parallax-layer story-card story-card--secondary"
              data-parallax="-0.06"
              data-reveal
            >
              <img
                alt={galleryEntries[2].image.alt}
                src={galleryEntries[2].image.src}
              />
            </figure>
            <div className="story-note glass-shell" data-reveal>
              <span className="eyebrow">Field Note</span>
              <p>
                The images are paced like an essay: wide frame, narrow detail,
                then a return to atmosphere.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="gallery-section__heading" data-reveal>
            <span className="eyebrow">Gallery Flow</span>
            <h2>Quietude in the natural world, arranged as moving fragments.</h2>
          </div>

          <div className="contact-sheet-strip" data-reveal>
            <span>Roll 04</span>
            <span>24 exposures</span>
            <span>Pacific Northwest</span>
            <span>archive / selected contacts</span>
          </div>

          <div className="gallery-grid">
            {galleryEntries.map((entry, index) => {
              const layout = galleryLayouts[index % galleryLayouts.length]

              return (
                <article
                  key={`${entry.title}-${entry.tag}`}
                  className={`gallery-card ${layout.span}`}
                  data-reveal
                  style={{ '--card-shift': layout.shift }}
                >
                  <div
                    className="parallax-layer gallery-card__image"
                    data-parallax={String(layout.speed)}
                  >
                    <img alt={entry.image.alt} src={entry.image.src} />
                  </div>
                  <div className="gallery-card__caption glass-shell">
                    <span>{entry.tag}</span>
                    <h3>{entry.title}</h3>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-section__backdrop">
            <img
              alt={galleryEntries[4].image.alt}
              className="parallax-layer"
              data-parallax="-0.08"
              src={galleryEntries[4].image.src}
            />
          </div>

          <div className="cta-shell glass-shell mounted-print" data-reveal>
            <span className="eyebrow">Let&apos;s craft your visual legacy</span>
            <h2>{contact.heading}</h2>
            <p>{contact.body}</p>
            <div className="cta-shell__stamp">Mounted print / desk proof</div>
            <div className="cta-shell__meta">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>{contact.location}</span>
            </div>
            <div className="cta-shell__actions">
              {contact.socials.map((social) => (
                <a key={social.label} href={social.href}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Jedidiah</span>
        <p>Every frame is a dialogue with time.</p>
      </footer>
    </div>
  )
}

export default App
