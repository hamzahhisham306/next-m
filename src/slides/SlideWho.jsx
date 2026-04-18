import BrandMark from "../components/BrandMark";
import EmberGlow from "../components/EmberGlow";
import Eyebrow from "../components/Eyebrow";
import PageMeta from "../components/PageMeta";

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

export default SlideWho;
