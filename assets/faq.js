const dropdowns = document.querySelectorAll('.faq_dropdown');
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
        const dropdown_btn = dropdown.querySelector('.faq_button');
        dropdown.classList.toggle('active');
        if(dropdown_btn.classList.contains('button_primary')) {
            dropdown_btn.classList.remove('button_primary');
            dropdown_btn.classList.add('button_outline');
            return
        }
        if(dropdown_btn.classList.contains('button_outline')) {
            dropdown_btn.classList.add('button_primary');
            dropdown_btn.classList.remove('button_outline');
            return
        }
    }); 
})