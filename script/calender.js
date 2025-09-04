function updateDateDay() {
  const now = new Date();

  // Day name array
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Date format:
  const dayName = days[now.getDay()];
  const date = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  document.getElementById("dateDay").innerText = `
  ${dayName},
  ${date}-${month}-${year}`;
}

updateDateDay();

setInterval(updateDateDay, 60000);
