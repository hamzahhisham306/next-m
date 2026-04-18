import BrandMark from "../components/BrandMark";
import Eyebrow from "../components/Eyebrow";
import PageMeta from "../components/PageMeta";

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

export default SlideServices;
