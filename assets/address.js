document.querySelectorAll('.edit_btn').forEach((el) => {
    el.addEventListener('click', () => {
        el.closest('.address_default-item').querySelector('.edit_form').classList.toggle('active')
    })
})