import keccak256 from "keccak256";
import { ens_normalize } from "@adraffy/ens-normalize";

export function namehash(name) {
  const emptyNode = "0".repeat(64);
  if (name == "" || name == undefined) {
    return "0x" + emptyNode;
  }

  const normalizedName = ens_normalize(name);

  const labels = normalizedName.split(".");

  const node = labels.reduceRight(
    (node, label) =>
      keccak256(
        Buffer.from(
          node.toString("hex") + keccak256(label).toString("hex"),
          "hex"
        )
      ),
    emptyNode
  );

  return "0x" + node.toString("hex");
}
