import BrandMark from "../components/BrandMark";
import EmberGlow from "../components/EmberGlow";
import Eyebrow from "../components/Eyebrow";
import PageMeta from "../components/PageMeta";

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

export default SlideGlance;
