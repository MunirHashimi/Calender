const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");


const TodayDate = new Date();

const weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const totalMonths = ["january","february","march","april","may","june","july","august"
,"september","october","november","december"];


date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = totalMonths[today.getMonth()];
year.innerHTML = today.getFullYear();