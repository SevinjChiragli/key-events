document.addEventListener("keydown", (ev) => {
  if (
    ev.key === "Enter" &&
    document.querySelector("div").style.display === "none"
  ) {
    document.querySelector("div").style.display = "block";
  } else if (
    ev.key === "Enter" &&
    document.querySelector("div").style.display === "block"
  ) {
    document.querySelector("div").style.display = "none";
  }
});
