import { genID } from "utils/functions";
import teamDennis from "assets/images/team_dennis.jpeg";
import teamAiva from "assets/images/team_aiva.jpeg";
import teamAlvin from "assets/images/team_alvin.jpeg";
// import { url } from "inspector";
// import roseLogo from "assets/mock/rose.png";
export default [
  {
    name: "Aiva",
    title: "Co-Founder",
    link: "https://www.linkedin.com/in/aivarasc/",
    image: teamAiva,
    extras: [
      "PhD Data Analyst",
      "5+ years in crypto",
      "Led an investment firm",
    ],
  },
  {
    name: "Alvin",
    title: "Co-Founder",
    link: "https://www.linkedin.com/in/alvinpreyes/",
    image: teamAlvin,
    extras: [
      "6+ years in Blockchain Industry / Web3. 10+ years in Software Engineering",
      "Certified Blockchain Architect",
      "Technical Advisor on NFT projects and P2E gaming companies",
      "Former CTO and Head of Technology of L1 blockchain companies",
      "Former HP, Oracle and IBM Software Engineer",
    ],
  },
  {
    name: "Dennis",
    title: "Co-Founder",
    link: "https://www.linkedin.com/in/dennis-gerodias-6a156457/",
    image: teamDennis,
    extras: ["Private Investor", "NFT & Crypto Trader", "Businessman"],
  },
].map((e) => ({ ...e, id: genID() }));
