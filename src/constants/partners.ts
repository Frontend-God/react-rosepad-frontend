import { genID } from "utils/functions";
import Partner1 from "assets/images/Venture.png";
import Partner2 from "assets/images/KV_wide.png";
import Partner3 from "assets/images/RoseApes.jpg";
import Partner4 from "assets/images/Hivemind.png";

export default [
  {
    link: "https://oddiyana.ventures/",
    src: Partner1,
  },
  {
    link: "https://kventurecapital.com/",
    src: Partner2,
  },
  {
    link: "https://roseape.io",
    src: Partner3,
  },
  {
    link: "https://www.hivemind.fund/",
    src: Partner4,
  },
].map((e) => ({ ...e, id: genID() }));
