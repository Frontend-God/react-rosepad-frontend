import discord from "assets/icons/discord.svg";
// import facebook from "assets/icons/facebook.svg";
// import instagram from "assets/icons/instagram.svg";
import linkedin from "assets/icons/linkedin.svg";
import medium from "assets/icons/medium.svg";
import telegram from "assets/icons/telegram.svg";
import twitter from "assets/icons/twitter.svg";
import { genID } from "utils/functions";

export default [
  {
    title: "Twitter",
    img: twitter,
    link: "https://twitter.com/RosePadMedia",
  },
  {
    title: "Medium",
    img: medium,
    link: "https://rosepad.medium.com/",
  },
  {
    title: "Telegram",
    img: telegram,
    link: "http://t.me/RosePadMedia",
  },
  {
    title: "Discord",
    img: discord,
    link: "https://discord.gg/rosepad",
  },
  {
    title: "Linked In",
    img: linkedin,
    link: "https://www.linkedin.com/company/rosepad-io",
  },
].map((e) => ({ ...e, id: genID() }));
