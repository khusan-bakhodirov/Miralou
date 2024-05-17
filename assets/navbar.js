const list_items = document.querySelectorAll(".list_item");
list_items.forEach((item) => {
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

document.querySelector('.navbar_cart').addEventListener('click', () => {
  console.log('hello')
  window.cart.open()
})
