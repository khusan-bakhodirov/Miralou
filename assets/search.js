const searchIcon = document.getElementById('search');
const link_items = document.querySelector('.list_items');
const search_input = document.querySelector('.search_input');
const menu_button = document.querySelector('.mobile-menu-button')
const navigation = document.querySelector('.navigation')
searchIcon.addEventListener('click', () => {
    link_items.style.display = 'none';
    search_input.style.display = 'block';
})

console.log(navigation)

menu_button.addEventListener('click', function() {
    navigation.classList.toggle('active');
});