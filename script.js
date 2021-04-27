function changeRate() {
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  document.getElementById("current_rate").innerHTML = rate + "%";

  if ((amount && rate && years !== 0) || null) {
    document.getElementById("btn").innerHTML = "compute";
  }
}
function compute() {
  // p = document.getElementById("principal").value;
  let amount = document.getElementById("amount").value;
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let total = ((amount * rate) / 100) * years;

  if (amount || rate || years === 0) {
    alert("enter positive value");
  }

  let x = 2021;
  x += parseInt(years);
  document.getElementById("final_amount").innerHTML =
    "if you deposit          " + amount;
  document.getElementById("final_rate").innerHTML =
    "at an interst rate of          " + rate + "%";
  document.getElementById("total").innerHTML =
    "yow will recive an amount of           " + total;
  document.getElementById("final_year").innerHTML = "at the year          " + x;
}
