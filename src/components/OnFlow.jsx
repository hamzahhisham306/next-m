import SlideCover from "../slides/SlideCover";
import SlideGlance from "../slides/SlideGlance";
import SlideWho from "../slides/SlideWho";
import SlideWhy from "../slides/SlideWhy";
import SlideServices from "../slides/SlideServices";
import SlideProjects from "../slides/SlideProjects";
import SlideArtists from "../slides/SlideArtists";
import SlideBrands from "../slides/SlideBrands";
import SlideHow from "../slides/SlideHow";
import SlideContact from "../slides/SlideContact";

const SLIDES = [SlideCover, SlideGlance, SlideWho, SlideWhy, SlideServices, SlideProjects, SlideArtists, SlideBrands, SlideHow, SlideContact];

export default function OnFlowDeck() {
  return (
    <div className="deck-host">
      {SLIDES.map((Slide, i) => (
        <div key={i} className="deck-slide-wrap">
          <Slide />
        </div>
      ))}
    </div>
  );
}
