const list_items = document.querySelectorAll(".list_item");
const menu_button = document.querySelector('.mobile-menu-button')
let searchIcon = document.getElementById('search');
const navigation = document.querySelector('.navigation')
const closeIcon = document.querySelector('.close_icon')
const searchForm = document.querySelector('.search_form')

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
if(document.querySelector('.navbar_cart')) {

  document.querySelector('.navbar_cart').addEventListener('click', () => {
    window.cart.open()
  })
}

searchIcon.addEventListener('click', () => {
  searchForm.classList.add('active');
  document.querySelector('.search_input').focus();
 
})

closeIcon.addEventListener('click', () => {
  searchForm.classList.remove('active');
})

menu_button.addEventListener('click', function() {

  navigation.classList.toggle('active');
});
