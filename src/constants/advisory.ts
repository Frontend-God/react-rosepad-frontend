import { genID } from "utils/functions";
// import teamAiva  from "assets/images/team_aiva.jpeg";

export default [
  {
    name: "Fabian",
    title: "Partner at Oddiyana Ventures",
    link: "https://www.linkedin.com/in/aivarasc/",
    image:
      "https://www.oddiyana.com/wp-content/uploads/2018/10/Oddiyana-logo-white.png",
    extras: [
      "Serial entrepreneur",
      "8+ years in crypto",
      "Digital marketing specialist",
    ],
  },
  {
    name: "Advisor 2",
    title: "Advisor",
    link: "#",
    image: "",
    extras: [],
  },
  // {
  //   name: "Dennis",
  //   title: "Co-Founder",
  //   link: "https://www.linkedin.com/in/dennis-gerodias-6a156457/",
  //   image: teamDennis,
  //   extras: ["Private Investor", "NFT & Crypto Trader", "Businessman"],
  // },
].map((e) => ({ ...e, id: genID() }));
