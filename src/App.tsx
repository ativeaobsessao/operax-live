import { useEffect, useRef, useState, type ReactNode } from "react";
import { copy, FINAL_CTA_LINK, MEET_LINK } from "./copy";

type Token = string;

function Accent({ text, tokens }: { text: string; tokens: Token[] }) {
  const ordered = [...tokens].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${ordered.map((token) => token.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(pattern).map((part, index) =>
    tokens.includes(part) ? <span className="accent" key={`${part}-${index}`}>{part}</span> : <span key={`${part}-${index}`}>{part}</span>,
  );
}

function FinalCtaButton({ className = "" }: { className?: string }) {
  return <a className={`cta-button ${className}`} href={FINAL_CTA_LINK} target="_blank" rel="noopener noreferrer">{copy.cta}</a>;
}

function LiveButton() {
  return <span className="cta-button hero-cta live-cta">{copy.liveCta}</span>;
}

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const heroCtaRef = useRef<HTMLAnchorElement | null>(null);
  const finalCardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroCta = heroCtaRef.current;
    const finalCard = finalCardRef.current;
    if (!heroCta || !finalCard) return;

    let heroVisible = true;
    let finalVisible = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroCta) heroVisible = entry.isIntersecting;
        if (entry.target === finalCard) finalVisible = entry.isIntersecting;
      });
      setShowSticky(!heroVisible && !finalVisible);
    }, { threshold: 0.1 });

    observer.observe(heroCta);
    observer.observe(finalCard);
    return () => observer.disconnect();
  }, []);

  const renderAccent = (text: string, tokens: string[]) => <Accent text={text} tokens={tokens} />;
  const card = (children: ReactNode, className = "copy-card") => <section className={className}>{children}</section>;

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="content-column">
        <header className="brand-header" aria-label={copy.logo}>
          <span>OPERA</span><strong>X</strong>
        </header>

        <section className="hero-section">
          <h1>{renderAccent(copy.h1, ["OPERAX NEO"])}</h1>
          <h2>{renderAccent(copy.h2, ["300%", "OPERAX NEO"])}</h2>
          <p className="live-title">{copy.live}</p>
          <a ref={heroCtaRef} className="hero-cta-anchor" href={MEET_LINK} target="_blank" rel="noopener noreferrer"><LiveButton /></a>
        </section>

        <figure className="creative-frame">
          <img src="/operax-neo-960.webp" srcSet="/operax-neo-480.webp 480w, /operax-neo-960.webp 960w" sizes="(max-width: 512px) calc(100vw - 50px), 462px" width="960" height="960" alt={copy.imageAlt} loading="eager" fetchPriority="high" decoding="async" />
        </figure>

        {card(
          <>
            <p className="card-lead">{copy.returnTitle}</p>
            <p className="body-copy">{copy.support}</p>
            <p className="body-copy">{renderAccent(copy.returnBody, ["30% A 120% em uma semana"])}</p>
            <p className="body-copy">{copy.aiBody}</p>
          </>,
        )}

        {card(
          <>
            <h2 className="section-title">{copy.offersTitle}</h2>
            <article className="offer-card featured">
              <p>{renderAccent(copy.offer, ["R$ 500,00", "NEO"])}</p>
            </article>
            <div className="highlight-bar"><span>↗</span><p>{copy.warning}</p></div>
          </>,
          "offers-section",
        )}

        {card(
          <>
            <h3>{copy.bonusTitle}</h3>
            <p className="body-copy">{renderAccent(copy.bonus, ["100%"])}</p>
          </>,
          "copy-card bonus-card",
        )}

        <section className="final-card" ref={finalCardRef}>
          <p className="body-copy">{copy.closing}</p>
          <p className="final-warning">{copy.ctaLine}</p>
          <FinalCtaButton />
        </section>
      </div>

      {showSticky && <div className="sticky-cta"><FinalCtaButton /></div>}
    </main>
  );
}

export default App;
