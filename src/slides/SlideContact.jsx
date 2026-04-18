import EmberGlow from "../components/EmberGlow";
import Sparks from "../components/Sparks";

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

export default SlideContact;
