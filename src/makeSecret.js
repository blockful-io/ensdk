import { namehash } from "./namehash.js";

export function makeSecret(source = "") {
  // https://docs.ens.domains/ens-improvement-proposals/ensip-14-platform-source-parameter
  const sourceHex = namehash(source).slice(0, 10);
  const sourceHexLength = sourceHex.length;
  const randomHex = [...Array(64 - sourceHexLength)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

  return sourceHex + randomHex;
}
