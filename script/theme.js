const themes = ["#F8BBD0", "#E1BEE7", "#BBDEFB", "#B2EBF2", "#C8E6C9", "#FFF9C4", "#FFE0B2", "#D7CCC8"];

themeBtn.addEventListener("click", () => {
  const randomColor = themes[Math.floor(Math.random() * themes.length)];
  document.body.style.backgroundColor = randomColor;
});
