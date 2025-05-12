const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");


const TodayDate = new Date();

const weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const totalMonths = ["january","february","march","april","may","june","july","august"
,"september","october","november","december"];


date.innerHTML = (TodayDate.getDate()<10?"0":"") + TodayDate.getDate();
day.innerHTML = weekDays[TodayDate.getDay()];
month.innerHTML = totalMonths[TodayDate.getMonth()];
year.innerHTML = TodayDate.getFullYear();