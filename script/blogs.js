document.getElementById("back-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const backBtn = document.getElementById("back-btn");

  if (backBtn) {
    window.location.href = "./index.html";
  }
});
