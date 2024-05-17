class Cart {
  constructor() {
    this.addListeners();
  }
  async updateCart() {
    const res = await fetch("/?section_id=cart-modal");
    const section = await res.text();
    const div = document.createElement("div");
    div.innerHTML = section;
    const new_cart_modal = div.querySelector(".cart_modal-container").innerHTML;
    document.querySelector(".cart_modal-container").innerHTML = new_cart_modal;

    this.addListeners();
  }

  addListeners() {
    document.querySelectorAll(".remove_btn").forEach((btn, index) => {
        
      btn.addEventListener("click", () => 
        this.removeLineItem(index)
    );
    });
    // increase
    document
      .querySelectorAll('button[data-change="increase"]')
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const quantity = btn.previousElementSibling.textContent;
          loaderAnimation(btn.previousElementSibling, 0.9);
          this.increase(btn.getAttribute("data-key"), Number(quantity) + 1);
        });
      });
    //   decrease
    document
      .querySelectorAll('button[data-change="decrease"]')
      .forEach((btn, index) => {
        btn.addEventListener("click", () => {
          const quantity = btn.nextElementSibling.textContent;
          loaderAnimation(btn.nextElementSibling, 0.9);
          this.decrease(btn.getAttribute("data-key"), Number(quantity) - 1);
        });
      });
  }
  async add(id) {
    const form_data = new FormData();
    form_data.append("quantity", 1);
    form_data.append("id", id);

    const res = await fetch("/cart/add.js", {
      method: "POST",
      body: form_data,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    this.updateCart();
    this.open();
  }
  async decrease(id, quantity) {
    await fetch("/cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        updates: { [id]: quantity },
      }),
    });
    this.updateCart();
  }
  async increase(id, quantity) {
    await fetch("/cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        updates: { [id]: quantity },
      }),
    });
    this.updateCart();
  }
  async removeLineItem(index) {
    const res = await fetch("/cart/change.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        quantity: 0,
        line: index + 1,
      }),
    });
    this.updateCart();
  }

  close() {
    document.querySelector(".cart_modal").classList.remove("active");
  }
  open() {
    document.querySelector(".cart_modal").classList.add("active");
  }
}

window.cart = new Cart();


const loaderAnimation = (element, loaderSize) => {
  element.disabled = true;
  element.innerHTML =  `<div><svg xmlns="http://www.w3.org/2000/svg" width="${loaderSize}em" height="${loaderSize}em" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg></div>`
}
const stopLoaderAnimation = (element, text) => {
  element.innerHTML =  text
  element.disabled = false
}

window.loaderAnimation = loaderAnimation
window.stopLoaderAnimation = stopLoaderAnimation