import keccak256 from "keccak256";
import { namehash } from "./namehash.js";

export function nameToId(name, isWrapped = false) {
  // TODO: Implement error for not .eth name
  var hash;
  if (isWrapped) {
    hash = namehash(name).toString("hex");
  } else {
    const labels = name.split(".");
    const secondLevelDomain = labels.at(-2);
    hash = "0x" + keccak256(secondLevelDomain).toString("hex");

    // TODO: Implement error for names without 2LD
  }

  return BigInt(hash).toString(10);
}
