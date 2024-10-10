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
    let count = query.match(/plus/g);
    if(count != null && count.length == 2){
      let num1 = parseInt(query.split(" ")[2]);
      let num2 = parseInt(query.split(" ")[4]);
      let num3 = parseInt(query.split(" ")[6].split("?")[0]);
      return (num1+num2+num3).toString();
    }
    if (query.includes("multiplied")){
      let num1 = parseInt(query.split(" ")[2]);
      let num2 = parseInt(query.split(" ")[4]);
      let num3 = parseInt(query.split(" ")[7].split("?")[0]);
      return ((num1+num2)*num3).toString();
    }
    let num1 = parseInt(query.split(" ")[2]);
    let num2 = parseInt(query.split(" ")[4].split("?")[0]);
    return (num1+num2).toString();
  }
  if (query.includes("minus")){
    let num1 = parseInt(query.split(" ")[2]);
    let num2 = parseInt(query.split(" ")[4].split("?")[0]);
    return (num1-num2).toString();
  }
  if (query.includes("multiplied")){
    let num1 = parseInt(query.split(" ")[2]);
    let num2 = parseInt(query.split(" ")[5].split("?")[0]);
    return (num1*num2).toString();
  }
  if (query.includes("square and a cube")){
    let nums = query.split(": ")[1].split("?")[0].split(", ");
    for (let num of nums) {
      let numb = parseInt(num);
      const sqrt = Math.sqrt(numb);
      const cbrt = Math.cbrt(numb);
      if (Number.isInteger(sqrt) && Number.isInteger(cbrt)){
        return num;
      }
    }
  }
  if (query.includes("prime")){
    let nums = query.split(": ")[1].split("?")[0].split(", ");
    let list: number[] = [];
    for (let num of nums) {
      let numb = parseInt(num);
      if (isPrimeRegExp(numb)){
        list.push(numb);
      }
    }
    return list.join(", ")
  }
  if (query.includes("power")){
    let num1 = parseInt(query.split(" ")[2]);
    let num2 = parseInt(query.split(" ")[7].split("?")[0]);
    return (Math.pow(num1,num2)).toString();
  }

  return "";
}

function isPrimeRegExp(num: number) {
  return !/^1?$|^(11+?)\1+$/.test('1'.repeat(num));
}