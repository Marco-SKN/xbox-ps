const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseover", () => {
  container.classList.add("hover-left");
  console.log("clicked!");
});
left.addEventListener("mouseout", () => {
  container.classList.remove("hover-left");
  console.log("clicked!");
});
right.addEventListener("mouseover", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseout", () =>
  container.classList.remove("hover-right")
);
