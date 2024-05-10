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
const product_form  = document.querySelector('.product_form');
const product_quantity = document.querySelector('[name=quantity]')
const cart_modal = document.querySelector('.cart_modal');
const cart_modal_close = document.querySelector('.modal_close');
const product_btn = document.querySelector('.product_btn');
const cart_count = document.querySelector('.cart_count');
const wishlist_btn = document.querySelector('button_wishlist');
const customer = document.querySelector('.customer_id')
// handle product add
product_form.addEventListener('submit', async (e) => {
  e.preventDefault();
  product_btn.disabled = true;
  product_btn.querySelector('.product_btn-text').style.display = 'none';
  product_btn.querySelector('.button_spinner').style.display = 'block';
  const form_data  = new FormData(product_form);
  form_data.append('quantity', product_quantity.value);
  form_data.append('id', document.querySelector('[name=id]').value);
  const res = await  fetch('/cart/add.js', {
    method: 'POST',
    body: form_data,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  const cart_res = await fetch('/cart.js');
  const cart = await cart_res.json();
  const data = await res.json();
  if(data) {
    product_btn.disabled = false;
    product_btn.querySelector('.product_btn-text').style.display = 'block';
    product_btn.querySelector('.button_spinner').style.display = 'none';
    cart_modal.classList.add('active');
    cart_modal.querySelector('.cart_item-img').src = data.featured_image.url
    cart_modal.querySelector('.item_title').textContent = data.title
    cart_modal.querySelector('.item_variant').textContent = `Size: ${data.variant_title}`;
    cart_count.textContent = `View cart (${cart.item_count})`;
  }
})

cart_modal_close.addEventListener('click', () => {
  cart_modal.classList.remove('active');
})


function formatPrice(price, currency = '$') {
    // Convert price to a string and pad with zeros if necessary
    let priceString = String(price).padStart(3, '0');

    // Insert a decimal point two positions from the end
    priceString = priceString.slice(0, -2) + '.' + priceString.slice(-2);

    // Return the formatted price with currency symbol
    return currency + priceString;
}

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
    price.textContent = formatPrice(variant.getAttribute('data-price'));
    if(compare_price) {
      compare_price.textContent = formatPrice( variant.getAttribute('data-compare'));
    }
  });
});

function updateWishlist(customerId, productId, productTitle) {
  fetch('/account/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'xmlhttprequest'
    },
    body: JSON.stringify({
      form_type: 'customer',
      customer: {
        id: customerId,
        metafields: {
          wishlist: {
            [productId]: productTitle
          }
        }
      }
    })
  })
  .then(response => {
    if (response.ok) {
      // Wishlist updated successfully
      // Update UI accordingly
    } else {
      // Handle error
    }
  });
}

wishlist_btn.addEventListener('click', () => {
  updateWishlist(customer.value, document.querySelector('[name=id]').value, document.querySelector('.product_title').textContent);
})
// SWIPER JS
let swiper = new Swiper(".mobile_product-gallery", {
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
