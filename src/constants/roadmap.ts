import diamond from "assets/icons/diamond.svg";
import rocket from "assets/icons/rocket.svg";
import logo from 'assets/images/launch.png';
import { genID } from "utils/functions";
import { ROADMAP_MILESTONES } from "./consts";


export default [
  {
    title: "Beginning",
    time: "2021 Q4",
    icon: rocket,
    items: [
      "Idea Formation",
      "Team Formation",
      "Website Development",
      "Strategy",
      "Preliminary NFT art",
    ],
    status: ROADMAP_MILESTONES.current,
  },
  {
    title: "Development and Fundraising",
    time: "2022 Q1",
    icon: logo,
    items: [
      "Finalized NFT artwork",
      "Finalized Design",
      "Marketing Campaigns",
      "RoseApes NFT Mint",
      "Partnerships",
      "Frontend Developed",
    ],
    status: ROADMAP_MILESTONES.upcoming,
  },
  {
    title: "Launch",
    time: "2022 Q2",
    icon: diamond,
    items: [
      "Fundraising",
      "Beta Testing",
      "NFT Marketplace Listing",
      "Partnerships/IDOs",
      "Platform Launch",
    ],
    status: ROADMAP_MILESTONES.beginning,
  },
].map((e) => ({ ...e, id: genID() }));
