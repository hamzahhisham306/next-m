import BrandMark from "../components/BrandMark";
import EmberGlow from "../components/EmberGlow";
import Eyebrow from "../components/Eyebrow";
import PageMeta from "../components/PageMeta";

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

export default SlideBrands;
