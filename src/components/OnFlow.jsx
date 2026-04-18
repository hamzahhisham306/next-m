import { useState, useEffect, useRef } from "react";

const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
};

const Eyebrow = ({ children, style }) => (
  <div className="eyebrow" style={style}><span className="eyebrow-line" />{children}</div>
);
const BrandMark = () => (<div className="brand-mark"><span className="dotmark" />ONFLOW</div>);
const PageMeta = ({ num, label }) => (<div className="page-meta"><span className="num">{num}</span><span className="bar" /><span>{label}</span></div>);
const Diamond = () => <span className="diamond" />;
const EmberGlow = ({ style }) => <div className="ember-glow" style={style} />;
const TealGlow = ({ style }) => <div className="teal-glow" style={style} />;
const PlumGlow = ({ style }) => <div className="plum-glow" style={style} />;

const Sparks = () => (
  <div className="embers-anim" aria-hidden="true">
    {[{ left: "12%", top: "45%", animationDelay: "0s" },{ left: "86%", top: "30%", animationDelay: "1.2s" },{ left: "74%", top: "70%", animationDelay: "2.4s" },{ left: "24%", top: "78%", width: 2, height: 2, opacity: 0.5, animationDelay: ".6s" },{ left: "58%", top: "18%", width: 2, height: 2, opacity: 0.5, animationDelay: "1.8s" },{ left: "42%", top: "88%", width: 2, height: 2, opacity: 0.4, animationDelay: "3s" }].map((s, i) => <div key={i} className="spark" style={s} />)}
  </div>
);

// ─── Slide 1: Cover ───
const SlideCover = () => {
  const waveRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;
    wave.innerHTML = "";
    const N = isMobile ? 28 : 72;
    for (let i = 0; i < N; i++) {
      const b = document.createElement("span");
      b.className = "wbar";
      const d = Math.abs(i - N / 2) / (N / 2);
      const h = 20 + (1 - d) * (isMobile ? 50 : 140 + Math.random() * 80);
      b.style.setProperty("--h", h + "px");
      b.style.animationDelay = Math.random() * 1.2 + "s";
      b.style.animationDuration = 1.1 + Math.random() * 0.8 + "s";
      wave.appendChild(b);
    }
  }, [isMobile]);

  return (
    <div className="slide s-cover">
      <div className="cover-stage">
        <div className="ring r1" />
        {!isMobile && <div className="ring r2" />}
        {!isMobile && <div className="ring r3" />}
      </div>
      <EmberGlow style={{ width: "clamp(300px,60vw,900px)", height: "clamp(300px,60vw,900px)", left: "50%", top: "70%", transform: "translate(-50%,-50%)" }} />
      {!isMobile && <PlumGlow style={{ width: 600, height: 600, left: "10%", top: "15%", opacity: 0.55 }} />}
      {!isMobile && <TealGlow style={{ width: 500, height: 500, right: "5%", bottom: "10%", opacity: 0.45 }} />}
      {!isMobile && (
        <div className="embers-anim" aria-hidden="true">
          {[{ left: "18%", top: "60%", animationDelay: "0s" },{ left: "78%", top: "42%", animationDelay: "1.2s" },{ left: "62%", top: "78%", animationDelay: "2.4s" },{ left: "48%", top: "24%", animationDelay: ".9s" },{ left: "24%", top: "70%", animationDelay: "2.1s" }].map((s, i) => <div key={i} className="spark" style={s} />)}
        </div>
      )}
      <div className="cover-wave" ref={waveRef} />
      <div className="content cover-content">
        <div className="cover-wrap">
          <div className="cover-eyebrow">
            <span className="line" />
            <span className="mono cover-eyebrow-text">Portfolio · MMXXVI · MENA</span>
            <span className="line r" />
          </div>
          <svg className="cover-wordmark" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" aria-label="ONFLOW">
            <defs>
              <linearGradient id="wm-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFF3DF" /><stop offset="45%" stopColor="#F5EDE0" /><stop offset="82%" stopColor="#E8621A" /><stop offset="100%" stopColor="#B54211" /></linearGradient>
              <filter id="wm-glow" x="-10%" y="-20%" width="120%" height="140%"><feGaussianBlur stdDeviation="12" result="b" /><feFlood floodColor="#E8621A" floodOpacity=".5" /><feComposite in2="b" operator="in" result="g" /><feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <text x="600" y="245" textAnchor="middle" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="260" letterSpacing="-3" fill="url(#wm-grad)" filter="url(#wm-glow)">ONFLOW</text>
          </svg>
          <div className="ember-underline" />
          <div className="cover-tagline">Music &amp; Audio Production<br /><span className="accent">That Scales Artists &amp; Brands</span></div>
          <div className="cover-stat">
            <span className="cstat-num">2.2B+</span>
            <span style={{ width: 1, height: 22, background: "rgba(227,180,72,.5)" }} />
            <span className="cstat-lbl">YouTube Views</span>
          </div>
        </div>
      </div>
      <div className="cover-footer">
        <div className="rec-dot">● REC · ON AIR</div>
        <div className="cover-footer-center">Powered by <span className="mark">SII PRODUCTION</span></div>
        <div className="cover-footer-right">Vol. 01 / 10</div>
      </div>
    </div>
  );
};

// ─── Slide 2: At a Glance ───
const SlideGlance = () => {
  const stats = [
    { eyebrowColor: undefined, eyebrowLabel: "Reach", numClass: "orange", num: "2.2B+", lbl: "YouTube Views", cardClass: "" },
    { eyebrowColor: "var(--teal)", eyebrowLabel: "Listeners", numClass: "teal-num", num: "1.5B+", lbl: "Cumulative Streams", cardClass: "teal" },
    { eyebrowColor: "var(--gold-hi)", eyebrowLabel: "Territory", numClass: "gold-num", num: "MENA", lbl: "Trusted Across the Region", cardClass: "gold", numClass2: "smaller" },
    { eyebrowColor: "#e97685", eyebrowLabel: "Pipeline", numClass: "crim-num", num: "END·TO·END", lbl: "Full-Stack Production", cardClass: "crimson", numClass2: "smallest" },
  ];
  return (
    <div className="slide s-glance">
      <BrandMark />
      <EmberGlow style={{ width: "clamp(300px,50vw,700px)", height: "clamp(300px,50vw,700px)", right: "-15%", top: "30%", opacity: 0.45 }} />
      <div className="content">
        <div className="glance-head">
          <div><Eyebrow style={{ marginBottom: "clamp(12px,2vw,24px)" }}>§ 01 — At a Glance</Eyebrow><h1 className="glance-title">The Numbers<br /><em>Speak First.</em></h1></div>
          <div className="glance-sub">A decade of chart-defining work across MENA — engineered end-to-end, measured in billions.</div>
        </div>
        <div className="glance-grid">
          {stats.map((s, i) => (
            <div key={i} className={`stat-card ${s.cardClass}`}>
              <div className="eyebrow stat-eyebrow" style={{ color: s.eyebrowColor }}><span className="eyebrow-line" />{s.eyebrowLabel}</div>
              <div className="glance-card"><div className={`gnum ${s.numClass} ${s.numClass2 || ""}`}>{s.num}</div><div className="glbl">{s.lbl}</div></div>
            </div>
          ))}
        </div>
      </div>
      <PageMeta num="01" label="At a Glance" />
    </div>
  );
};

// ─── Slide 3: Who We Are ───
const SlideWho = () => (
  <div className="slide s-who">
    <BrandMark />
    <div className="content who-content">
      <div className="who-left">
        <EmberGlow style={{ width: "80%", height: "80%", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
        <svg viewBox="0 0 600 600" className="who-svg" aria-hidden="true">
          <defs>
            <linearGradient id="goldgrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F3D37A" /><stop offset="100%" stopColor="#B54211" /></linearGradient>
          </defs>
          <circle cx="300" cy="300" r="260" stroke="#E8621A" strokeOpacity=".15" strokeWidth="1" fill="none" />
          <circle cx="300" cy="300" r="200" stroke="#F3D37A" strokeOpacity=".25" strokeWidth="1" fill="none" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="140" stroke="#E8621A" strokeOpacity=".5" strokeWidth="1.5" fill="none" />
          <circle cx="300" cy="300" r="80" stroke="#F3D37A" strokeOpacity=".8" strokeWidth="2" fill="none" />
          <rect x="280" y="280" width="40" height="40" transform="rotate(45 300 300)" fill="url(#goldgrad)" stroke="#F3D37A" strokeWidth="2" />
          <g stroke="#E8621A" strokeWidth="3" strokeLinecap="round"><line x1="20" y1="300" x2="60" y2="300" /><line x1="80" y1="300" x2="105" y2="300" /><line x1="125" y1="300" x2="180" y2="300" strokeOpacity=".6" /><line x1="420" y1="300" x2="475" y2="300" strokeOpacity=".6" /><line x1="495" y1="300" x2="520" y2="300" /><line x1="540" y1="300" x2="580" y2="300" /></g>
          <g stroke="#F3D37A" strokeWidth="3" strokeLinecap="round"><line x1="300" y1="20" x2="300" y2="60" /><line x1="300" y1="80" x2="300" y2="105" /><line x1="300" y1="495" x2="300" y2="520" /><line x1="300" y1="540" x2="300" y2="580" /></g>
        </svg>
        <div className="mono who-fig-label">fig. 01 — sound architecture</div>
        <div className="mono who-hz-label">440 Hz</div>
      </div>
      <div className="who-right">
        <Eyebrow>§ 02 — Identity</Eyebrow>
        <h1 className="who-title">Who<br />We <span className="accent">Are.</span></h1>
        <p className="who-body"><strong>OnFlow is a music and audio production house</strong> engineered for artists and brands that refuse to sound like anyone else. We score, record, mix and release — from the first chord to the final waveform.</p>
        <p className="who-body" style={{ marginTop: "clamp(12px,2vw,24px)" }}>Backed by <strong>SII Production</strong>, we operate at the intersection of creative direction and commercial scale. MENA is our home; the global stage is our benchmark.</p>
      </div>
    </div>
    <PageMeta num="02" label="Who We Are" />
  </div>
);

// ─── Slide 4: Why OnFlow ───
const SlideWhy = () => {
  const reasons = ["Chart-Proven Track Record Across MENA","End-to-End Production & Distribution Stack","Studio-Grade Engineering, Releases at Scale","Deep Commercial & Brand-Audio Expertise","A Network That Moves the Industry"];
  return (
    <div className="slide s-why">
      <BrandMark />
      <EmberGlow style={{ width: "clamp(200px,40vw,500px)", height: "clamp(200px,40vw,500px)", left: "-10%", top: "60%", opacity: 0.5 }} />
      <div className="content why-content">
        <div className="why-left">
          <Eyebrow style={{ marginBottom: "clamp(16px,3vw,36px)" }}>§ 03 — Why OnFlow</Eyebrow>
          <h1 className="why-title">Why<br /><em>OnFlow.</em></h1>
          <div className="rule-ember" style={{ marginTop: "clamp(20px,3vw,48px)", width: 140 }} />
          <p className="body why-sub">Five reasons serious artists and brands pick us before anyone else.</p>
        </div>
        <ul className="why-list">
          {reasons.map((r, i) => (<li key={i}><span className="idx">{String(i + 1).padStart(2, "0")}</span><Diamond /><span>{r}</span><span className="arrow">→</span></li>))}
        </ul>
      </div>
      <PageMeta num="03" label="Why OnFlow" />
    </div>
  );
};

// ─── Slide 5: Services ───
const SlideServices = () => {
  const services = [
    { num: "S/01", title: "Music\nProduction", items: ["Composition & topline", "Arrangement & sessions", "A&R & artist dev"] },
    { num: "S/02", title: "Audio\nEngineering", items: ["Tracking & editing", "Mixing & mastering", "Dolby / immersive"] },
    { num: "S/03", title: "Commercial\n& Media", items: ["Film & TV scoring", "Ads & sonic branding", "Game & UX sound"] },
    { num: "S/04", title: "Distribution & Growth", items: ["Global DSP release & playlisting", "YouTube / social audience growth", "Rights, royalties & publishing"], wide: true },
    { num: "S/05", title: "Special Services", items: ["National anthems & royal commissions", "Festival & event production", "Bespoke creative direction"], wide: true, special: true },
  ];
  return (
    <div className="slide s-services">
      <BrandMark />
      <div className="content">
        <div className="svc-head">
          <div><Eyebrow style={{ marginBottom: "clamp(12px,2vw,24px)" }}>§ 04 — Services</Eyebrow><h1 className="svc-title">What We <em>Build.</em></h1></div>
          <div className="mono svc-sub">Five Disciplines · One House</div>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card svc-card${s.wide ? " wide" : ""}`} style={s.special ? { background: "linear-gradient(180deg, #2a1208, #0c0810)", borderColor: "rgba(227,180,72,.35)" } : undefined}>
              <div><div className="svc-num" style={s.special ? { color: "var(--gold-hi)" } : undefined}>{s.num}</div><h3 dangerouslySetInnerHTML={{ __html: s.title.replace(/\n/g, "<br/>") }} /></div>
              <ul>{s.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <PageMeta num="04" label="Services" />
    </div>
  );
};

// ─── Slide 6: Top 5 Projects ───
const SlideProjects = () => {
  const projects = [{ rank: "№ 01", ar: "لما تكوني", tag: "Lamma Tkouny · 2025" },{ rank: "№ 02", ar: "حرب", tag: "Harb · 2024" },{ rank: "№ 03", ar: "هدندن", tag: "Hadandan · 2024" },{ rank: "№ 04", ar: "قدام الكل", tag: "Oddam El Kol · 2023" },{ rank: "№ 05", ar: "ليه لا", tag: "Leih La · 2023" }];
  return (
    <div className="slide s-projects">
      <BrandMark />
      <div className="content projects-content">
        <div className="projects-top">
          <div className="projects-head">
            <div><Eyebrow style={{ marginBottom: "clamp(12px,2vw,24px)" }}>§ 05 — Selected Works</Eyebrow><h2>Top 5 <em>Projects.</em></h2></div>
            <div className="mono projects-caption">Chart Peaks · 2023 — 2026<br /><span style={{ color: "var(--gold)" }}>Produced by OnFlow</span></div>
          </div>
        </div>
        <ul className="projects-list">{projects.map((p, i) => (<li key={i}><span className="rank">{p.rank}</span><span className="name-ar">{p.ar}</span><span className="tag-year">{p.tag}</span></li>))}</ul>
      </div>
      <PageMeta num="05" label="Top Projects" />
    </div>
  );
};

// ─── Slide 7: Artists ───
const SlideArtists = () => {
  const big = ["Hussam Sillawy", "Mohammad Assaf", "Noel Kharman", "Basel Khayat"];
  const standard = [{ name: "Rahma Riad" },{ name: "Issam Alnajjar", teal: true },{ name: "Saif Nabeel" },{ name: "Waed Bouhassoun" },{ name: "Zap Tharwat", teal: true },{ name: "Lana Lubany" },{ name: "Tamer Nafar" },{ name: "Balqees", teal: true },{ name: "Omar Kamal" },{ name: "Mayssa Karaa" },{ name: "Ayed" }];
  return (
    <div className="slide s-artists">
      <BrandMark />
      <div className="content">
        <div className="artists-head">
          <div><Eyebrow style={{ marginBottom: "clamp(12px,2vw,24px)" }}>§ 06 — Collaborators</Eyebrow><h1 className="artists-title">Artists We've<br /><em>Worked With.</em></h1></div>
          <div className="mono artists-caption">A short list.<br />The full one is longer.</div>
        </div>
        <div className="artists-grid">
          {big.map((n, i) => <span key={i} className="tag big"><span className="dot" />{n}</span>)}
          {standard.map((s, i) => <span key={i} className={`tag${s.teal ? " teal-tag" : ""}`}><span className="dot" />{s.name}</span>)}
          <span className="tag" style={{ opacity: 0.7 }}>+ many more</span>
        </div>
      </div>
      <PageMeta num="06" label="Artists" />
    </div>
  );
};

// ─── Slide 8: Brands ───
const SlideBrands = () => {
  const brands = ["Royal\nHashemite Court","UAE Ministry\nof Health","Sheikh Zayed\nFestival","Expo City\nDubai","Saudi Music\nCommission","MBC\nGroup","Anghami","Visit\nJordan","Red Sea\nGlobal","Rotana\nMusic","Dubai\nOpera"];
  return (
    <div className="slide s-brands">
      <BrandMark />
      <EmberGlow style={{ width: "clamp(200px,40vw,600px)", height: "clamp(200px,40vw,600px)", right: "-10%", bottom: "-15%", opacity: 0.3 }} />
      <div className="content">
        <div className="brands-head">
          <div><Eyebrow style={{ marginBottom: "clamp(12px,2vw,24px)" }}>§ 07 — Clients</Eyebrow><h1 className="brands-title">Brands &amp;<br /><em>Institutions.</em></h1></div>
          <div className="mono brands-caption">Royal houses, ministries<br />and flagship festivals.</div>
        </div>
        <div className="brands-grid">
          {brands.map((b, i) => <div key={i} className="brand-cell"><div className="no">B/{String(i + 1).padStart(2, "0")}</div><div className="nm" dangerouslySetInnerHTML={{ __html: b.replace(/\n/g, "<br/>") }} /></div>)}
          <div className="brand-cell brand-cell-highlight"><div className="no" style={{ color: "var(--gold-hi)" }}>+12</div><div className="nm nm-gradient">And<br />More.</div></div>
        </div>
      </div>
      <PageMeta num="07" label="Brands" />
    </div>
  );
};

// ─── Slide 9: How We Help ───
const SlideHow = () => {
  const artists = ["Develop a signature sound and body of work.","Produce, mix and master to international standard.","Release globally with DSP & YouTube strategy.","Grow audience through playlisting & campaigns.","Monetize rights, publishing and sync placements."];
  const brandsItems = ["Build a sonic identity — from logo to ad to app.","Score campaigns, films, and live experiences.","Collaborate with top MENA artists on brand anthems.","Produce bespoke audio for broadcast & media.","Measure lift — reach, recall, commercial result."];
  return (
    <div className="slide s-how">
      <BrandMark />
      <div className="content how-content">
        <div className="how-col left">
          <Eyebrow>§ 08.A — For Artists</Eyebrow>
          <h2>For<br /><em>Artists.</em></h2>
          <ul>{artists.map((a, i) => <li key={i}><span className="hnum">{String(i + 1).padStart(2, "0")}</span><span>{a}</span></li>)}</ul>
        </div>
        <div className="how-divider" />
        <div className="how-col right">
          <Eyebrow style={{ color: "var(--teal)" }}>§ 08.B — For Brands</Eyebrow>
          <h2>For<br /><em>Brands.</em></h2>
          <ul>{brandsItems.map((b, i) => <li key={i}><span className="hnum">{String(i + 1).padStart(2, "0")}</span><span>{b}</span></li>)}</ul>
        </div>
      </div>
      <PageMeta num="08" label="How We Help" />
    </div>
  );
};

// ─── Slide 10: Contact ───
const SlideContact = () => (
  <div className="slide s-contact">
    <EmberGlow style={{ width: "clamp(300px,70vw,900px)", height: "clamp(300px,70vw,900px)", left: "50%", top: "60%", transform: "translate(-50%,-50%)" }} />
    <Sparks />
    <div className="content contact-content-wrap">
      <div className="contact-inner">
        <div className="contact-eyebrow">
          <span className="line" />
          <span className="mono contact-eyebrow-text">§ 09 — Let's Talk</span>
          <span className="line r" />
        </div>
        <h1 className="contact-title">Let's Create<br />Something That<br /><em>Performs.</em></h1>
        <div className="contact-chips">
          <span className="chip"><span className="k">Tel</span><span className="cbar" />+962 · 7 · 9000 · 1200</span>
          <span className="chip"><span className="k">Mail</span><span className="cbar" />hello@onflow.studio</span>
          <span className="chip"><span className="k">IG</span><span className="cbar" />@onflow.studio</span>
        </div>
      </div>
    </div>
    <div className="contact-footer">ONFLOW · <span className="mark">Powered by SII Production</span> · MMXXVI</div>
  </div>
);

const SLIDES = [SlideCover, SlideGlance, SlideWho, SlideWhy, SlideServices, SlideProjects, SlideArtists, SlideBrands, SlideHow, SlideContact];

export default function OnFlowDeck() {
  return (
    <div className="deck-host">
      {SLIDES.map((Slide, i) => (
        <div key={i} className="deck-slide-wrap">
          <Slide />
        </div>
      ))}
    </div>
  );
}