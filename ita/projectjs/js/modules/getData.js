const day = document.querySelector(".today");

function getData() {
   let dayOption = { day: "numeric", month: "short", weekday: "long" };
   let today = new Date();
   day.innerHTML = today.toLocaleDateString("ru-RU", dayOption);
}

export { getData };
