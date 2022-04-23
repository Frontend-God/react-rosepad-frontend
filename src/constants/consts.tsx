import listView from "assets/icons/list.svg";
import tileView from "assets/icons/tile.svg";
import { genID } from "utils/functions";

export const SORT_BYS = [
  {
    id: "hot",
    label: "Hot",
  },
  {
    id: "trending",
    label: "Trending",
  },
  {
    id: "top",
    label: "Top",
  },
];

export const VIEW_OPTIONS = [
  {
    id: "list",
    label: "List",
    icon: listView,
  },
  {
    id: "tile",
    label: "Tile",
    icon: tileView,
  },
];

export const CHOOSE_OPTIONS = [
  {
    id: "live",
    label: "Live",
  },
  {
    id: "finished",
    label: "Finished",
  },
];

export enum PROJECT_CATEGORIES {
  live = "live",
  upcoming = "upcoming",
  finished = "finished",
}

export enum PROJECT_STATUS {
  open = "open",
  upcoming = "upcoming",
  soldout = "soldout",
}

export enum ROADMAP_MILESTONES {
  current = "current",
  completed = "completed",
  upcoming = "upcoming",
  beginning = "beginning"
}

export enum PROJECT_MILESTONES {
  preparation = "preparation",
  whitelist = "whitelist",
  lottery = "lottery",
  sale = "sale",
  distribution = "distribution",
}

export const PROJECT_MAP = [
  {
    id: PROJECT_MILESTONES.preparation,
    description: "This project is in preparation phase. Stay tuned.",
  },
  {
    id: PROJECT_MILESTONES.whitelist,
    description: "You can now whitelist yourself for the lottery.",
    cta: {
      label: "Register for Whitelist",
      cb: () => null,
    },
  },
  {
    id: PROJECT_MILESTONES.lottery,
    description: "See if you have any winning lottery tickets.",
  },
  {
    id: PROJECT_MILESTONES.sale,
    description: "Winners can participate in the token sale.",
  },
  {
    id: PROJECT_MILESTONES.distribution,
    description: "The tokens get distributed to sale participants.",
  },
];

export const FOOTER_LINKS = [
  { id: genID(), label: "Home", link: "/" },
  { id: genID(), label: "Token flow", link: "/token-flow" },
  { id: genID(), label: "Roadmap", link: "/roadmap" },
  { id: genID(), label: "Launch App", link: "/launch" },
  { id: genID(), label: "Terms of Service", link: "/terms" },
  { id: genID(), label: "Privacy Policy", link: "/privacy" },
];
