import BrandMark from "../components/BrandMark";
import EmberGlow from "../components/EmberGlow";
import Eyebrow from "../components/Eyebrow";
import Diamond from "../components/Diamond";
import PageMeta from "../components/PageMeta";

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

export default SlideWhy;
