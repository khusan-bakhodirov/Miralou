const list_item = document.querySelectorAll(".list_item");
list_item.forEach((item) => {
  item.addEventListener("mouseover", () => {
    if (item.querySelector(".sublinks")) {
      item.querySelector(".sublinks").style.display = "flex";
    }
  });
  item.addEventListener("mouseout", () => {
    if (item.querySelector(".sublinks")) {
      item.querySelector(".sublinks").style.display = "none";
    }
  });
});

