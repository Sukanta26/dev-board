// Big Button click to blogs
document.getElementById("blogs-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const backBtn = document.getElementById("blogs-btn");

  if (backBtn) {
    window.location.href = "./blog.html";
  }
});
