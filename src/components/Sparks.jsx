const Sparks = () => (
  <div className="embers-anim" aria-hidden="true">
    {[{ left: "12%", top: "45%", animationDelay: "0s" },{ left: "86%", top: "30%", animationDelay: "1.2s" },{ left: "74%", top: "70%", animationDelay: "2.4s" },{ left: "24%", top: "78%", width: 2, height: 2, opacity: 0.5, animationDelay: ".6s" },{ left: "58%", top: "18%", width: 2, height: 2, opacity: 0.5, animationDelay: "1.8s" },{ left: "42%", top: "88%", width: 2, height: 2, opacity: 0.4, animationDelay: "3s" }].map((s, i) => <div key={i} className="spark" style={s} />)}
  </div>
);

export default Sparks;
