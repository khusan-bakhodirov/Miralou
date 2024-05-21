const description_btn = document.querySelector(".btn_description");
const product_description = document.querySelector(".product_description");
const btn_icon = document.querySelector(".product_btn-icon");
const modal = document.querySelector(".product_modal");
const images = document.querySelectorAll(".product_img");
const overlay = document.querySelector(".overlay");
const close_btn = document.querySelector(".close");
const product_variants = document.querySelectorAll(".product_variant");
const price = document.querySelector('.product_exact-price')
const compare_price = document.querySelector('.prodcut_compare-price');




// handle description toggling

description_btn.addEventListener("click", () => {
  product_description.classList.toggle("active");
  btn_icon.classList.toggle("active");
});

// handle img modal

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
    modal.src = image.src;
  });
});

close_btn.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

// handle product variants
product_variants.forEach((variant, index) => {
  if (index == 0) {
    variant.querySelector("input").setAttribute("name", "id");
    variant.classList.add("selected_variant");
  } else {
    variant.querySelector("input").removeAttribute("name");
  }
});
product_variants.forEach((variant) => {
  variant.addEventListener("click", () => {
    product_variants.forEach((item) => {
      item.querySelector("input").removeAttribute("name");
      item.classList.remove("selected_variant");
    });
    variant.querySelector("input").setAttribute("name", "id");
    variant.classList.add("selected_variant");
    price.textContent = window.formatPrice(variant.getAttribute("data-price"));
    console.log(Number(variant.getAttribute("data-compare")) > Number(variant.getAttribute("data-price")))
    if (compare_price && Number(variant.getAttribute("data-compare")) > Number(variant.getAttribute("data-price"))) {
      compare_price.textContent = window.formatPrice(
        variant.getAttribute("data-compare")
      );
    }else {
      compare_price.textContent = '';
    }
  });
});

// SWIPER JS
let swiperMobile = new Swiper(".mobile_product-gallery", {
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});
