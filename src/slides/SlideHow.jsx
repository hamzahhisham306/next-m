import BrandMark from "../components/BrandMark";
import Eyebrow from "../components/Eyebrow";
import PageMeta from "../components/PageMeta";

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

export default SlideHow;
