"use strict";

const tabledata = document.querySelectorAll("td");
let oper = null;
let perv = "";
let nex = "";
let result = 0;
let expression = "";
let finalResult = 0;

const expresionData = document.querySelector(".expression");
const resultData = document.querySelector(".result");

tabledata.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      item.innerText === "+" ||
      item.innerText === "-" ||
      item.innerText === "X" ||
      item.innerText === "/" ||
      item.innerText === "%" ||
      item.innerText === "=" ||
      item.innerText === "^" ||
      item.innerText === "cut"
    ) {
      expression = expression + item.innerText;
      oper = item.innerText;
    } else if (item.innerText === "C") {
      (perv = 0), (nex = 0);
      expression = "";
      oper = item.innerText;
      result = 0;
    } else if (item.innerText === "cut") {
      if (oper === null) {
        perv = parseInt(perv / 10);
        expression = expression + item.innerText;
      } else if (oper !== null && nex !== "") {
        nex = parseInt(nex / 10);
        expression = perv + oper + nex;
      } else if (oper === null && nex === "") {
        expression = expression + item.innerText;
      }
      result = 0;
    } else if (oper === null) {
      expression = expression + item.innerText;
      perv = perv + item.innerText;
    } else if (oper !== null) {
      expression = expression + item.innerText;
      nex = nex + item.innerText;
    }

    expresionData.innerText = expression;

    console.log("Prev Value : ", perv);
    console.log("Next Value: ", nex);
    console.log("operator : ", oper);

    if (oper === "+" && nex !== "") {
      result = Number(perv) + Number(nex);
      resultData.innerText = result;
      console.log(result);
      if (nex.length > 0) {
        perv = result - Number(nex);
      }
      finalResult = result;
      result = 0;
    } else if (oper === "-" && nex !== "") {
      result = Number(perv) - Number(nex);
      resultData.innerText = result;
      console.log(result);
      perv = result;
      nex = "";
      result = 0;
    } else if (oper === "X" && nex !== "") {
      result = Number(nex) * Number(perv);
      resultData.innerText = result;
      console.log(result);
      perv = result;
      nex = "";
      result = 0;
    } else if (oper === "/" && nex !== "") {
      result = Number(perv) / Number(nex);
      resultData.innerText = result;
      console.log(result);
      perv = result;
      nex = "";
      result = 0;
    } else if (oper === "%" && nex !== "") {
      result = Number(perv) * (Number(nex) / 100);
      resultData.innerText = result;
      console.log(result);
      perv = result;
      nex = "";
      result = 0;
    } else if (oper === "=") {
      result = perv;
      resultData.innerText = result;
      console.log(result);
      perv = result;
      nex = "";
      result = 0;
    } else if (oper === "C") {
      result = 0;
      expression = "";
      resultData.innerText = result;
      console.log(result);
      nex = "";
      result = 0;
    } else if (oper === "^" && nex !== "") {
      result = Number(perv) ** Number(nex);
      resultData.innerText = result;
      console.log(result);
      perv = result;
      nex = "";
      result = 0;
    }
    if (result !== 0) {
      oper = null;
    }
  });
});
