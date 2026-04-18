import BrandMark from "../components/BrandMark";
import Eyebrow from "../components/Eyebrow";
import PageMeta from "../components/PageMeta";

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

export default SlideProjects;
