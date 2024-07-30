import { vars } from "hardhat/config";

const ZERO_BYTES32 = "0x0000000000000000000000000000000000000000000000000000000000000000";

const owner = vars.has("OWNER") ? vars.get("OWNER") : ZERO_BYTES32;

export const networks = {
  hardhat: {
    chainId: 31337,
  },
  gravity: {
    chainId: 1625,
    url: "https://rpc.gravity.xyz",
    accounts: [owner],
  },
};