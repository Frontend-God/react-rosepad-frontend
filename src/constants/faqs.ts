import { genID } from "utils/functions";

export default [
  {
    title: "Calculate your stake",
    description:
      "Our token staking is designed to reward our most loyal supporters. By combining the stake amount with a lock-up period, a smaller holder with a longer lock-up can earn the same rewards as a big holder with shorter lock-up.",
  },
  {
    title: "Rosepad Tiers",
    description:
      "Our token staking is designed to reward our most loyal supporters. By combining the stake amount with a lock-up period, a smaller holder with a longer lock-up can earn the same rewards as a big holder with shorter lock-up.",
  },
  {
    title: "xRPAD",
    description:
      "Our token staking is designed to reward our most loyal supporters. By combining the stake amount with a lock-up period, a smaller holder with a longer lock-up can earn the same rewards as a big holder with shorter lock-up.",
  },
  {
    title: "Fee Distribution",
    description:
      "Our token staking is designed to reward our most loyal supporters. By combining the stake amount with a lock-up period, a smaller holder with a longer lock-up can earn the same rewards as a big holder with shorter lock-up.",
  },
].map((e) => ({ ...e, id: genID() }));
