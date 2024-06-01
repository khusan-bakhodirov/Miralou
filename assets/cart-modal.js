const cart_modal = document.querySelector(".cart_modal");
const cart_modal_close = document.querySelector(".modal_close");
const product_btn = document.querySelector(".product_btn");
const product_form = document.querySelector(".product_form");
const product_quantity = document.querySelector("[name=quantity]");

// handle product add
if (product_form) {
  product_form.addEventListener("submit", async (e) => {
    e.preventDefault();
    window.loaderAnimation(product_btn, 1.5)
    //add to cart
    await window.cart.add(document.querySelector("[name=id]").value);
    window.stopLoaderAnimation(product_btn, 'add to card')
   
  });
}

document.querySelectorAll(".upsell_btn").forEach((el) => {
  el.addEventListener("click", async () => {
    window.loaderAnimation(el, 1.5)
    await window.cart.add(
     el.getAttribute("data-variant")
    );
    window.stopLoaderAnimation(el, 'add to card')
  })
});

cart_modal_close.addEventListener("click", () => {
  cart_modal.classList.remove("active");
});

window.onclick = function (event) {
  if (
    !event.target.closest(".cart_modal") ||
    event.target.closest(".modal_close")
  ) {
    if (!event.target.closest(".navbar_cart-icon")) {
      window.cart.close();
    }
  }
};

document.querySelector(".navbar_cart-icon").addEventListener("click", () => {
  window.cart.open();
});

let swiperCart = new Swiper(".cartSwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,
});


document.querySelectorAll('.cart_item').forEach((el) => {
  const quantity = el.getAttribute('data-quantity')
  const inventory_quantity = el.getAttribute('data-inventory-quantity')
  console.log(inventory_quantity, quantity)
  if(inventory_quantity < quantity) {
    const id = el.querySelector('button[data-change="decrease"]').getAttribute('data-key');
    window.cart.decrease(id, inventory_quantity);
  }
})