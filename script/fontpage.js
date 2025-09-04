const taskCountEl = document.getElementById("taskCount");
const completedCountEl = document.getElementById("completedCount");
const activityLog = document.getElementById("activityLog");
const clearLogBtn = document.getElementById("clearLog");

// Task complete button click...............................................................
document.querySelectorAll(".completeBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const taskName = this.closest(".card-body").querySelector(".card-title").innerText;

    // Alert confirm
    if (confirm(`Are you sure you completed: "${taskName}"?`)) {
      let taskCount = parseInt(taskCountEl.innerText);
      let completedCount = parseInt(completedCountEl.innerText);

      if (taskCount > 0) {
        taskCountEl.innerText = taskCount - 1;
        completedCountEl.innerText = completedCount + 1;
      }

      // Add activity log with date + time......................................................
      const li = document.createElement("li");
      const now = new Date();
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const dateTime = now.toLocaleDateString("en-US", options);

      li.innerText = `[${dateTime}] ${taskName} marked as Completed ✅`;
      activityLog.appendChild(li);

      // Step 5: Disable clicked button.......................................................................................
      this.disabled = true;
      this.classList.add("btn-disabled");
    }
  });
});

// Clear Activity Log......................................................................................................................
clearLogBtn.addEventListener("click", () => {
  activityLog.innerHTML = "";
});
