import roseLogo from "assets/mock/rose.png";
import {
  PROJECT_CATEGORIES,
  PROJECT_MILESTONES,
  PROJECT_STATUS,
} from "constants/consts";
import { random, range, round, sample } from "lodash";
import millify from "millify";
import moment from "moment";
import { genID } from "utils/functions";
import Tier1 from "./assets/images/tiers/Tier1.png";
import Tier2 from "./assets/images/tiers/Tier2.png";
import Tier3 from "./assets/images/tiers/Tier3.png";
import Tier4 from "./assets/images/tiers/Tier4.png";
import Tier5 from "./assets/images/tiers/Tier5.png";

import Platform1 from "./assets/images/platforms/Launchpad2.png";
import Platform2 from "./assets/images/platforms/DEX2.png";
import Platform3 from "./assets/images/platforms/Staking2.png";
import Platform4 from "./assets/images/platforms/Platform2.png";
import Platform5 from "./assets/images/platforms/Artwork2.png";

export const PLATFORMS = [
  {
    img: Platform1,
    title: "Launchpad",
    desc: "Advanced, inclusive and innovative tier system with multiple ways to gain access to new projects",
    subtitle: "Tier System",
  },
  {
    img: Platform2,
    title: "DEX",
    desc: "Intuitive DEX with constant uptime, instant finality and low gas fees (<0.01$). Cross-chain bridge",
    subtitle: "Trading Platform",
  },
  {
    img: Platform3,
    title: "Staking",
    desc: "Staking platform with high APY for higher returns LP farming and DeFi ecosystem",
    subtitle: "DeFi",
  },
  {
    img: Platform4,
    title: "Launch Platform",
    desc: "Help vested projects with fundraising, engagement, growth, advisory, liquidity and trading solutions",
    subtitle: "Full Support",
  },
  {
    img: Platform5,
    title: "Artwork",
    desc: "Incorporated NFTs within tier system with vaults Display artwork with upcoming marketplace",
    subtitle: "NFTs",
  },
];

export const T_CRYPTOS = [
  {
    id: "rose",
    symbol: "ROSE",
    img: roseLogo,
  },
  {
    id: "btc",
    symbol: "BTC",
    img: "https://cryptologos.cc/logos/thumbs/bitcoin.png?v=022",
  },
  {
    id: "eth",
    symbol: "ETH",
    img: "https://cryptologos.cc/logos/thumbs/ethereum.png?v=022",
  },
  {
    id: "usdt",
    symbol: "USDT",
    img: "https://cryptologos.cc/logos/thumbs/tether.png?v=022",
  },
  {
    id: "avax",
    symbol: "AVAX",
    img: "https://cryptologos.cc/logos/thumbs/avalanche.png?v=022",
  },
  {
    id: "shib",
    symbol: "SHIB",
    img: "https://cryptologos.cc/logos/thumbs/shiba-inu.png?v=022",
  },
  {
    id: "icp",
    symbol: "ICP",
    img: "https://cryptologos.cc/logos/thumbs/internet-computer.png?v=0222",
  },
  {
    id: "cake",
    symbol: "Cake",
    img: "https://cryptologos.cc/logos/thumbs/pancakeswap.png?v=022",
  },
  {
    id: "neo",
    symbol: "NEO",
    img: "https://cryptologos.cc/logos/thumbs/neo.png?v=022",
  },
  {
    id: "sand",
    symbol: "SAND",
    img: "https://cryptologos.cc/logos/thumbs/the-sandbox.png?v=022",
  },
  {
    id: "cro",
    symbol: "CRO",
    img: "https://cryptologos.cc/logos/thumbs/crypto-com-coin.png?v=022",
  },
  {
    id: "trx",
    symbol: "TRX",
    img: "https://cryptologos.cc/logos/thumbs/tron.png?v=022",
  },
  {
    id: "ada",
    symbol: "ADA",
    img: "https://cryptologos.cc/logos/thumbs/cardano.png?v=022",
  },
  {
    id: "bnb",
    symbol: "BNB",
    img: "https://cryptologos.cc/logos/thumbs/bnb.png?v=022",
  },
];

export const RANDOM_POOLS = [
  ["Rosium", "RSM"],
  ["Bancium", "BSM"],
  ["Kinx", "KXT"],
  ["Sitex", "STX"],
  ["Godelx", "GTF"],
  ["Pandelot", "PTT"],
  ["Staple", "SPL"],
];

export const T_FARMS = range(20).map((e) => ({
  id: genID(),
  pair: [sample(T_CRYPTOS), sample(T_CRYPTOS)],
  earned: `${millify(random(0, 100))} RPAD`,
  apr: `${millify(random(10, 1000))} %`,
  liquidity: `$ ${millify(random(1000, 1000000))}`,
  multiplier: `${random(10, 100)}x`,
  automaticRestaking: sample([true, false]),
}));

export const T_LIVE_POOLS = range(7).map((e) => {
  const item = sample(RANDOM_POOLS) || [];

  return {
    id: genID(),
    title: item[0],
    ticker: item[1],
    pair: [sample(T_CRYPTOS), sample(T_CRYPTOS)],
    description: "First Cross Platfrom VR Metaverse on Solana",
    raised: `$ ${millify(random(1000, 1000000))}`,
    price: `$ ${millify(random(0, 10, true))}`,
    roi: `${millify(random(0, 100, true))}`,
  };
});

export const T_PROJECTS = [
  {
    id: genID(),
    title: "CryptoVerse",
    category: sample(Object.keys(PROJECT_CATEGORIES)),
    symbol: "$CVRX",
    deadline: moment(Date.now()).add(random(10), "days").format("DD-MM-YY"),
    status: sample(Object.keys(PROJECT_STATUS)),
    raised: `$ ${millify(random(1000, 1000000))}`,
    allocation: `$ ${random(100, 250)}`,
    img: "http://www.logodesign.net/images/abstract-logo.png",
    cover:
      "https://www.cnet.com/a/img/resize/095e1ac8ae5963f27dcbf85b5464470cfca867eb/2022/01/18/141595b6-ec1b-4aab-a70f-d2882821e885/gettyimages-1348369701.jpg?auto=webp&width=940",
  },
  {
    id: genID(),
    title: "CryptoVerse",
    category: sample(Object.keys(PROJECT_CATEGORIES)),
    symbol: "$CVRX",
    deadline: moment(Date.now()).add(random(10), "days").format("DD-MM-YY"),
    status: sample(Object.keys(PROJECT_STATUS)),
    raised: `$ ${millify(random(1000, 1000000))}`,
    allocation: `$ ${random(100, 250)}`,
    img: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg",
    cover:
      "https://www.xrtoday.com/wp-content/uploads/2022/03/Top_Metaverse_Platforms_2022_Watch-1280x720.jpg",
  },
  {
    id: genID(),
    title: "CryptoVerse",
    category: sample(Object.keys(PROJECT_CATEGORIES)),
    symbol: "$CVRX",
    deadline: moment(Date.now()).add(random(10), "days").format("DD-MM-YY"),
    status: sample(Object.keys(PROJECT_STATUS)),
    raised: `$ ${millify(random(1000, 1000000))}`,
    allocation: `$ ${random(100, 250)}`,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DkCvMEpseZiNySFPftjs6kbcjuKA7cneFx7rLfkGzg_vZypOaBenmVyeDqyuQEhgqpc&usqp=CAU",
    cover:
      "https://www.cnet.com/a/img/resize/67745277fabec48599612ec5ef4c73c4e1421e06/hub/2022/03/21/738e0a4c-3eb3-4448-af1d-ad870042aa9f/metaverse-seq-00-11-47-18-still001.jpg?auto=webp&fit=cover&height=482&width=856",
  },
  {
    id: genID(),
    title: "CryptoVerse",
    category: sample(Object.keys(PROJECT_CATEGORIES)),
    symbol: "$CVRX",
    deadline: moment(Date.now()).add(random(10), "days").format("DD-MM-YY"),
    status: sample(Object.keys(PROJECT_STATUS)),
    raised: `$ ${millify(random(1000, 1000000))}`,
    allocation: `$ ${random(100, 250)}`,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ie7jQEVL7HWhY6aNyI0AMIMyPjugcpeLew&usqp=CAU",
    cover:
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/01/meta-mark-banner_11zon.jpg",
  },
  {
    id: genID(),
    title: "CryptoVerse",
    category: sample(Object.keys(PROJECT_CATEGORIES)),
    symbol: "$CVRX",
    deadline: moment(Date.now()).add(random(10), "days").format("DD-MM-YY"),
    status: sample(Object.keys(PROJECT_STATUS)),
    raised: `$ ${millify(random(1000, 1000000))}`,
    allocation: `$ ${random(100, 250)}`,
    img: "https://cdn.dribbble.com/users/1790153/screenshots/13669874/media/1429311d1d2d9151c670a38e597ef450.png?compress=1&resize=400x300",
    cover:
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/27/w1200X800/Metaverse_is_Coming.jpg",
  },
  {
    id: genID(),
    title: "CryptoVerse",
    category: sample(Object.keys(PROJECT_CATEGORIES)),
    symbol: "$CVRX",
    deadline: moment(Date.now()).add(random(10), "days").format("DD-MM-YY"),
    status: sample(Object.keys(PROJECT_STATUS)),
    raised: `$ ${millify(random(1000, 1000000))}`,
    allocation: `$ ${random(100, 250)}`,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJnWgvlWz5GC16a1ild0Ez0IGQfdIk97SXg&usqp=CAU",
    cover:
      "https://static.dezeen.com/uploads/2022/03/viceverse-big-virtual-office-metaverse-architecture_dezeen_2364_col_1.jpg",
  },
];

export const T_PROJECT_LOGOS = [
  "https://cdn.dribbble.com/users/1790153/screenshots/13669874/media/1429311d1d2d9151c670a38e597ef450.png?compress=1&resize=400x300",
  "http://www.logodesign.net/images/abstract-logo.png",
  "https://99designs-acquisition-frontend.imgix.net/serverless/images/categoryPage/hero/logo-design/04-artsigma.jpg",
  "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/32751/image/Logo%20Design%20Maker%20for%20Staffing%20Agency%20copy.jpg",
  "https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/01-story.jpg",
  "https://www.logosymmetry.co.uk/images/logo-design/illustrative-logo/05.jpg",
  "https://www.whitehot-creative.co.uk/wp-content/uploads/2019/02/secondary-school-logo-design-horizontal-version-the-nobel-school.jpg",
  "https://www.whitehot-creative.co.uk/wp-content/uploads/2017/05/edge-adventure-logo-design-branding-brochure-project-tile-500x500.gif",
];

export const T_IMAGES = [
  "https://lh3.googleusercontent.com/bim8QzFyJpW4hN5Y3qiaTF4DK5UWnsgO5JTF7RhBDzVwPxeFCba8zTlgj3YDr2INc9NlnTC8EvCu7G3KvFaPYUyRNf5rIj-UMmof=w600",
  "https://blog.liquid.com/hubfs/What%20is%20Metaverse_211018-01.png",
  "https://venturebeat.com/wp-content/uploads/2021/03/article23-1.jpg?w=1200&strip=all",
  "https://i0.wp.com/rayhaber.com/wp-content/uploads/2021/11/metaverse-oyun-sektorunu-nasil-degistirecek.jpg?fit=1780%2C1000&ssl=1",
  "https://res.cloudinary.com/dotcom-prod/images/c_fill,f_auto,g_faces:center,q_auto,w_1920/v1/wt-cms-assets/2021/12/jqcrnbx049xhavujddms/gamingcommerce.jpg",
  "https://image.cnbcfm.com/api/v1/image/105059181-readyplayerone.jpg?v=1529477718&w=1600&h=900",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPARTeRp6uShz9fGauLQ7fTMoqCdYdVRlLyg&usqp=CAU",
  "https://cdn.dribbble.com/users/1790153/screenshots/13669874/media/1429311d1d2d9151c670a38e597ef450.png?compress=1",
];

export const T_PROJECT = {
  id: genID(),
  title: "HIghstreet",
  symbol: "$CVRX",
  deadline: moment(Date.now()).add(random(10), "days").format("DD-MM-YY"),
  target: `$ ${millify(random(1000, 1000000))}`,
  map: [
    {
      id: PROJECT_MILESTONES.preparation,
      deadline: moment(Date.now())
        .subtract(random(2), "days")
        .format("DD-MM-YY"),
    },
    {
      id: PROJECT_MILESTONES.whitelist,
      deadline: moment(Date.now()).format("DD-MM-YY"),
    },
    {
      id: PROJECT_MILESTONES.lottery,
      deadline: moment(Date.now()).add(random(5), "days").format("DD-MM-YY"),
    },
    {
      id: PROJECT_MILESTONES.sale,
      deadline: moment(Date.now()).add(random(5), "days").format("DD-MM-YY"),
    },
    {
      id: PROJECT_MILESTONES.distribution,
    },
  ],
  stats: [
    {
      id: "poolSize",
      label: "Pool Size",
      value: `${millify(random(1000, 1000000))} HRT`,
    },
    {
      id: "hardCap",
      label: "Hard cap",
      value: `$ ${millify(random(1000, 1000000))} USD`,
    },
    {
      id: "tokenPrice",
      label: "Token Price",
      value: `${round(random(0, 1, true), 2)} USD`,
    },
    {
      id: "launchType",
      label: "Launch Type",
      value: `Vested`,
    },
  ],
  info: {
    img: sample(T_IMAGES),
    title: "Next-gen blockchain multiplayer game",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit  lobortis nisl ut aliquip ex ea commodo consequat. ",
  },
  details: [
    {
      id: genID(),
      label: "About",
      title:
        "Highstreet is the bridge between virtual worlds, real life, and the web",
      info: {
        title: "Next-gen blockchain multiplayer game",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit  lobortis nisl ut aliquip ex ea commodo consequat. \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel  ",
      },
      img: sample(T_IMAGES),
    },
    {
      id: genID(),
      label: "Problem",
      title:
        "Highstreet is the bridge between virtual worlds, real life, and the web",
      info: {
        title: "Next-gen blockchain multiplayer game",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit  lobortis nisl ut aliquip ex ea commodo consequat. \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel  ",
      },
      img: sample(T_IMAGES),
    },
    {
      id: genID(),
      label: "Features",
      title:
        "Highstreet Market is a specialized marketplace specifically created for limited edition products.",
      info: {
        title: "Next-gen blockchain multiplayer game",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit  lobortis nisl ut aliquip ex ea commodo consequat. \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel  ",
      },
      img: sample(T_IMAGES),
    },
    {
      id: genID(),
      label: "Roadmap",
      title: "2022 Product Roadmap",
      info: {
        title: "Next-gen blockchain multiplayer game",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit  lobortis nisl ut aliquip ex ea commodo consequat. \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel  ",
      },
      img: sample(T_IMAGES),
    },
    {
      id: genID(),
      label: "Tokenomics",
      title: "Our Tokenomics",
      info: {
        title: "Next-gen blockchain multiplayer game",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit  lobortis nisl ut aliquip ex ea commodo consequat. \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel  ",
      },
      img: sample(T_IMAGES),
    },
  ],
};

export const T_APE_NFTS: any[] = range(50)
  .map(() =>
    sample([
      {
        title: "tier1",
        subtitle: "Ape God - Blue",
        price: `${millify(random(1000, 1000000))}`,
        lottery: `${millify(random(10, 100))}`,
        src: Tier1,
      },
      {
        title: "tier2",
        subtitle: "Ape God - Blue",
        price: `${millify(random(1000, 1000000))}`,
        lottery: `${millify(random(10, 100))}`,
        src: Tier2,
      },
      {
        title: "tier3",
        subtitle: "Ape God - Blue",
        lottery: `${millify(random(10, 100))}`,
        price: `${millify(random(1000, 1000000))}`,
        src: Tier3,
      },
      {
        title: "tier4",
        subtitle: "Ape God - Blue",
        lottery: `${millify(random(10, 100))}`,
        price: `${millify(random(1000, 1000000))}`,
        src: Tier4,
      },
      {
        title: "tier5",
        subtitle: "Ape God - Blue",
        lottery: `${millify(random(10, 100))}`,
        price: `${millify(random(1000, 1000000))}`,
        src: Tier5,
      },
    ])
  )
  .map((e) => ({ ...e, id: genID() }));

export const T_STATS = [
  {
    label: "Total Value Locked",
    value: `$ ${millify(random(1000, 100000))}`,
  },

  {
    label: "Average APY",
    value: `${millify(random(10, 1000))} %`,
  },
  {
    label: "RPAD Staked",
    value: `${millify(random(1000, 10000000))} RAPD`,
  },
  {
    label: "Unique Stakers",
    value: `${millify(random(10, 10000))}`,
  },
  {
    label: "RPAD-LP Staked",
    value: `$ ${millify(random(10, 100000))}`,
  },
].map((e) => ({ ...e, id: genID() }));
