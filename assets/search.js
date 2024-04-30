const searchIcon = document.getElementById('search');
const link_items = document.querySelector('.list_items');
const search_input = document.querySelector('.search_input');
searchIcon.addEventListener('click', () => {
    link_items.style.display = 'none';
    search_input.style.display = 'block';
})