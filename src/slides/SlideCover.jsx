import { useEffect, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";
import EmberGlow from "../components/EmberGlow";
import PlumGlow from "../components/PlumGlow";
import TealGlow from "../components/TealGlow";

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

export default SlideCover;
