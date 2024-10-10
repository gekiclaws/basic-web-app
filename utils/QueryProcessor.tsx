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
    let num1 = parseInt(query.split(" ")[8]);
    let num2 = parseInt(query.split(" ")[9]);
    let num3 = parseInt(query.split(" ")[10].split("?")[0]);
    let max = Math.max(num1, num2, num3);
    return max.toString();
  }
  if (query.includes("plus")){
    let num1 = parseInt(query.split(" ")[2]);
    let num2 = parseInt(query.split(" ")[4].split("?")[0]);
    return (num1+num2).toString();
  }
  if (query.includes("multiplied")){
    let num1 = parseInt(query.split(" ")[2]);
    let num2 = parseInt(query.split(" ")[5].split("?")[0]);
    return (num1*num2).toString();
  }

  return "";
}
