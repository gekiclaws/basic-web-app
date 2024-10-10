import { parse } from "path";

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return ("chunkitw");
  }
  if (query.toLowerCase().includes("name")) {
    return ("Matthew");
  }
  if (query.toLowerCase().includes("largest")){
    let num = query.split(":")[0].split("?")[0].split(",");
    let max = Math.max(parseInt(num[0]),parseInt(num[1]),parseInt(num[2]));
    return max.toString();
  }

  return "";
}
