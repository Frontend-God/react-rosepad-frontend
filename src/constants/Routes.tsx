import Home from "views/Home";

const ROUTES = [
  {
    id: "home",
    label: "HOME",
    link: "/",
    component: (params: any) => <Home {...params} />,
  },
  {
    id: "roadmap",
    label: "ROADMAP",
    scrollLink: "roadmap",
  },
  // {
  //   id: "trade",
  //   label: "Trade",
  //   link: "/trade/exchange",
  //   children: [
  //     {
  //       id: "exchange",
  //       label: "Exchange",
  //       link: "/trade/exchange",
  //     },
  //     {
  //       id: "liquidity",
  //       label: "Liquidity",
  //       link: "/trade/liquidity",
  //     },
  //   ],
  // },
  {
    id: "team",
    label: "TEAM",
    scrollLink: "team",
  },
  {
    id: "fag",
    label: "FAQ",
    link: "/fag",
  },
  {
    id: "nfts",
    label: "NFTS",
    link: "/nfts",
  },
];

export default ROUTES;
