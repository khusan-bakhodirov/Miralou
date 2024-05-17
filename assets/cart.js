document.querySelectorAll(".quantity-change").forEach(function (button) {
  button.addEventListener("click", function () {
    var itemId = this.getAttribute("data-id");
    var change = this.getAttribute("data-change");
    const input = document.querySelector('.product_quantity');
    var newQuantity = parseInt(input.textContent);

    if (change === "increase") {
      newQuantity += 1;
    } else if (change === "decrease" && newQuantity > 0) {
      newQuantity -= 1;
    }

    fetch("/cart/change.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: itemId,
        quantity: newQuantity,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update cart");
        }
        return response.json();
      })
      .then((data) => {
        window.location.reload(); // Reload the page to update the cart
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
