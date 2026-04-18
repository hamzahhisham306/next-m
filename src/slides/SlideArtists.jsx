import BrandMark from "../components/BrandMark";
import Eyebrow from "../components/Eyebrow";
import PageMeta from "../components/PageMeta";

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

export default SlideArtists;
